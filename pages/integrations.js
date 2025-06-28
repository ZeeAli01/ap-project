import Head from "next/head"
import Link from "next/link"
import { Zap, Code, Globe, BarChart3, Share2, Database } from "lucide-react"
import Footer from "@/components/layout/Footer"

export default function Integrations() {
  const categories = [
    {
      title: "Marketing Tools",
      icon: <BarChart3 className="text-primary" size={32} />,
      integrations: [
        {
          name: "Google Analytics",
          description: "Track link performance in GA",
          logo: "/placeholder.svg?height=40&width=40",
        },
        { name: "Facebook Pixel", description: "Retarget link visitors", logo: "/placeholder.svg?height=40&width=40" },
        { name: "HubSpot", description: "Sync links with CRM data", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Mailchimp", description: "Track email campaign links", logo: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      title: "Social Media",
      icon: <Share2 className="text-primary" size={32} />,
      integrations: [
        { name: "Twitter", description: "Auto-shorten Twitter links", logo: "/placeholder.svg?height=40&width=40" },
        { name: "LinkedIn", description: "Professional link sharing", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Instagram", description: "Bio link management", logo: "/placeholder.svg?height=40&width=40" },
        { name: "TikTok", description: "Track social campaigns", logo: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      title: "Development",
      icon: <Code className="text-primary" size={32} />,
      integrations: [
        { name: "GitHub", description: "Shorten repository links", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Slack", description: "Team link sharing", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Zapier", description: "Automate workflows", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Webhooks", description: "Real-time notifications", logo: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      title: "E-commerce",
      icon: <Globe className="text-primary" size={32} />,
      integrations: [
        { name: "Shopify", description: "Product link tracking", logo: "/placeholder.svg?height=40&width=40" },
        { name: "WooCommerce", description: "WordPress integration", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Stripe", description: "Payment link analytics", logo: "/placeholder.svg?height=40&width=40" },
        { name: "Amazon", description: "Affiliate link management", logo: "/placeholder.svg?height=40&width=40" },
      ],
    },
  ]

  const popularIntegrations = [
    {
      name: "Zapier",
      description: "Connect ShortlyURL with 5,000+ apps",
      features: ["Automated link creation", "Trigger-based actions", "Multi-step workflows"],
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Google Analytics",
      description: "Advanced tracking and attribution",
      features: ["UTM parameter automation", "Goal tracking", "Custom dimensions"],
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Slack",
      description: "Team collaboration and sharing",
      features: ["Link sharing in channels", "Analytics notifications", "Team workspaces"],
      logo: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <>
      <Head>
        <title>Integrations - ShortlyURL</title>
        <meta
          name="description"
          content="Connect ShortlyURL with your favorite tools and platforms. Seamless integrations for better workflow."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Integrations</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Connect ShortlyURL with your favorite tools and platforms to streamline your workflow and maximize
              productivity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/signup" className="btn-primary">
                Get Started
              </Link>
              <Link href="/developers" className="btn-secondary">
                View API Docs
              </Link>
            </div>
          </div>

          {/* Popular Integrations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Most Popular Integrations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {popularIntegrations.map((integration, index) => (
                <div key={index} className="card hover:shadow-hover transition-all duration-400 hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <img
                      src={integration.logo || "/placeholder.svg"}
                      alt={integration.name}
                      className="w-12 h-12 mr-4"
                    />
                    <h3 className="text-xl font-bold">{integration.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{integration.description}</p>
                  <ul className="space-y-2 mb-6">
                    {integration.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="#" className="btn-primary w-full text-center">
                    Connect Now
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Integration Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
            <div className="space-y-12">
              {categories.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center mb-8">
                    {category.icon}
                    <h3 className="text-2xl font-bold ml-4">{category.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.integrations.map((integration, integrationIndex) => (
                      <div
                        key={integrationIndex}
                        className="card hover:shadow-hover transition-all duration-400 hover:-translate-y-1"
                      >
                        <div className="flex items-center mb-3">
                          <img
                            src={integration.logo || "/placeholder.svg"}
                            alt={integration.name}
                            className="w-10 h-10 mr-3"
                          />
                          <h4 className="font-bold">{integration.name}</h4>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">{integration.description}</p>
                        <Link href="#" className="text-primary hover:underline text-sm font-medium">
                          Learn More →
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* API Integration */}
          <div className="card mb-16 bg-primary/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Custom Integrations</h2>
                <p className="text-muted-foreground mb-6">
                  Don't see your tool listed? Use our powerful REST API to build custom integrations with any platform
                  or service.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Code className="text-primary mr-3" size={20} />
                    <span>RESTful API with comprehensive documentation</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="text-primary mr-3" size={20} />
                    <span>Webhooks for real-time notifications</span>
                  </div>
                  <div className="flex items-center">
                    <Database className="text-primary mr-3" size={20} />
                    <span>SDKs for popular programming languages</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/developers" className="btn-primary mr-4">
                    View API Docs
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Request Integration
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
                  <Code className="text-primary mx-auto mb-4" size={64} />
                  <h3 className="text-xl font-bold mb-2">Developer Friendly</h3>
                  <p className="text-muted-foreground">
                    Build powerful integrations with our well-documented API and extensive developer resources.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card text-center">
              <Zap className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Automate Workflows</h3>
              <p className="text-muted-foreground">
                Streamline your processes with automated link creation and management across all your tools.
              </p>
            </div>
            <div className="card text-center">
              <BarChart3 className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Unified Analytics</h3>
              <p className="text-muted-foreground">
                Get comprehensive insights by connecting your analytics tools and tracking platforms.
              </p>
            </div>
            <div className="card text-center">
              <Globe className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Scale Efficiently</h3>
              <p className="text-muted-foreground">
                Manage links across multiple platforms and campaigns from a single, centralized dashboard.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary/90 to-primary-dark rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Connect Your Tools?</h2>
              <p className="text-xl mb-8 text-white/80">
                Start integrating ShortlyURL with your favorite platforms and supercharge your workflow today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/signup"
                  className="bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-white/90 transition-colors"
                >
                  Get Started Free
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border border-white/50 text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
