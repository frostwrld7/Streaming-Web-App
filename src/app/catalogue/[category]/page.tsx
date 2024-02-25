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

export default function Home({ params }: { params: { category: string } }) {
  const session = useSession({
    required: true,
    onUnauthenticated() {
        redirect('/login');
    },
});  
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [categoryFilms, setCategoryFilms] = useState<FilmProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const images = [spiderMan, batMan, thor, deadpool];
  const options: { value: string, label: string }[] = [
    { value: "action", label: "Action" },
    { value: "comedy", label: "Comédie" },
    { value: "drama", label: "Drame" },
    { value: "scienceFiction", label: "Science-fiction" },
    { value: "horror", label: "Horreur" },
    { value: "romance", label: "Romance" },
    { value: "adventure", label: "Aventure" },
    { value: "fantasy", label: "Fantaisie" },
    { value: "animation", label: "Animation" },
    { value: "mystery", label: "Mystère" },
    { value: "thriller", label: "Thriller" },
    { value: "documentary", label: "Documentaire" },
    { value: "family", label: "Famille" },
    { value: "crime", label: "Crime" },
    { value: "historical", label: "Historique" },
    { value: "musical", label: "Musical" },
    { value: "war", label: "Guerre" },
    { value: "western", label: "Western" }
];

useEffect(() => {
    setIsLoading(true)
    fetch(`/api/films/findByCategory?category=${params.category}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (response) => {
        if(response.ok) {
        const films: FilmProps[] = await response.json()
        setCategoryFilms(films)
        return setIsLoading(false)
    }
    setIsLoading(false)
    if (response.status === 400) return setError('Aucun film disponible dans cette catégorie.')
    })
}, [])



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={`flex flex-col items-center justify-between min-h-screen p-24 bg-black h-[500vh]`}>
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
      <a className="text-xl font-bold text-white px-2 p-1 font-roboto border-2 border-transparent rounded-xl bg-[#FE0000] w-40">{session?.data?.user.username.slice(0, 12)}</a>
  </div>
  {error !== '' && (
                      <div className="w-[100vh] absolute mt-28 text-center">
                        <p className="font-lalezar text-red-500">{error}</p>
                      </div>
                    )}
  {isLoading && (
        <>
      <div className="absolute w-[100%] h-[100vh] flex justify-center items-center h-10 z-10">
        <div
      style={{ width: `100px`, height: `100px` }}
      className="animate-spin">
      <div className="h-full w-full border-4 border-t-red-500
       border-b-red-700 rounded-[50%]">
      </div>
    </div>
    <p className="absolute mb-36 text-4xl text-white text-shadow-[0_4px_8px_#000] shadow-black-500/50 font-lalezar">Chargement des ressources en cours...</p>
  </div>
  </>
      )}
  <h1 className="text-center absolute text-white font-lalezar text-shadow-[0_4px_8px_#000] shadow-black-500/50 text-6xl">Catalogue - {options.find((category) => category.value === params.category)?.label}</h1>
  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 absolute top-64 right-8 left-8">
          {categoryFilms.map((film, index) => (
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
