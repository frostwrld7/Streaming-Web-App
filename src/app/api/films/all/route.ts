import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import UserModel from '@/models/User.model';
import FilmModel from '@/models/Film.model';

export async function GET(request: Request) {
  try {

    const film = await FilmModel.find();
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