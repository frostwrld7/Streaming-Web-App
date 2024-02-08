import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import UserModel from '@/models/User.model';
import FilmModel from '@/models/Film.model';
import randomID from '@/utils/randomID';

export async function POST(request: Request) {
  try {
    const { title, shortDescription, link, category, image } = await request.json();
    console.log(title, shortDescription, link, category, image);
    if (!title || !shortDescription || !link || !category || !image) {
      return new Response(JSON.stringify({ error: 'Certains paramètres sont manquants.' }), {
        status: 400,
      });
    }

    if (!link.includes('http://') && !link.includes('https://')) {
      return new Response(JSON.stringify({ error: 'Le lien n\'est pas valide.' }), {
        status: 400,
      });
    }

    const film = await FilmModel.findOne({ title: title });
    if (film) {
      return new Response(JSON.stringify({ error: 'Ce film existe déjà.' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const newFilm = new FilmModel({
      title,
      shortDescription,
      link,
      category,
      image,
      createdAt: Date.now()
    });
    await newFilm.save();
    return new NextResponse(JSON.stringify({ success: 'Film ajouté avec succès.' }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: 'Registered successfully.' });
}