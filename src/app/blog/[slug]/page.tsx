import { notFound } from "next/navigation";
import Head from "next/head";

// Simulación de artículos (como si vinieran de un CMS o base de datos)
const posts = [
  {
    slug: "primer-articulo",
    title: "Primer Artículo",
    description: "Este es el contenido del primer artículo del blog.",
    content: `
      <p>Bienvenido al <strong>primer artículo</strong> de nuestro blog.</p>
      <p>En este post hablamos sobre cómo empezar con Next.js.</p>
    `,
  },
  {
    slug: "segundo-articulo",
    title: "Segundo Artículo",
    description: "Este artículo cubre temas más avanzados en Next.js.",
    content: `
      <p>En el <strong>segundo artículo</strong> exploramos rutas dinámicas y sitemaps.</p>
      <p>También aprenderás sobre SEO técnico en Next.js.</p>
    `,
  },
];

// ✅ Esta función permite generar rutas estáticas al hacer build
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// ✅ Este es el tipo correcto que espera Next.js App Router
interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPage({ params }: PageProps) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <main className="p-6">
      {/* Meta tags para SEO */}
      <Head>
        <title>{post.title} | Blog</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://lab14-chalton.onrender.com/blog/${post.slug}`}
        />
      </Head>

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}
