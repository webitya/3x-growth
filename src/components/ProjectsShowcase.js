"use client"

export default function ProjectsShowcase() {
  const projects = [
    {
      title: "SaaS Platform - 400% Pipeline Growth",
      industry: "Technology",
      challenge:
        "A B2B SaaS company struggled to reach enterprise decision-makers and was relying on inbound leads with low conversion rates.",
      solution:
        "We implemented a comprehensive ABM strategy targeting 50 high-value accounts with personalized content, executive positioning, and multi-channel engagement.",
      results: [
        "400% increase in qualified pipeline",
        "85% meeting acceptance rate",
        "30% shorter sales cycles",
        "$2.5M in new revenue attributed",
      ],
      duration: "6 months",
      color: "#E4EFFE",
    },
    {
      title: "Manufacturing Company - Global Market Entry",
      industry: "Manufacturing",
      challenge:
        "An established manufacturing company needed to enter new international markets but lacked brand recognition and trusted relationships.",
      solution:
        "We developed a reputation-first strategy with thought leadership content, industry partnerships, and targeted account engagement across 3 new markets.",
      results: [
        "Successfully entered 3 new markets",
        "Generated 150+ qualified leads",
        "Established partnerships with 5 key distributors",
        "Achieved 25% market share in Year 1",
      ],
      duration: "12 months",
      color: "#DFD7F9",
    },
    {
      title: "Fintech Startup - Enterprise Client Acquisition",
      industry: "Financial Services",
      challenge:
        "A fintech startup with innovative technology couldn't break into enterprise accounts due to lack of credibility and established relationships.",
      solution:
        "We created a trust-building campaign featuring customer success stories, regulatory compliance content, and strategic executive networking.",
      results: [
        "Secured 12 enterprise clients",
        "Average deal size increased by 300%",
        "Reduced sales cycle from 18 to 12 months",
        "Achieved $5M ARR milestone",
      ],
      duration: "9 months",
      color: "#DBEAFE",
    },
  ]

  return (
    <section
      style={{
        backgroundColor: "white",
        padding: "100px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#1F2937",
              marginBottom: "24px",
              lineHeight: "1.2",
            }}
            className="text-3xl md:text-4xl lg:text-5xl"
          >
            Featured Case Studies
          </h2>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.6",
              color: "#6B7280",
              maxWidth: "600px",
              margin: "0 auto",
            }}
            className="text-lg md:text-xl"
          >
            Real results from real companies that trusted us to transform their B2B marketing approach.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "60px",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "40px",
                alignItems: "center",
              }}
              className="lg:grid-cols-2"
            >
              {/* Content */}
              <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                <div
                  style={{
                    display: "inline-block",
                    backgroundColor: project.color,
                    color: "#1447E6",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "16px",
                  }}
                >
                  {project.industry}
                </div>
                <h3
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "#1F2937",
                    marginBottom: "20px",
                    lineHeight: "1.2",
                  }}
                  className="text-2xl md:text-3xl"
                >
                  {project.title}
                </h3>

                <div style={{ marginBottom: "24px" }}>
                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#1F2937",
                      marginBottom: "8px",
                    }}
                  >
                    Challenge:
                  </h4>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.6",
                      color: "#6B7280",
                    }}
                  >
                    {project.challenge}
                  </p>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#1F2937",
                      marginBottom: "8px",
                    }}
                  >
                    Solution:
                  </h4>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.6",
                      color: "#6B7280",
                    }}
                  >
                    {project.solution}
                  </p>
                </div>

                <div
                  style={{
                    display: "inline-block",
                    backgroundColor: "#F3F4F6",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#6B7280",
                  }}
                >
                  Duration: {project.duration}
                </div>
              </div>

              {/* Results Card */}
              <div
                style={{
                  order: index % 2 === 0 ? 2 : 1,
                  backgroundColor: "#F9FAFB",
                  padding: "40px",
                  borderRadius: "20px",
                  border: "1px solid #E5E7EB",
                }}
              >
                <h4
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#1F2937",
                    marginBottom: "24px",
                  }}
                >
                  Results Achieved:
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {project.results.map((result, resultIndex) => (
                    <div
                      key={resultIndex}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "12px 0",
                        borderBottom: resultIndex < project.results.length - 1 ? "1px solid #E5E7EB" : "none",
                      }}
                    >
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: "#1447E6",
                          borderRadius: "50%",
                          flexShrink: 0,
                        }}
                      ></div>
                      <span
                        style={{
                          color: "#4B5563",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
