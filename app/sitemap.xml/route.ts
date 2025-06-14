import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://theoelectconsulting.com.ng";

  // Define your URLs
  const urls = [
    {
      loc: baseUrl,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: "1.0",
    },
    {
      loc: "https://www.amazon.com/stores/author/B0BGLXNZFD",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      loc: "https://www.amazon.com/gp/product/B0BGLXNZFD",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: "https://www.amazon.com/dp/B0BGM2QB2G",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: "https://www.amazon.com/gp/product/B0DDYBBJDR",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: "https://www.amazon.com/gp/product/B0F9VQLD36",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: "0.9",
    },
  ];

  // Generate the XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>
  `
    )
    .join("")}
</urlset>`;

  // Return the XML with proper headers
  return new NextResponse(xml.trim(), {
    headers: {
      "Content-Type": "application/xml",
      // Cache the sitemap for 24 hours
      "Cache-Control": "public, max-age=86400",
    },
  });
}
