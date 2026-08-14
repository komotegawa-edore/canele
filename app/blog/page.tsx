import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getBlogList } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "ブログ",
  description:
    "大阪大学サークル Canelé（カヌレ）のブログ。活動の様子やお知らせを発信しています。",
  alternates: {
    canonical: "https://caneleou.jp/blog",
  },
};

export default async function BlogPage() {
  const { contents: blogs } = await getBlogList();

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen bg-fabric">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-playfair text-center text-2xl md:text-3xl text-dark-brown tracking-wider mb-2">
            ブログ
          </h1>
          <p className="text-center font-playfair text-dark-brown/50 text-xs tracking-[0.2em] uppercase mb-12">
            BLOG
          </p>

          {blogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-dark-brown/50 text-sm tracking-wide">
                記事を準備中です。お楽しみに。
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.id}`}
                  className="group block"
                >
                  <article className="sticker !rotate-0 hover:!scale-[1.02] transition-transform">
                    {blog.eyecatch ? (
                      <Image
                        src={blog.eyecatch.url}
                        alt={blog.title}
                        width={blog.eyecatch.width}
                        height={blog.eyecatch.height}
                        className="w-full aspect-[16/9] object-cover"
                      />
                    ) : (
                      <div className="w-full aspect-[16/9] bg-dark-brown/5 flex items-center justify-center">
                        <span className="font-playfair text-dark-brown/20 text-2xl">
                          Canelé
                        </span>
                      </div>
                    )}
                    <div className="p-4">
                      <time className="text-xs text-dark-brown/40 font-playfair">
                        {new Date(blog.publishedAt).toLocaleDateString("ja-JP")}
                      </time>
                      <h2 className="mt-1 text-sm md:text-base text-dark-brown/80 group-hover:text-caramel transition-colors leading-relaxed">
                        {blog.title}
                      </h2>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
