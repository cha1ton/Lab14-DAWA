// src/app/contacto/page.tsx
import Head from "next/head";

export default function ContactoPage() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Sitio</title>
        <meta name="description" content="Contáctanos para más información, soporte o colaboración." />
        <meta property="og:title" content="Contacto | Mi Sitio" />
        <meta property="og:description" content="Estamos aquí para ayudarte. Encuentra formas de comunicarte con nosotros." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mi-sitio.com/contacto" />
      </Head>
      <main className="p-4">
        <h1 className="text-2xl font-bold">Contacto</h1>
      </main>
    </>
  );
}
