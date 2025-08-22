import Navbar from "../../shared/Navbar"
import Footer from "../../shared/Footer"
import ServicesHero from "../../components/ServicesHero"
import ServicesOffering from "../../components/ServicesOffering"
import ServicesProcess from "../../components/ServicesProcess"
import ServicesResults from "../../components/ServicesResults"

export const metadata = {
  title: "Services - 3xGrowth | Account-Based Marketing & B2B Demand Generation",
  description:
    "Discover our comprehensive B2B marketing services including Account-Based Marketing, demand generation, content strategy, and strategic consultation for global businesses.",
  keywords:
    "B2B Marketing Services, Account-Based Marketing, ABM Services, Demand Generation, Content Marketing, B2B Strategy, Marketing Automation, Lead Nurturing",
  openGraph: {
    title: "3xGrowth Services - Account-Based Marketing & B2B Demand Generation",
    description: "Comprehensive B2B marketing services including ABM, demand generation, and strategic consultation.",
    url: "https://3xgrowth.in/services",
    type: "website",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "3xGrowth B2B Marketing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3xGrowth Services - Account-Based Marketing & B2B Demand Generation",
    description: "Comprehensive B2B marketing services including ABM, demand generation, and strategic consultation.",
  },
  alternates: {
    canonical: "https://3xgrowth.in/services",
  },
}

export default function ServicesPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <ServicesHero />
        <ServicesOffering />
        <ServicesProcess />
        <ServicesResults />
      </main>
      <Footer />
    </div>
  )
}
