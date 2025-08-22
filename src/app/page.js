import Navbar from "../shared/Navbar"
import Footer from "../shared/Footer"
import HeroSection from "../components/HeroSection"
import TrustSection from "../components/TrustSection"
import GrowthModelSection from "../components/GrowthModelSection"
import ProofSection from "../components/ProofSection"
import DifferenceSection from "../components/DifferenceSection"
import CTASection from "../components/CTASection"

export const metadata = {
  title: "3xGrowth - Account-Based Marketing Experts | We Don't Chase Leads, We Create Markets",
  description:
    "Transform your B2B marketing with 3xGrowth's proven Account-Based Marketing strategies. 15+ years of expertise delivering 3x-5x higher performance for global clients.",
  keywords:
    "Account-Based Marketing, ABM, B2B Marketing, Lead Generation, Demand Generation, B2B Sales, Marketing Strategy, Business Growth",
  openGraph: {
    title: "3xGrowth - Account-Based Marketing Experts",
    description: "We Don't Chase Leads. We Create Markets. Transform your B2B marketing with proven ABM strategies.",
    url: "https://3xgrowth.in",
    type: "website",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "3xGrowth Account-Based Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3xGrowth - Account-Based Marketing Experts",
    description: "We Don't Chase Leads. We Create Markets. Transform your B2B marketing with proven ABM strategies.",
  },
  alternates: {
    canonical: "https://3xgrowth.in",
  },
}

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <HeroSection />
        <TrustSection />
        <GrowthModelSection />
        <ProofSection />
        <DifferenceSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
