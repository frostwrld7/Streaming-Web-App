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
  const options: { value: string, label: string, image: string }[] = [
    { value: "action", label: "Action", image: "https://i.pinimg.com/474x/e6/57/23/e657231f8a629f8a856133ff9ea1873d.jpg" },
    { value: "comedy", label: "Comédie", image: "https://st.depositphotos.com/1760261/1345/i/450/depositphotos_13455007-stock-photo-comedy-tragedy-masks.jpg" },
    { value: "drama", label: "Drame", image: "https://cdn.pixabay.com/photo/2023/04/10/12/24/explosion-7913675_1280.jpg" },
    { value: "scienceFiction", label: "Science-fiction", image: "https://img.freepik.com/premium-photo/science-background-illustration-scientific-design-flasks-glass-chemistry-physics-elements_839051-3749.jpg" },
    { value: "horror", label: "Horreur", image: "https://media.istockphoto.com/id/1434310465/photo/horror-movie-concept.webp?b=1&s=170667a&w=0&k=20&c=M8wVY5uinST7KOwcbaIKjfpylXBzBBY-5kmg31QJ6tk=" },
    { value: "romance", label: "Romance", image: "https://www.hachette.fr/sites/default/files/content_types/tops_selections/field_image_principal/paysage-top-romance-grand-compressor.jpg" },
    { value: "adventure", label: "Aventure", image: "https://images.pexels.com/photos/1576939/pexels-photo-1576939.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1576939.jpg&fm=jpg" },
    { value: "fantasy", label: "Fantaisie", image: "https://storage.googleapis.com/pod_public/1300/141877.jpg" },
    { value: "animation", label: "Animation", image: "https://cdn.mos.cms.futurecdn.net/KGQsXWzVseMbvSNn8SWFuT-1200-80.jpg" },
    { value: "mystery", label: "Mystère", image: "https://t4.ftcdn.net/jpg/01/82/29/77/360_F_182297712_9CsfAgraiubHa1ZgwCtXzIIwwFTUcfUc.jpg" },
    { value: "thriller", label: "Thriller", image: "https://media.istockphoto.com/id/1254738727/vector/detective-chalk-white-icon-on-black-background-traditional-movie-genre-classic-noir-film.jpg?s=612x612&w=0&k=20&c=_6ua7u4QOYyLgHYKKzQW08HsRE6IKlQ-9WWfy-M7ovw=" },
    { value: "documentary", label: "Documentaire", image: "https://media.licdn.com/dms/image/D4E12AQGktYcoR0L00g/article-cover_image-shrink_720_1280/0/1681218814048?e=2147483647&v=beta&t=-Mru9qW4fs2dRCuUAPSwH52wcI9T09mR3-kwa1P_FgM" },
    { value: "family", label: "Famille", image: "https://i.etsystatic.com/5831566/r/il/f65608/1671393363/il_fullxfull.1671393363_pwiy.jpg" },
    { value: "crime", label: "Crime", image: "https://images.pexels.com/photos/923681/pexels-photo-923681.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { value: "historical", label: "Historique", image: "https://previews.123rf.com/images/miluxian/miluxian1509/miluxian150900245/50329999-old-family-photos.jpg" },
    { value: "musical", label: "Musical", image: "https://img.freepik.com/photos-gratuite/fond-musical-volumetrique-cle-sol-notes-ia-generatives_169016-29576.jpg" },
    { value: "war", label: "Guerre", image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2023-07/230701-ukraine-war-mjf-1112-8f83b1.jpg" },
    { value: "western", label: "Western", image: "https://i.pinimg.com/originals/3e/1d/1f/3e1d1f17e4b5ae66c7cde53e294df2e7.jpg" }
];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 bg-black xl:h-[100vh] lg: h-[100vh] h-[740vh]">
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
  <h1 className="text-center absolute text-white font-lalezar text-shadow-[0_4px_8px_#000] shadow-black-500/50 text-6xl">Catalogue</h1>
  <h2 className="text-center absolute top-40 text-white font-lalezar text-shadow-[0_4px_8px_#000] shadow-black-500/50 text-2xl">Choisissez une catégorie</h2>
  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 absolute top-56 right-8 left-8">
          {options.map((category, index) => (
            <div
              key={index}
              className="relative group overflow-hidden transition duration-300 transform hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.label}
                className="w-full h-64 object-cover rounded-md transition-opacity duration-300 group-hover:opacity-30"
                />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="text-center">
                  <h2 className="text-lg text-white text-shadow-[0_4px_8px_#000] shadow-black-500/50 font-bold font-lalezar mb-2">{category.label}</h2>
                  <a href={`/catalogue/${category.value}`} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    Voir les films
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
    </main>
  );
}
