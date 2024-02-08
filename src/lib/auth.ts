import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import mongoose, { Model } from 'mongoose';
import bcrypt from 'bcrypt'
import { NextAuthOptions, User, getServerSession } from 'next-auth';
import UserModel from '@/models/User.model';
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';

export const authConfig: NextAuthOptions = {
    session: {
    strategy: "jwt",
  },
    providers: [
        CredentialsProvider({
            id: 'login',
            name: 'Sign in',
            credentials: {
                username: {
                    label: 'Nom d\'utilisateur/E-mail',
                    type: 'text',
                    placeholder: 'Nom d\'utilisateur/E-mail',
                },
                password: {
                    label: 'Mot de passe',
                    type: 'password',
                    placeholder: 'Mot de passe',
                },
            },
            async authorize(credentials) {
                if (!credentials || !credentials.username ||!credentials.password) 
                return null as unknown as User;
                const dbUser = await UserModel.findOne({ $or: [{ username: credentials.username }, { email: credentials.username }] })
                if (!dbUser) return null as unknown as User;
                const passwordMatch = bcrypt.compare(credentials.password, dbUser?.password);
                if (await passwordMatch) {
                const dbUserWithoutPassword: Object = {
                    username: dbUser.username,
                    email: dbUser.email,
                    createdAt: dbUser.createdAt
                }
                return dbUserWithoutPassword as User;
                }
                return null as unknown as User;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_API_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_API_CLIENT_SECRET as string,
            async profile(profile) {
                const dbUser = await UserModel.findOne({ $or: [{ username: profile.name }, { email: profile.email }] })
                if (dbUser) {
                    return {
                        id: profile.sub,
                        name: profile.name,
                        firstname: profile.given_name,
                        lastname: profile.family_name,
                        email: profile.email,
                        image: profile.picture,
                    }
                }
                const newUser = new UserModel({
                    username: profile.name,
                    email: profile.email,
                    createdAt: new Date()
                })

                await newUser.save();
                return {
                    id: profile.sub,
                    name: profile.name,
                    firstname: profile.given_name,
                    lastname: profile.family_name,
                    email: profile.email,
                    image: profile.picture,
                };
            }
        })
    ],
    callbacks: {
        async jwt({ user , token }) {
          if (user) {
            token.user = {...user}
          }
          return token
         },
        async session({ session, token }) {
          if (token?.user) {
            session.user = token.user as any
          }
          return session
        },
      },
}

export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
    return getServerSession(...args, authConfig)
  }