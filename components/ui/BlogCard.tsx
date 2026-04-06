"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-lg"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <p className="absolute left-4 top-4 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold text-dark">
          {post.category}
        </p>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
          <span className="inline-flex items-center gap-1"><User className="h-3.5 w-3.5" /> {post.author}</span>
        </div>

        <h3 className="mt-3 text-dark">{post.title}</h3>
        <p className="mt-2 text-muted">{post.excerpt.slice(0, 140)}...</p>

        <p className="mt-2 text-xs text-muted">{post.readTime}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-light"
        >
          Read Article
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
