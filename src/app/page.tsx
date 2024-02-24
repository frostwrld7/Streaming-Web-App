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

export default function Home() {
  const session = useSession();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [spiderMan, batMan, thor, deadpool];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 bg-black" style={{ height: '100vh' }}>
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
    <a className="text-white font-lalezar text-4xl relative bottom-[38px] left-14">CinéVerse</a>
  </div>
  <div className="absolute top-4 right-4 hover:scale-110 transition duration-500">
    {session.status === 'authenticated' ? 
    (
      <a href='/profile' className="text-xl font-bold text-white px-2 p-1 font-roboto border-2 border-transparent rounded-xl bg-[#FE0000] w-40">{session.data.user.username.slice(0, 12)}</a>
    )
  :
  (
    <a href='/login' className="text-xl font-bold text-white px-2 p-1 font-roboto border-2 border-transparent rounded-xl bg-[#FE0000]">Se connecter</a>

  )}
  </div>
  <div className="absolute top-1/2 bottom-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
  <h1 className="xl:text-8xl text-6xl font-lalezar">CinéVerse™</h1>
  <h2 className="text-2xl font-normal font-roboto xl:w-[600px] w-[400px]">Explorez CinéVerse pour une variété de films, séries et animes, votre <span className="text-[#FE0000] text-shadow-[0_4px_8px_#FE0000] shadow-red-500/50 font-bold">passeport</span> pour le divertissement sans limites.</h2>
  <br />
  {session.status === 'authenticated' ?
  (
    <a href='/films' className="text-2xl w-48 xl:w-80 lg:w-72 absolute font-bold xl:left-32 lg:left-28 left-24 block font-roboto border-2 border-transparent rounded-xl p-1 px-2 bg-[#FE0000] hover:scale-110 transition duration-500">Commencer à regarder !</a>
  )
  :
  (
    <a href='/login' className="text-2xl w-48 xl:w-80 lg:w-72 absolute font-bold xl:left-32 lg:left-28 left-24 block font-roboto border-2 border-transparent rounded-xl p-1 px-2 bg-[#FE0000] hover:scale-110 transition duration-500">Commencer à regarder !</a>
  )
}
  </div>
    </main>
  );
}
