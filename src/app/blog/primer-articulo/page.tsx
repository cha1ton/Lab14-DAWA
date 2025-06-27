export const metadata = {
  title: "Primer Artículo | Blog",
  description: "Este es el contenido del primer artículo del blog.",
  openGraph: {
    title: "Primer Artículo",
    description: "Este es el contenido del primer artículo del blog.",
    type: "article",
    url: "https://lab14-chalton.onrender.com/blog/primer-articulo",
  },
};

export default function PrimerArticuloPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Primer Artículo</h1>
      <article className="prose">
        <p>Bienvenido al <strong>primer artículo</strong> de nuestro blog.</p>
        <p>En este post hablamos sobre cómo empezar con Next.js.</p>
      </article>
    </main>
  );
}
