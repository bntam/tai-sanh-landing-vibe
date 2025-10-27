import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site?.toString() || 'https://phongkhamtaisanh.com';
  
  // Get all blog posts
  const blogPosts = await getCollection('blog');
  
  // Static pages
  const staticPages = [
    { url: '', changefreq: 'daily', priority: '1.0' },
    { url: 'blog', changefreq: 'daily', priority: '0.8' },
  ];
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${siteUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
  ${blogPosts.map(post => `
  <url>
    <loc>${siteUrl}blog/${post.slug}</loc>
    <lastmod>${post.data.updatedDate ? new Date(post.data.updatedDate).toISOString() : new Date(post.data.date).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

