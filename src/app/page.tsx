// src/app/page.tsx
'use client';
import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../app/components/LargeComponent"), {
  ssr: false,
  loading: () => <p>Cargando componente...</p>,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Sitio</title>
        <meta name="description" content="Bienvenido a la página principal de Mi Sitio. Descubre contenido interesante y útil." />
        <meta property="og:title" content="Inicio | Mi Sitio" />
        <meta property="og:description" content="Explora la página principal con contenido optimizado para ti." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mi-sitio.com/" />
      </Head>
      <main className="p-4">
        <h1 className="text-2xl font-bold">Bienvenido</h1>
        <DynamicComponent />
        {/* Resto del contenido */}
      </main>
    </>
  );
}
