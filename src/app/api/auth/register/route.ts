import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation'
import prisma from '@/utils/prismaClient';

export async function POST(request: Request) {
  try {
    const { email, username, password, passwordConfirm } = await request.json();

    if(!email || !username || !password || !passwordConfirm) {
      return new Response(JSON.stringify({ error: 'Certains paramètres sont manquants.' }), {
        status: 400,
      });
    }

    if (password !== passwordConfirm) {
      return new Response(JSON.stringify({ error: 'Les mots de passe ne correspondent pas.' }), {
        status: 400,
      });
    }

    const hashedPassword = await hash(password, 10);


    const user = await prisma.user.findFirst(
      {
        where: {
          OR: [
            {
              username: username
            },
            {
              email: email
            }
          ]
        }
      }
    )
    if (user) {
      return new Response(JSON.stringify({ error: 'Cet utilisateur existe déjà.' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        createdAt: Date.now()
      }
    })

    return new Response(JSON.stringify({ success: 'Utilisateur créé avec succès.' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (e) {
    console.log({ e });
    return new Response(JSON.stringify({ error: 'Une erreur a été détectée, veuillez contacter le support.' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}