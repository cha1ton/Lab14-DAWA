export const metadata = {
  title: "Segundo Artículo | Blog",
  description: "Este artículo cubre temas más avanzados en Next.js.",
  openGraph: {
    title: "Segundo Artículo",
    description: "Este artículo cubre temas más avanzados en Next.js.",
    type: "article",
    url: "https://lab14-chalton.onrender.com/blog/segundo-articulo",
  },
};

export default function SegundoArticuloPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Segundo Artículo</h1>
      <article className="prose">
        <p>En el <strong>segundo artículo</strong> exploramos rutas dinámicas y sitemaps.</p>
        <p>También aprenderás sobre SEO técnico en Next.js.</p>
      </article>
    </main>
  );
}
