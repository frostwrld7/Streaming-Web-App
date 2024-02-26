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
import AWS from 'aws-sdk'
import { PutObjectRequest } from "aws-sdk/clients/s3";
import admins from '@/admins.json' assert { type: 'json' }

AWS.config.update({
    accessKeyId: 'accessKeyId',
    secretAccessKey: 'secretAccessKey',
    region: 'eu-west-3'
  })

  const s3 = new AWS.S3()


export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
        redirect('/');
    },
});
const [error, setError] = useState<string>('');
const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)
const [isLoading, setIsLoading] = useState<boolean>(false)
const [formData, setFormData] = useState({
  title: '',
  description: '',
  url: '',
  image: '',
  categories: []
});
const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [category, setCategory] = useState<string>('')
  const images = [spiderMan, batMan, thor, deadpool];

  useEffect(() => {
    if (session.status === 'loading') {
      return;
    }
    if (!admins.includes(session.data.user.email)) return redirect('/')
  }, [session.status, session.data]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSearchSubmit = async (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setButtonDisabled(true)
    if (!selectedFile?.name) {
        setError('Aucune image sélectionnée.')
        setIsLoading(false)
        return setButtonDisabled(false)
    }
    const fileName = selectedFile?.name as string
    const fileContent = selectedFile
    const params: PutObjectRequest = {
        Bucket: 'BucketName',
        Key: fileName,
        Body: fileContent as unknown as string,
        ACL: 'public-read',
        ContentType: fileContent?.type
      }
        if (selectedFile) {
        const uploadResponse = await s3.upload(params).promise()
        const fileUrl = uploadResponse.Location
        const data = {
            title: formData.title,
            description: formData.description,
            url: formData.url,
            category: category,
            image: fileUrl
        }
        try {
        const response = await fetch('/api/films/add', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_APP_URL as string
              },
        })
        const responseText = await response.json()
        if (response.ok) {
            setIsLoading(false)
            setButtonDisabled(false)
            setError('')
            return alert('Film ajouté avec succès.')
        } else {
            setIsLoading(false)
            setButtonDisabled(false)
            return setError(responseText.error)
        }
    } catch (err: any) {
        setIsLoading(false)
        setButtonDisabled(false)
        console.log(err)
        return setError('Erreur du serveur.')
    }
    }
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const fieldValue = e.target.value;

    setCategory(fieldValue)
  };

const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file: File | undefined = e.target.files?.[0];
  
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const fieldName = e.currentTarget.name;
    const fieldValue = e.currentTarget.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
}

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24" style={{ height: '100vh' }}>
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
      <a href='/profile' className="text-xl font-bold text-white px-2 p-1 font-roboto border-2 border-transparent rounded-xl bg-[#FE0000]">{session.data?.user.username.slice(0, 10)}</a>
  </div>
  {isLoading && (
        <div role="status" className="flex z-10 justify-center align-middle">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Chargement...</span>
    </div>
        )}
  <form onSubmit={handleSearchSubmit} className="max-w-sm absolute">
  <div className="relative w-80 h-[780px] 2xl:top-1 border-black shadow-2xl shadow-black border-2 px-5 rounded-xl 2xl:hover:scale-105 transition duration-500 cursor-pointer lg:relative lg:bottom-20">
                    <h1 className="font-lalezar text-white text-4xl align-middle text-center pt-6 hover:text-red-500">Ajout d'un film</h1>
                    {error !== '' && (
                      <div className="w-full relative text-center">
                        <p className="font-lalezar text-2xl text-red-500">{error}</p>
                      </div>
                    )}
                    <div className="w-64 py-3">
                        <label className="font-lalezar text-white text-2xl">Titre</label>
                        <input type="text" required={true} name="title" placeholder="Titre" onChange={handleInput} className="w-full h-10 px-4 py-2 text-gray-700 bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500" />
                    </div>
                    <div className="w-64 py-3">
                        <label className="font-lalezar text-white text-2xl">Description</label>
                        <input type="text" required={true} name="description" placeholder="Description" onChange={handleInput} className="w-full h-10 px-4 py-2 text-gray-700 bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500" />
                    </div>
                    <div className="w-64 py-3">
                        <label className="font-lalezar text-white text-2xl">Lien</label>
                        <input type="text" required={true} name="url" placeholder="Lien" onChange={handleInput} className="w-full h-10 px-4 py-2 text-gray-700 bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500" />
                    </div>
                    <div className="w-64 py-3">
                    <label htmlFor="default" className="font-lalezar text-white text-2xl">Catégorie</label>
<select id="default" value={category} onChange={handleSelectChange} required={true} name='category' className="bg-white-400 border border-white-300 text-white-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option defaultValue='test'>Choisissez une catégorie</option>
  <option value="action">Action</option>
<option value="comedy">Comédie</option>
<option value="drama">Drame</option>
<option value="scienceFiction">Science-fiction</option>
<option value="horror">Horreur</option>
<option value="romance">Romance</option>
<option value="adventure">Aventure</option>
<option value="fantasy">Fantaisie</option>
<option value="animation">Animation</option>
<option value="mystery">Mystère</option>
<option value="thriller">Thriller</option>
<option value="documentary">Documentaire</option>
<option value="family">Famille</option>
<option value="crime">Crime</option>
<option value="historical">Historique</option>
<option value="musical">Musical</option>
<option value="war">Guerre</option>
<option value="western">Western</option>
</select>
                    </div>
                    <p className="font-lalezar text-white text-2xl flex-col">Image</p>                  
<div className="flex w-full">
    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-64 h-22 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pb-8">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400 mt-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Cliquez pour charger</span> ou déposer</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG ou GIF</p>
        </div>
        <input id="dropzone-file" onChange={handleFileChange} required={true} type="file" className="hidden" />
    </label>
</div> 
                    <div className="w-64 mt-4 py-3 text-center">
                        <button disabled={buttonDisabled} type="submit" className="font-lalezar text-black px-2 py-1 text-2xl border-2 border-black bg-white rounded-xl shadow-md shadow-black transition-all duration-300 ease-in-out hover:bg-red-500">Ajouter</button>
                        </div>
                </div>
        </form>
    </main>
  );
}
