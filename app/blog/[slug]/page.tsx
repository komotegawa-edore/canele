import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getBlogList, getBlogDetail } from "@/lib/microcms";

export const dynamicParams = false;

export async function generateStaticParams() {
  const { contents } = await getBlogList();
  return contents.map((blog) => ({ slug: blog.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = await getBlogDetail(params.slug);
  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.title,
    alternates: {
      canonical: `https://caneleou.jp/blog/${blog.id}`,
    },
    openGraph: {
      title: blog.title,
      images: blog.eyecatch ? [{ url: blog.eyecatch.url }] : [],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogDetail(params.slug);

  if (!blog) {
    return (
      <>
        <Header />
        <main className="pt-24 pb-16 min-h-screen bg-fabric">
          <div className="max-w-3xl mx-auto px-6 text-center py-20">
            <p className="text-dark-brown/50">記事が見つかりませんでした。</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: blog.title,
        datePublished: blog.publishedAt,
        dateModified: blog.updatedAt,
        image: blog.eyecatch?.url,
        author: {
          "@type": "Organization",
          name: "Canelé（カヌレ）",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "トップ",
            item: "https://caneleou.jp",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "ブログ",
            item: "https://caneleou.jp/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: blog.title,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen bg-fabric">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <article className="max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-xs text-dark-brown/40 mb-8 flex gap-2">
            <Link href="/" className="hover:text-caramel transition-colors">
              トップ
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              className="hover:text-caramel transition-colors"
            >
              ブログ
            </Link>
            <span>/</span>
            <span className="text-dark-brown/60">{blog.title}</span>
          </nav>

          {/* Title */}
          <h1 className="text-xl md:text-2xl font-bold text-dark-brown tracking-wider leading-relaxed mb-4">
            {blog.title}
          </h1>
          <time className="block text-sm text-dark-brown/40 font-playfair mb-8">
            {new Date(blog.publishedAt).toLocaleDateString("ja-JP")}
          </time>

          {/* Eyecatch */}
          {blog.eyecatch && (
            <div className="sticker !rotate-0 mb-10">
              <Image
                src={blog.eyecatch.url}
                alt={blog.title}
                width={blog.eyecatch.width}
                height={blog.eyecatch.height}
                className="w-full h-auto"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Back link */}
          <div className="mt-16 text-center">
            <Link
              href="/blog"
              className="inline-block border-2 border-dashed border-caramel/40 text-caramel text-xs tracking-widest px-6 py-3 font-playfair hover:bg-caramel hover:text-white hover:border-solid transition-all duration-300"
            >
              BACK TO BLOG
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
