import { handler } from '@/app/api/auth/[...nextauth]/route';
import UserModel from '@/models/User.model';
import { IncomingMessage, ServerResponse } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from "next-auth/next"

export async function getServerSideProps(context: { req: any | NextApiRequest | (IncomingMessage & { cookies: Partial<{ [key: string]: string; }>; }); res: any | ServerResponse<IncomingMessage> | NextApiResponse; }) {
  const session = await getServerSession(context.req, context.res, handler)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  // const user = await UserModel.findOne({ $or: [{ username: session.user?.name }, { email: session.user?.email }] })

  return {
    props: {
      session,
      user: 'hum',
    },
  }
}