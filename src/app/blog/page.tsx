//src/app/blog/page.tsx

import Head from "next/head";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Mi Sitio</title>
        <meta
          name="description"
          content="Lee nuestras publicaciones y noticias más recientes en el blog de Mi Sitio."
        />
        <meta property="og:title" content="Blog | Mi Sitio" />
        <meta
          property="og:description"
          content="Contenido actualizado y relevante en nuestro blog."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lab14-chalton.onrender.com/blog"
        />
      </Head>
      <main className="p-4">
        <h1 className="text-2xl font-bold">Blog</h1>
      </main>
    </>
  );
}
