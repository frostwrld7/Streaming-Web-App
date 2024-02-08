import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import UserModel from '@/models/User.model';
import FilmModel from '@/models/Film.model';

export async function POST(request: Request) {
  try {
    const { _id } = await request.json();
    const film = await FilmModel.findOne({ _id });
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

  return NextResponse.json({ message: 'Registered successfully.' });
}