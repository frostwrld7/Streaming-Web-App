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
    description: string,
    url: string,
    image: string,
    likes: number,
    dislike: number,
    category: string
  }

export default function Home({ params }: { params: { film: string } }) {
  const session = useSession({
    required: true,
    onUnauthenticated() {
        redirect('/login');
    },
});
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [filmData, setFilmData] = useState<FilmProps>({
    id: '',
    title: '',
    description: '',
    url: '',
    image: '',
    likes: 0,
    dislike: 0,
    category: ''
  })
  const [recommandationsFilms, setRecommandationsFilms] = useState<FilmProps[]>([]);
  const images = [spiderMan, batMan, thor, deadpool];

  useEffect(() => {
    if (session.status === 'loading') {
      return;
    }
    setIsLoading(true)
    fetch(`/api/films/findById?id=${encodeURIComponent(params.film)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(async response => {
        if (response.status === 401) return redirect('/films')
        if(response.ok) {
          const filmsFound: FilmProps = await response.json()
          setFilmData(filmsFound)
          fetch(`/api/films/findByCategory?category=${filmsFound.category}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          }).then(async response => {
            if(response.ok) {
            const films = await response.json()
            setIsLoading(false)
            return setRecommandationsFilms(films.filter((film: FilmProps) => film.id !== filmsFound.id))
            }
          })
        }
      })
  }, [session.status, session.data]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className='flex flex-col items-center justify-between min-h-screen p-24 bg-[#111111] h-[600vh]'>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
    <link href="https://fonts.googleapis.com/css2?family=Lalezar&display=swap" rel="stylesheet"></link>
      {isLoading && (
        <>
      <div className="w-[100%] h-[100vh] flex justify-center items-center h-10 z-10">
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
  <div className={`flex flex-col items-center justify-between min-h-screen p-24 bg-[#111111] ${isLoading ? 'opacity-60' : 'opacity-100'}`}>
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
      <a href='/profile' className="text-xl font-bold text-white px-2 p-1 font-roboto border-2 border-transparent rounded-xl bg-[#FE0000]">{session?.data?.user.username.slice(0, 12)}</a>
  </div>
  <div className="absolute max-w-sm top-28 w-80 lg:w-full border rounded-lg shadow bg-gray-800 border-gray-700">
    <a href="#">
        <img className="rounded-t-lg h-full max-h-[500px] w-full object-cover object-center" src={filmData.image} alt={filmData.id} />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white text-center">{filmData.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-400">{filmData.description}</p>
        <a href={`#${filmData.id}`} className="relative inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Regarder
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<iframe className="absolute top-[1120px] w-80 xl:w-[720px] xl:h-[620px] lg:w-[700px] lg:h-[600px] h-full" id={filmData.id} src={filmData.url} frameBorder={0} marginWidth={0} marginHeight={0} scrolling="NO" width={720} height={620} allowFullScreen={true}></iframe>
          <h2 className="absolute top-[1800px] font-lalezar text-black text-4xl text-white text-center mb-4 w-96">Voici d'autres titres qui pourraient vous plaire :</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 absolute top-[1900px] right-8 left-8">
          {recommandationsFilms.filter((film: FilmProps) => film.id !== filmData.id).map((film, index) => (
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
                  <h2 className="text-lg text-white text-shadow-[0_4px_8px_#000] shadow-black-500/50 font-lalezar mb-2">{film.title}</h2>
                  <a href={`/films/${film.id}`} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    Voir le film
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
    </main>
  );
}
