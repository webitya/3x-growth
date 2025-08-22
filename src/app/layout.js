import "./globals.css"

export const metadata = {
  title: "3xGrowth - Account-Based Marketing Experts | B2B Lead Generation",
  description:
    "We Don't Chase Leads. We Create Markets. 15+ years of proven B2B Account-Based Marketing expertise. Transform your business with strategic ABM solutions.",
  keywords:
    "Account-Based Marketing, B2B Marketing, Lead Generation, ABM Strategy, B2B Sales, Marketing Automation, Demand Generation, B2B Growth",
  author: "3xGrowth Marketing Team",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "3xGrowth - Account-Based Marketing Experts | B2B Lead Generation",
    description: "We Don't Chase Leads. We Create Markets. 15+ years of proven B2B Account-Based Marketing expertise.",
    url: "https://3xgrowth.in",
    siteName: "3xGrowth",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "3xGrowth - Account-Based Marketing Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3xGrowth - Account-Based Marketing Experts",
    description: "We Don't Chase Leads. We Create Markets. 15+ years of proven B2B ABM expertise.",
    images: ["/twitter-image.jpg"],
    creator: "@3xgrowth",
  },
  alternates: {
    canonical: "https://3xgrowth.in",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1447E6" />
        <meta name="msapplication-TileColor" content="#1447E6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "3xGrowth",
              url: "https://3xgrowth.in",
              logo: "https://3xgrowth.in/logo.png",
              description: "Account-Based Marketing experts with 15+ years of proven B2B marketing expertise",
              address: {
                "@type": "PostalAddress",
                streetAddress: "D Block, Jayshree Green City, Argora",
                addressLocality: "Ranchi",
                addressRegion: "Jharkhand",
                addressCountry: "India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-6200207379",
                contactType: "customer service",
                email: "contact@3xgrowth.in",
              },
              sameAs: ["https://linkedin.com/company/3xgrowth"],
            }),
          }}
        />
      </head>
      <body style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>{children}</body>
    </html>
  )
}
