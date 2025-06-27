import { notFound } from "next/navigation";

// Artículos simulados (como si vinieran de un CMS o BD)
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

// ✅ Para generar las rutas estáticas
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// ✅ Meta tags dinámicos usando App Router
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://lab14-chalton.onrender.com/blog/${post.slug}`,
      type: "article",
    },
  };
}

// ✅ Página del post
export default function BlogPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}
