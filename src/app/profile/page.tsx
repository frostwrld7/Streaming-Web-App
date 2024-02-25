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
  const session = useSession({
    required: true,
    onUnauthenticated() {
        redirect('/login');
    },
});  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
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
    <a href="/" className="text-white font-lalezar text-4xl relative bottom-[38px] left-14">CinéVerse</a>
  </div>
  <div className="absolute top-4 right-4 hover:scale-110 transition duration-500">
      <a className="text-xl font-bold text-white px-2 p-1 font-roboto border-2 border-transparent rounded-xl bg-[#FE0000] w-40">{session?.data?.user.username.slice(0, 12)}</a>
  </div>
  <div className="border-2 border-solid border-transparent rounded-xl shadow-2xl shadow-[0_4px_16px_#ed0010] shadow-[#ed0010]-500/50 w-96 h-[560px] lg:w-96 lg:h-[600px] xl:w-96 xl:h-[700px] absolute mt-16">
    <h1 className="font-lalezar text-4xl text-center text-white mt-8">Profile</h1>
    <h2 className="text-2xl font-lalezar text-white text-center relative top-16 text-shadow-[0_4px_16px_#000] shadow-black-500/50">Nom d'utilisateur</h2>
    <input readOnly type="text" value={session?.data?.user.username.slice(0, 12)} id="username" name="username" className="w-72 h-8 rounded-lg mt-20 text-center text-white font-lalezar text-xl relative left-12 bg-transparent border-transparent shadow-[0_4px_16px_#fff] shadow-white-500/50"></input>

    <h2 className="text-2xl font-lalezar text-white text-center relative top-20 text-shadow-[0_4px_16px_#000] shadow-black-500/50">E-mail</h2>
    <input readOnly type="text" value={session?.data?.user.email.slice(0, 25)} id="username" name="username" className="w-72 h-8 rounded-lg mt-24 text-center text-white font-lalezar text-xl relative left-12 bg-transparent border-transparent shadow-[0_4px_16px_#fff] shadow-white-500/50"></input>
  
    <h2 className="text-2xl font-lalezar text-white text-center relative top-20 text-shadow-[0_4px_16px_#000] shadow-black-500/50">Création</h2>
    <input readOnly type="text" value={`${new Date(session?.data?.user.createdAt as string).toLocaleDateString()} à ${new Date(session?.data?.user.createdAt as string).toLocaleTimeString()}`} id="username" name="username" className="w-72 h-8 rounded-lg mt-24 text-center text-white font-lalezar text-xl relative left-12 bg-transparent border-transparent shadow-[0_4px_16px_#fff] shadow-white-500/50"></input>
    <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })} className="text-xl relative left-24 top-16 text-center font-bold text-white px-2 p-1 font-roboto border-2 border-transparent rounded-xl bg-[#FE0000]">Se déconnecter</button>
  </div>
    </main>
  );
}
