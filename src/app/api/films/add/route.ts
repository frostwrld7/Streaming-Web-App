import { NextResponse } from 'next/server';
import prisma from '@/utils/prismaClient';
import { getServerSession } from 'next-auth';
import { NextApiRequest } from 'next';
import admins from '@/admins.json' assert { type: 'json' }

export async function POST(req: Request) {
  try {
    const session = await getServerSession(req as unknown as NextApiRequest);
    if (!session) return new NextResponse(JSON.stringify({ error: 'Unauthorized.' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!admins.includes(session.user.email)) return new NextResponse(JSON.stringify({ error: 'Unauthorized.' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { title, description, url, category, image } = await req.json();
    if (!title || !description || !url || !category || !image) {
      return new NextResponse(JSON.stringify({ error: 'Certains paramètres sont manquants.' }), {
        status: 400,
      });
    }

    if (!url.includes('http://') && !url.includes('https://')) {
      return new NextResponse(JSON.stringify({ error: 'Le lien du film n\'est pas valide.' }), {
        status: 400,
      });
    }

    if (!image.includes('http://') && !image.includes('https://')) {
      return new NextResponse(JSON.stringify({ error: 'Le lien de l\'image n\'est pas valide.' }), {
        status: 400,
      });
    }

    const existingFilm = await prisma.film.findFirst({
      where: {
        title: title,
      },
    });

    if (existingFilm) {
      return new NextResponse(JSON.stringify({ error: 'Ce film existe déjà.' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    await prisma.film.create({
      data: {
        title,
        description,
        url,
        category,
        image,
      }
    });

    return new NextResponse(JSON.stringify({ success: 'Film ajouté avec succès.' }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    console.log({ e });
    return new NextResponse(JSON.stringify({ error: 'Erreur lors de l\'ajout du film.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
