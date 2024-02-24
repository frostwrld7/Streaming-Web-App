import { NextResponse } from 'next/server';
import prisma from '@/utils/prismaClient';
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth';


export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await getServerSession(req);
    if (!session) return new NextResponse(JSON.stringify({ error: 'Unauthorized.' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { searchParams } = new URL(req.url as string)
    const title = searchParams.get('title')
    if (!title) {
      return new NextResponse(JSON.stringify({ error: 'Veuillez fournir un titre de film.' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const film = await prisma.film.findMany({
      take: 20,
      where: {
        title: {
          contains: title.toString(),
          mode: 'insensitive',
        },
      },
    });

    if (film.length > 0) {
      return new NextResponse(JSON.stringify(film), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      return new NextResponse(JSON.stringify({ error: 'Aucun film trouvé.' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (e) {
    console.log({ e });
    return new NextResponse(JSON.stringify({ error: 'Erreur du serveur.' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
  }
}
