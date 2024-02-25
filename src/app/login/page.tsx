'use client';
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import spiderMan from '@/public/spiderMan.jpg'
import logo from '@/public/logo.png'
import Image from 'next/image'
import batMan from '@/public/batman.jpg'
import thor from '@/public/thor.jpg'
import deadpool from '@/public/deadpool.jpg'
import googleLogo from '@/public/googleLogo.png'
import discordLogo from '@/public/discordLogo.png'
import 'dotenv/config'


export default function Home() {
  const session = useSession();
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const images = [spiderMan, batMan, thor, deadpool];
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('');
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const fieldName = e.currentTarget.name;
    const fieldValue = e.currentTarget.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
}

const submitForm = async (e:  React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsLoading(true)
  if(formData.password !== formData.passwordConfirm) {
    setIsLoading(false)
    return setError('Les mots de passe ne correspondent pas.')
  }
  const signInResponse = await signIn('login', {
    username: formData.username,
    password: formData.password,
    redirect: false,
    callbackUrl: `http://localhost:3000`
  })
  if(signInResponse?.status === 401) {
    setIsLoading(false)
    return setError('Nom d\'utilisateur ou mot de passe incorrect.')
  }
  if(signInResponse?.status === 500) {
    setIsLoading(false)
    return setError('Erreur du serveur.')
  }
  window.location.href = signInResponse?.url as string
  setIsLoading(false)
}

useEffect(() => {
  if (session.status === 'loading') {
    return;
  } else if (session.status === 'authenticated') {
    return redirect('/');
  }
}, [session.status, session.data]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen m-0 p-0">
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
    <a href='/' className="text-white font-lalezar text-4xl relative bottom-[38px] left-14">CinéVerse</a>
  </div>
  <div className="absolute top-4 right-4 hover:scale-110 transition duration-500">
  <a href='/register' className="text-xl font-bold text-white px-2 p-1 font-roboto border-2 border-transparent rounded-xl bg-[#FE0000]">S'inscrire</a>
  </div>
  <div className="absolute border border-transparent w-28 h-auto border-solid rounded-2xl py-16">
  <h1 className="text-white relative right-12 py-10 font-lalezar font-bold text-center text-5xl">Connexion</h1>
  <button
      className="w-80 flex items-center mb-4 relative right-24 font-semibold justify-center h-12 px-6 text-xl bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:scale-110 transition duration-500"
    >
      <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
      <span className="ml-4">Continuer avec Google</span>
    </button>
    <button
      className="w-80 flex items-center mb-12 relative right-24 font-semibold justify-center h-12 px-6 text-xl bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:scale-110 transition duration-500"
    >
      <Image src={discordLogo} alt="Discord Logo" width={20} height={20} />
      <span className="ml-4">Continuer avec Discord</span>
    </button>
    {isLoading && (
        <>
      <div className="absolute flex justify-center items-center h-10 z-10">
        <div
      style={{ width: `100px`, height: `100px` }}
      className="animate-spin">
      <div className="h-full w-[100%] border-4 border-t-red-500
       border-b-red-700 rounded-[50%]">
      </div>
    </div>
  </div>
  </>
      )}
  <form className="grid gap-y-12" onSubmit={submitForm}>
  {error !== '' && (
                      <div className="w-full relative right-24 text-center">
                        <p className="font-lalezar text-red-500">{error}</p>
                      </div>
                    )}
    <input type='text' name="username" placeholder="E-mail / Nom d'utilisateur" onChange={handleInput} className="relative right-24 bg-gray-50 w-80 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
    <input type='password' name="password" placeholder="Mot de passe" onChange={handleInput} className="relative right-24 bg-gray-50 w-80 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
    <input type='password' name="passwordConfirm" placeholder="Répéter le mot de passe" onChange={handleInput} className="relative right-24 bg-gray-50 w-80 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
    <button type="submit" className="relative right-3 font-bold text-white text-xl px-2 p-1 font-roboto border-2 border-transparent rounded-xl bg-[#FE0000] w-40 hover:scale-110 transition duration-500">Se connecter</button>
  </form>
  </div>
    </main>
  );
}
