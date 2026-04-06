import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailContent from "@/components/sections/shared/BlogDetailContent";
import { BLOG_POSTS } from "@/lib/data";

interface Params {
  slug: string;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = BLOG_POSTS.find((item) => item.slug === params.slug);

  if (!post) {
    return {
      title: "Article Not Found",
      description: "The requested blog article could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogDetailPage({ params }: { params: Params }) {
  const post = BLOG_POSTS.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailContent post={post} />;
}
