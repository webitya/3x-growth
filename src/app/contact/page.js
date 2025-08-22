import Navbar from "../../shared/Navbar"
import Footer from "../../shared/Footer"
import ContactHero from "../../components/ContactHero"
import ContactForm from "../../components/ContactForm"
import ContactInfo from "../../components/ContactInfo"

export const metadata = {
  title: "Contact Us - 3xGrowth | Start Your B2B Marketing Transformation",
  description:
    "Ready to transform your B2B marketing? Contact 3xGrowth today for a strategic consultation. Located in Ranchi, India, serving clients globally.",
  keywords:
    "Contact 3xGrowth, B2B Marketing Consultation, ABM Strategy Call, Marketing Agency Contact, B2B Marketing Help, Ranchi Marketing Agency",
  openGraph: {
    title: "Contact 3xGrowth - Start Your B2B Marketing Transformation",
    description:
      "Ready to transform your B2B marketing? Contact us for a strategic consultation and discover how we can help.",
    url: "https://3xgrowth.in/contact",
    type: "website",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact 3xGrowth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact 3xGrowth - Start Your B2B Marketing Transformation",
    description: "Ready to transform your B2B marketing? Contact us for a strategic consultation.",
  },
  alternates: {
    canonical: "https://3xgrowth.in/contact",
  },
}

export default function ContactPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <ContactHero />
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  )
}
