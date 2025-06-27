// src/app/api/sitemap/route.ts

const BASE_URL = "https://mi-sitio.com";

// Simula que esto viene de un CMS o BD
async function getDynamicRoutes() {
  const posts = [
    { slug: "primer-articulo" },
    { slug: "segundo-articulo" },
  ];
  return posts.map((post) => `/blog/${post.slug}`);
}

export async function GET() {
  const staticUrls = ["/", "/blog", "/contacto"];
  const dynamicUrls = await getDynamicRoutes();

  const urls = [...staticUrls, ...dynamicUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
  .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
