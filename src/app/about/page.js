import Navbar from "../../shared/Navbar"
import Footer from "../../shared/Footer"
import AboutHero from "../../components/AboutHero"
import AboutStory from "../../components/AboutStory"
import AboutValues from "../../components/AboutValues"
import AboutTeam from "../../components/AboutTeam"

export const metadata = {
  title: "About Us - 3xGrowth | 15+ Years of B2B Marketing Excellence",
  description:
    "Learn about 3xGrowth's 15+ years of proven expertise in Account-Based Marketing and B2B demand generation. Meet our team of global marketing strategists.",
  keywords:
    "About 3xGrowth, B2B Marketing Team, ABM Experts, Marketing Consultants, B2B Strategy, Account-Based Marketing Agency",
  openGraph: {
    title: "About 3xGrowth - 15+ Years of B2B Marketing Excellence",
    description: "Learn about our 15+ years of proven expertise in Account-Based Marketing and B2B demand generation.",
    url: "https://3xgrowth.in/about",
    type: "website",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About 3xGrowth Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About 3xGrowth - 15+ Years of B2B Marketing Excellence",
    description: "Learn about our 15+ years of proven expertise in Account-Based Marketing and B2B demand generation.",
  },
  alternates: {
    canonical: "https://3xgrowth.in/about",
  },
}

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
      </main>
      <Footer />
    </div>
  )
}
