'use client';
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import spiderMan from '@/public/spiderMan.jpg'
import logo from '@/public/logo.png'
import Image from 'next/image'

export default function Home() {
  const { data: session} = useSession();
  
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24" style={{ height: '100vh' }}>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
    <link href="https://fonts.googleapis.com/css2?family=Lalezar&display=swap" rel="stylesheet"></link>
    <div>
    <Image
    src={spiderMan.src}
    fill alt="hero"
    className="w-full h-full object-cover object-center z-9"
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
    <span className="text-white font-lalezar text-4xl relative bottom-[38px] left-14">Cineverse</span>
  </div>
  <div className="absolute top-1/2 bottom-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
  <h1 className="text-8xl font-lalezar">Cineverse</h1>
  <h2 className="text-2xl font-normal font-roboto w-[600px]">Explorez Cineverse pour une variété de films, séries et animes, votre <span className="text-[#FE0000] text-shadow-[0_4px_8px_#FE0000] shadow-red-500/50 font-bold">passeport</span> pour le divertissement sans limites.</h2>
  <br />
  <a className="text-2xl absolute font-bold left-0 font-roboto border-2 border-transparent rounded-xl p-1 px-2 bg-[#FE0000] hover:scale-110 transition duration-500">Commencer à regarder !</a>
  </div>
    </main>
  );
}
