import { NextResponse } from 'next/server';
import { NextApiRequest } from 'next'
import prisma from '@/utils/prismaClient';
import { getServerSession } from 'next-auth';

export async function GET(req: NextApiRequest) {
  try {
    const session = await getServerSession(req);
    if (!session) return new NextResponse(JSON.stringify({ error: 'Unauthorized.' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { searchParams } = new URL(req.url as string)
    const id = searchParams.get('id')
    const film = await prisma.film.findFirst({ where: { id: id as string } })
    if (film) {
      return new NextResponse(JSON.stringify(film), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
        return new NextResponse(JSON.stringify({ error: 'Aucun film trouvé.' }), {
          status: 400,
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
