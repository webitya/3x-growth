import Navbar from "../../shared/Navbar"
import Footer from "../../shared/Footer"
import BlogsHero from "../../components/BlogsHero"
import BlogsList from "../../components/BlogsList"

export const metadata = {
  title: "Blog - 3xGrowth | B2B Marketing Insights & Strategies",
  description:
    "Discover the latest insights, strategies, and best practices in B2B Account-Based Marketing from the experts at 3xGrowth. Stay ahead with proven marketing tactics.",
  keywords:
    "B2B Marketing Blog, ABM Insights, Marketing Strategies, B2B Best Practices, Account-Based Marketing Tips, Demand Generation Blog, B2B Content Marketing",
  openGraph: {
    title: "3xGrowth Blog - B2B Marketing Insights & Strategies",
    description:
      "Discover the latest insights, strategies, and best practices in B2B Account-Based Marketing from industry experts.",
    url: "https://3xgrowth.in/blogs",
    type: "website",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "3xGrowth Marketing Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3xGrowth Blog - B2B Marketing Insights & Strategies",
    description: "Discover the latest insights and strategies in B2B Account-Based Marketing from industry experts.",
  },
  alternates: {
    canonical: "https://3xgrowth.in/blogs",
  },
}

export default function BlogsPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <BlogsHero />
        <BlogsList />
      </main>
      <Footer />
    </div>
  )
}
