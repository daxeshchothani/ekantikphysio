"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Clock3, Copy, Linkedin, Twitter, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { BLOG_POSTS, TEAM } from "@/lib/data";
import { BlogPost } from "@/types";

interface BlogDetailContentProps {
  post: BlogPost;
}

export default function BlogDetailContent({ post }: BlogDetailContentProps) {
  const [copied, setCopied] = useState(false);
  const paragraphs = post.body.split("\n\n");
  const related = useMemo(
    () => BLOG_POSTS.filter((item) => item.category === post.category && item.slug !== post.slug).slice(0, 3),
    [post.category, post.slug]
  );
  const author = TEAM.find((member) => member.name === post.author);

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-surface py-20"
    >
      <div className="container-shell grid gap-8 lg:grid-cols-10">
        <article className="space-y-6 lg:col-span-7">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="relative aspect-video">
              <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 70vw" />
            </div>
            <div className="p-6">
              <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold text-dark">{post.category}</span>
              <h1 className="mt-3 text-[48px] leading-[1.15] text-dark">{post.title}</h1>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted">
                <span className="inline-flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
                <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
                <span className="inline-flex items-center gap-1"><Clock3 className="h-4 w-4" /> {post.readTime}</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg space-y-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <p className="font-semibold text-dark">Share this article</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a href={`https://x.com/intent/tweet?text=${encodeURIComponent(post.title)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm text-primary"><Twitter className="h-4 w-4" /> Twitter/X</a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://www.ekantikphysio.co.uk/blog/" + post.slug)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm text-primary"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              <button onClick={copyLink} type="button" className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm text-primary"><Copy className="h-4 w-4" /> Copy Link</button>
            </div>
            {copied ? <p className="mt-2 text-sm font-semibold text-primary">Link copied to clipboard.</p> : null}
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image src={post.authorImage} alt={post.author} fill className="object-cover" sizes="64px" />
              </div>
              <div>
                <p className="font-semibold text-dark">{post.author}</p>
                <p className="text-sm text-primary">Senior Physiotherapist, Ekantik Physio</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted">{author?.bio ?? "Ekantik specialist focused on evidence-led rehabilitation and long-term movement health."}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow">
                {tag}
              </span>
            ))}
          </div>
        </article>

        <aside className="space-y-4 lg:col-span-3 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-accent p-6 shadow-2xl">
            <p className="font-semibold text-dark">Book an Appointment</p>
            <Link href="/appointment" className="mt-3 inline-flex rounded-full bg-dark px-5 py-2 text-sm font-semibold text-white">
              Book Now
            </Link>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <p className="font-semibold text-dark">Related Articles</p>
            <ul className="mt-2 space-y-2 text-sm">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/blog/${item.slug}`} className="text-primary hover:text-primary-light">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <p className="font-semibold text-dark">Newsletter</p>
            <p className="mt-1 text-sm text-muted">Monthly physiotherapy guidance for better recovery.</p>
            <Link href="/blog" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              <CheckCircle2 className="h-4 w-4" /> Join Updates
            </Link>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}
