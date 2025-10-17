
import { Blog } from "@/app/types/blog";

export async function getWordPressPosts(): Promise<Blog[]> {
  const response = await fetch("https://psd2web.in/wp-json/wp/v2/posts?_embed");
  const posts = await response.json();

  return posts.map((post: any) => ({
    id: post.id,
    title: post.title.rendered,
    slug: post.slug,
    excerpt: post.excerpt.rendered,
    coverImage: post._embedded["wp:featuredmedia"]?.[0]?.source_url || "/images/blog/blog_1.webp",
    date: post.date,
  }));
}

export async function getWordPressPostBySlug(slug: string): Promise<Blog | null> {
  const response = await fetch(`https://psd2web.in/wp-json/wp/v2/posts?slug=${slug}&_embed`);
  const posts = await response.json();

  if (posts.length === 0) {
    return null;
  }

  const post = posts[0];
  return {
    id: post.id,
    title: post.title.rendered,
    slug: post.slug,
    excerpt: post.excerpt.rendered,
    coverImage: post._embedded["wp:featuredmedia"]?.[0]?.source_url || "/images/blog/blog_1.webp",
    date: post.date,
    content: post.content.rendered,
    authorName: post._embedded.author[0].name,
    authorImage: post._embedded.author[0].avatar_urls?.['96'] || '/images/profile.png',
  };
}
