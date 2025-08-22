import { notFound } from "next/navigation"
import Navbar from "../../../shared/Navbar"
import Footer from "../../../shared/Footer"
import BlogPost from "../../../components/BlogPost"
import RelatedPosts from "../../../components/RelatedPosts"
import { blogData } from "../../../data/blogData"

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const post = blogData.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found - 3xGrowth",
    }
  }

  return {
    title: `${post.title} - 3xGrowth Blog`,
    description: post.excerpt,
    keywords: `${post.category}, B2B Marketing, Account-Based Marketing, ${post.title.split(" ").slice(0, 3).join(", ")}`,
    authors: [{ name: post.author }],
    openGraph: {
      title: `${post.title} - 3xGrowth Blog`,
      description: post.excerpt,
      url: `https://3xgrowth.in/blogs/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      images: [
        {
          url: post.image || "/og-blog-post.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} - 3xGrowth Blog`,
      description: post.excerpt,
      images: [post.image || "/twitter-blog-post.jpg"],
    },
    alternates: {
      canonical: `https://3xgrowth.in/blogs/${post.slug}`,
    },
  }
}

export default function BlogPostPage({ params }) {
  const post = blogData.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <BlogPost post={post} />
        <RelatedPosts currentSlug={params.slug} />
      </main>
      <Footer />
    </div>
  )
}
