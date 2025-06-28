import Head from "next/head"
import Link from "next/link"
import { Calendar, Download, ExternalLink, Award, Users, TrendingUp } from "lucide-react"
import Footer from "@/components/layout/Footer"

export default function Press() {
  const pressReleases = [
    {
      title: "ShortlyURL Raises $25M Series B to Expand Global Link Management Platform",
      date: "December 15, 2024",
      excerpt:
        "Funding will accelerate product development and international expansion as demand for enterprise link management solutions grows.",
      category: "Funding",
    },
    {
      title: "ShortlyURL Launches Advanced Analytics Suite for Enterprise Customers",
      date: "November 20, 2024",
      excerpt:
        "New analytics platform provides deeper insights into link performance with real-time reporting and custom dashboards.",
      category: "Product",
    },
    {
      title: "ShortlyURL Achieves SOC 2 Type II Certification",
      date: "October 10, 2024",
      excerpt:
        "Certification demonstrates commitment to security and compliance for enterprise customers handling sensitive data.",
      category: "Security",
    },
    {
      title: "ShortlyURL Surpasses 15 Million Active Users Milestone",
      date: "September 5, 2024",
      excerpt: "Platform growth accelerates as businesses increasingly rely on professional link management solutions.",
      category: "Milestone",
    },
  ]

  const mediaKit = [
    {
      title: "Company Logo Pack",
      description: "High-resolution logos in various formats",
      fileSize: "2.5 MB",
      format: "ZIP",
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand identity and usage guidelines",
      fileSize: "1.8 MB",
      format: "PDF",
    },
    {
      title: "Product Screenshots",
      description: "High-quality product interface screenshots",
      fileSize: "5.2 MB",
      format: "ZIP",
    },
    {
      title: "Executive Photos",
      description: "Professional headshots of leadership team",
      fileSize: "3.1 MB",
      format: "ZIP",
    },
  ]

  const coverage = [
    {
      outlet: "TechCrunch",
      title: "ShortlyURL's Enterprise Push Pays Off with $25M Series B",
      date: "December 16, 2024",
      url: "#",
    },
    {
      outlet: "VentureBeat",
      title: "How ShortlyURL is Revolutionizing Link Management for Enterprises",
      date: "December 10, 2024",
      url: "#",
    },
    {
      outlet: "Forbes",
      title: "The Future of Digital Marketing: Why Link Management Matters",
      date: "November 25, 2024",
      url: "#",
    },
    {
      outlet: "The Information",
      title: "ShortlyURL's Security-First Approach Wins Enterprise Customers",
      date: "October 15, 2024",
      url: "#",
    },
  ]

  const awards = [
    {
      title: "Best SaaS Product 2024",
      organization: "SaaS Awards",
      year: "2024",
    },
    {
      title: "Top 50 Startups to Watch",
      organization: "TechCrunch",
      year: "2024",
    },
    {
      title: "Innovation in Marketing Technology",
      organization: "MarTech Breakthrough",
      year: "2023",
    },
    {
      title: "Best Security Implementation",
      organization: "InfoSec Awards",
      year: "2023",
    },
  ]

  const stats = [
    { icon: <Users className="text-primary" size={24} />, value: "15M+", label: "Active Users" },
    { icon: <TrendingUp className="text-primary" size={24} />, value: "1.2B+", label: "Links Created" },
    { icon: <Award className="text-primary" size={24} />, value: "190+", label: "Countries Served" },
    { icon: <Calendar className="text-primary" size={24} />, value: "99.9%", label: "Uptime" },
  ]

  return (
    <>
      <Head>
        <title>Press - ShortlyURL</title>
        <meta
          name="description"
          content="Latest news, press releases, and media resources for ShortlyURL. Download our media kit and stay updated."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Press & Media</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Latest news, announcements, and media resources for journalists and content creators.
            </p>
            <Link href="/contact" className="btn-primary">
              Media Inquiries
            </Link>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Press Releases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Latest Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <div key={index} className="card hover:shadow-hover transition-all duration-400">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">{release.category}</span>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar size={16} className="mr-1" />
                          {release.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{release.title}</h3>
                      <p className="text-muted-foreground">{release.excerpt}</p>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <Link href="#" className="btn-secondary flex items-center">
                        Read More
                        <ExternalLink size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Media Coverage */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Recent Media Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coverage.map((article, index) => (
                <div key={index} className="card hover:shadow-hover transition-all duration-400">
                  <div className="flex items-start justify-between mb-3">
                    <span className="font-bold text-primary">{article.outlet}</span>
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="font-bold mb-3">{article.title}</h3>
                  <Link href={article.url} className="text-primary hover:underline text-sm flex items-center">
                    Read Article
                    <ExternalLink size={14} className="ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Awards & Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="card text-center">
                  <Award className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="font-bold mb-2">{award.title}</h3>
                  <p className="text-muted-foreground text-sm mb-1">{award.organization}</p>
                  <p className="text-primary font-medium">{award.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Media Kit */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Media Kit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mediaKit.map((item, index) => (
                <div key={index} className="card text-center">
                  <Download className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                  <div className="text-xs text-muted-foreground mb-4">
                    {item.format} • {item.fileSize}
                  </div>
                  <Link href="#" className="btn-primary w-full">
                    Download
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="card text-center bg-primary/5">
            <h2 className="text-2xl font-bold mb-4">Media Contact</h2>
            <p className="text-muted-foreground mb-6">
              For press inquiries, interview requests, or additional information, please contact our media team.
            </p>
            <div className="space-y-2 mb-6">
              <p>
                <strong>Email:</strong> press@shortlyurl.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
            </div>
            <Link href="/contact" className="btn-primary">
              Contact Media Team
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
