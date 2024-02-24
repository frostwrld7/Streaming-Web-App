'use client';
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import spiderMan from '@/public/spiderMan.jpg'
import logo from '@/public/logo.png'
import Image from 'next/image'
import batMan from '@/public/batman.jpg'
import thor from '@/public/thor.jpg'
import deadpool from '@/public/deadpool.jpg'

interface FilmProps {
  id: string,
  title: string,
  image: string,
}

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
        redirect('/login');
    },
});
const [error, setError] = useState('');
const [formData, setFormData] = useState({
  search: ''
});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [results, setResults] = useState<FilmProps[]>([])
  const images = [spiderMan, batMan, thor, deadpool];

  useEffect(() => {
    if (session.status === 'loading') {
      return;
    }
  }, [session.status, session.data]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSearchSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch(`/api/films/findByName?title=${encodeURIComponent(formData.search)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(async response => {
      if (response.status === 401) return setError('Erreur, veuillez vous reconnecter.')
      if(response.ok) {
        const filmsFound = await response.json()
        setResults(filmsFound)
      }
    })
  }

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const fieldName = e.currentTarget.name;
    const fieldValue = e.currentTarget.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
}

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 bg-black h-[600vh]">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
    <link href="https://fonts.googleapis.com/css2?family=Lalezar&display=swap" rel="stylesheet"></link>
    <div data-carousel="slide">
    <Image
          src={images[currentImageIndex].src}
          fill
          alt="hero"
          className="w-full h-full object-cover object-center z-9 transition-opacity duration-1000"
        />
  <div className="absolute inset-0 bg-black opacity-65" />
  </div>
  <div className="overflow-hidden absolute w-72 top-2 left-2">
    <Image
    src={logo.src}
    alt='logo'
    className="rounded-full"
    width={40}
    height={40}
    />
    <a href="/" className="text-white font-lalezar text-4xl relative bottom-[38px] left-14">CinéVerse</a>
  </div>
  <div className="absolute top-4 right-4 hover:scale-110 transition duration-500">
    {session.status === 'authenticated' ? 
    (
      <a href='/profile' className="text-xl font-bold text-white px-2 p-1 font-roboto border-2 border-transparent rounded-xl bg-[#FE0000]">{session.data.user.username.slice(0, 12)}</a>
    )
  :
  (
    <a href='/login' className="text-xl font-bold text-white px-2 p-1 font-roboto border-2 border-transparent rounded-xl bg-[#FE0000]">Se connecter</a>

  )}
  </div>
  <form onSubmit={handleSearchSubmit} className="max-w-sm absolute">
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    onChange={handleInput}
                    name='search'
                    type="text"
                    placeholder="Rechercher..."
                    className="w-80 py-2 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
            </div>
        </form>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 absolute top-64 right-8 left-8">
          {results.map((film, index) => (
            <div
              key={index}
              className="relative group overflow-hidden transition duration-300 transform hover:scale-105"
            >
              <img
                src={film.image}
                alt={film.title}
                className="w-full h-64 object-cover rounded-md transition-opacity duration-300 group-hover:opacity-30"
                />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="text-center">
                  <h2 className="text-lg text-white text-shadow-[0_4px_8px_#000] shadow-black-500/50 font-bold font-lalezar mb-2">{film.title}</h2>
                  <a href={`/films/${film.id}`} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    Voir le film
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
    </main>
  );
}
