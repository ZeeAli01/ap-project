import Head from "next/head"
import Link from "next/link"
import { Search, Book, MessageCircle, Video, FileText, Users, Zap, Shield } from "lucide-react"
import Footer from "@/components/layout/Footer"

export default function Help() {
  const categories = [
    {
      icon: <Zap className="text-primary" size={24} />,
      title: "Getting Started",
      description: "Learn the basics of ShortlyURL",
      articles: [
        "How to create your first short link",
        "Setting up your account",
        "Understanding the dashboard",
        "Basic link management",
      ],
    },
    {
      icon: <Book className="text-primary" size={24} />,
      title: "Link Management",
      description: "Advanced link features and settings",
      articles: [
        "Custom domains setup",
        "Link expiration and scheduling",
        "Password protection",
        "Bulk link operations",
      ],
    },
    {
      icon: <FileText className="text-primary" size={24} />,
      title: "Analytics & Reporting",
      description: "Track and analyze your link performance",
      articles: [
        "Understanding analytics data",
        "Creating custom reports",
        "Setting up conversion tracking",
        "Exporting analytics data",
      ],
    },
    {
      icon: <Users className="text-primary" size={24} />,
      title: "Team & Collaboration",
      description: "Working with teams and permissions",
      articles: ["Adding team members", "Setting user permissions", "Shared workspaces", "Team analytics"],
    },
    {
      icon: <Shield className="text-primary" size={24} />,
      title: "Security & Privacy",
      description: "Keep your links and data secure",
      articles: [
        "Two-factor authentication",
        "API security best practices",
        "Data privacy settings",
        "Compliance features",
      ],
    },
    {
      icon: <MessageCircle className="text-primary" size={24} />,
      title: "API & Integrations",
      description: "Developer resources and integrations",
      articles: ["API authentication", "Rate limits and quotas", "Webhook setup", "Popular integrations"],
    },
  ]

  const popularArticles = [
    {
      title: "How to create a custom short link",
      category: "Getting Started",
      readTime: "3 min read",
    },
    {
      title: "Setting up Google Analytics tracking",
      category: "Analytics",
      readTime: "5 min read",
    },
    {
      title: "Using custom domains",
      category: "Link Management",
      readTime: "7 min read",
    },
    {
      title: "API rate limits explained",
      category: "API",
      readTime: "4 min read",
    },
    {
      title: "Team permissions guide",
      category: "Team Management",
      readTime: "6 min read",
    },
  ]

  const contactOptions = [
    {
      icon: <MessageCircle className="text-primary" size={32} />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "Available 24/7",
      action: "Start Chat",
    },
    {
      icon: <Video className="text-primary" size={32} />,
      title: "Video Call",
      description: "Schedule a screen share session",
      availability: "Business hours",
      action: "Schedule Call",
    },
    {
      icon: <FileText className="text-primary" size={32} />,
      title: "Submit Ticket",
      description: "Send us a detailed support request",
      availability: "Response within 24h",
      action: "Create Ticket",
    },
  ]

  return (
    <>
      <Head>
        <title>Help Center - ShortlyURL</title>
        <meta
          name="description"
          content="Find answers to your questions about ShortlyURL. Comprehensive guides, tutorials, and support resources."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How can we help you?</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Search our knowledge base or get in touch with our support team.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search for articles, guides, and tutorials..."
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Popular Articles */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Popular Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map((article, index) => (
                <Link
                  key={index}
                  href="#"
                  className="card hover:shadow-hover transition-all duration-400 hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{article.category}</span>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h3 className="font-bold mb-2 hover:text-primary transition-colors">{article.title}</h3>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="card hover:shadow-hover transition-all duration-400 hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mr-4">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          {article}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="#" className="text-primary hover:underline text-sm font-medium mt-4 inline-block">
                    View all articles →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Still Need Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactOptions.map((option, index) => (
                <div key={index} className="card text-center">
                  <div className="flex justify-center mb-4">{option.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <p className="text-sm text-primary mb-6">{option.availability}</p>
                  <Link href="/contact" className="btn-primary w-full">
                    {option.action}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-b border-border pb-6">
                <h3 className="text-lg font-bold mb-2">How do I create a short link?</h3>
                <p className="text-muted-foreground">
                  Simply paste your long URL into the input field on your dashboard and click "Shorten URL". You can
                  customize the short link and add additional settings before creating it.
                </p>
              </div>
              <div className="border-b border-border pb-6">
                <h3 className="text-lg font-bold mb-2">Can I use my own domain?</h3>
                <p className="text-muted-foreground">
                  Yes! Pro and Business plans include custom domain support. You can add your domain in the settings and
                  we'll provide instructions for DNS configuration.
                </p>
              </div>
              <div className="border-b border-border pb-6">
                <h3 className="text-lg font-bold mb-2">How long do links last?</h3>
                <p className="text-muted-foreground">
                  By default, links never expire. However, you can set custom expiration dates for any link. Free
                  accounts have links that remain active as long as the account is active.
                </p>
              </div>
              <div className="border-b border-border pb-6">
                <h3 className="text-lg font-bold mb-2">Is there an API available?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer a comprehensive REST API for all paid plans. You can create, manage, and track links
                  programmatically. Check our developer documentation for details.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">How do I cancel my subscription?</h3>
                <p className="text-muted-foreground">
                  You can cancel your subscription anytime from your account settings. Your account will remain active
                  until the end of your current billing period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
