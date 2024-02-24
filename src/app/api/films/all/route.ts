import { NextResponse } from 'next/server';
import prisma from '@/utils/prismaClient';
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth';


export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await getServerSession(req);
    if (!session) return new Response(JSON.stringify({ error: 'Unauthorized.' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const film = await prisma.film.findMany()
    if (film) {
      return new Response(JSON.stringify(film), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
        return new Response(JSON.stringify({ error: 'Aucun film trouvé.' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        });
    }
  } catch (e) {
    console.log({ e });
  }
}
