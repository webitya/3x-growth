import Navbar from "../../shared/Navbar"
import Footer from "../../shared/Footer"
import ProjectsHero from "../../components/ProjectsHero"
import ProjectsShowcase from "../../components/ProjectsShowcase"
import ProjectsResults from "../../components/ProjectsResults"
import ProjectsCTA from "../../components/ProjectsCTA"

export const metadata = {
  title: "Projects - 3xGrowth | Successful B2B Marketing Case Studies",
  description:
    "Explore our successful B2B marketing projects and case studies that delivered 3x-5x higher performance for our clients across various industries.",
  keywords:
    "B2B Case Studies, Marketing Success Stories, ABM Results, B2B Project Portfolio, Marketing ROI, Client Success, B2B Campaign Results",
  openGraph: {
    title: "3xGrowth Projects - Successful B2B Marketing Case Studies",
    description: "Explore our successful B2B marketing projects that delivered 3x-5x higher performance for clients.",
    url: "https://3xgrowth.in/projects",
    type: "website",
    images: [
      {
        url: "/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "3xGrowth Project Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3xGrowth Projects - Successful B2B Marketing Case Studies",
    description: "Explore our successful B2B marketing projects that delivered 3x-5x higher performance for clients.",
  },
  alternates: {
    canonical: "https://3xgrowth.in/projects",
  },
}

export default function ProjectsPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <ProjectsHero />
        <ProjectsShowcase />
        <ProjectsResults />
        <ProjectsCTA />
      </main>
      <Footer />
    </div>
  )
}
