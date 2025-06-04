import { NextResponse } from "next/server";

export const runtime = "edge";

function generateRobotsTxt() {
  const baseUrl = "https://theoelectconsulting.com.ng";

  return `# =================================================================
# Robots.txt for TheoElect Consulting
# Generated: ${new Date().toISOString()}
# =================================================================

# Default rule
User-agent: *
Allow: /

# Block access to API routes
User-agent: *
Disallow: /api/

# Block access to Next.js internals
User-agent: *
Disallow: /_next/
Disallow: /.next/
Disallow: /static/

# Block archive pages from all robots
User-agent: *
Disallow: /archive/

# Block all bots from development environments
User-agent: *
${process.env.NODE_ENV === "development" ? "Disallow: /" : ""}

# Crawling optimization
Crawl-delay: 10

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Host
Host: ${baseUrl}

# Additional rules for specific bots
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

# Block common bad bots
User-agent: PetalBot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: SemrushBot
Disallow: /`;
}

export async function GET() {
  try {
    const robotsTxt = generateRobotsTxt();

    return new NextResponse(robotsTxt, {
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "public, max-age=86400, must-revalidate",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("Error generating robots.txt:", error);

    // Return a basic fallback robots.txt in case of error
    return new NextResponse(
      `User-agent: *\nDisallow: /\nSitemap: https://theoelectconsulting.com.ng/sitemap.xml`,
      {
        headers: {
          "Content-Type": "text/plain",
          "Cache-Control": "public, max-age=3600",
        },
      }
    );
  }
}
