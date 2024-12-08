'use client'
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Img from "next/image";
import Footer from "@/componentes/Footer";
import { Suspense, useState } from "react";
import Link from "next/link";
import { getDictionary } from "@/componentes/diccionario";
import  "bootstrap/dist/css/bootstrap.min.css"
import AddBootstrap from "@/AddBoostrap";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Página principal de IAW",
//   description: "Curso 2024/25",
//   icons: {
//     icon: '/public/buscar.png'
//   }
// };

//aqui se añaden los componente de mi pagina web 
function Cargando() {
  return (
    <Img className="imagen" src="/cargando.gif"
      alt="Cargando"
      width={100}
      height={100}></Img>
    //tengo que esfecificar el alt, width, height, para que funcione el gif
  )
}

export default function RootLayout({ children }) {

  let [idioma, setIdioma] = useState('es');
  let dict = getDictionary(idioma);

  const changeLanguage = (lang) => {
    setIdioma(lang);
  }
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AddBootstrap/>
        <header><Image src="/header.jpg" width="500" height="400" alt="Cabecera de la pagina" ></Image></header>
        {/* barra de navegacion */}
        <nav>
          <Link href="/">{dict.home}</Link>-
          <Link href="/pokemonReact">Pokemon React</Link>-
          <Link href="/esperando">{dict.esperando}</Link>
          <button onClick={() => changeLanguage('es')} className="p-2 rounded-full hover:bg-gray-200">
            <Image src="/spain.png" alt="Español" width={24} height={24} />
          </button>
          <button onClick={() => changeLanguage('en')} className="p-2 rounded-full hover:bg-gray-200">
            <Image src="/UK.png" alt="Ingles" width={24} height={24} />
          </button>
        </nav>
        <main>
        <h1>{dict.title}</h1>
        <h2>{dict.description}</h2>
          {children}</main>
        <Footer />
      </body>
    </html>
  );
}
