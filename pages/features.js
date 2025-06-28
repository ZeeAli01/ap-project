import Head from "next/head"
import Link from "next/link"
import {
  BarChart3,
  LinkIcon,
  Zap,
  Shield,
  LineChart,
  PieChart,
  Globe,
  Users,
  Target,
  Clock,
  Smartphone,
  Lock,
} from "lucide-react"
import Footer from "@/components/layout/Footer"

export default function Features() {
  const features = [
    {
      icon: <LinkIcon className="text-primary" size={24} />,
      title: "Custom Short Links",
      description:
        "Create branded short links with custom domains and memorable aliases that reflect your brand identity.",
    },
    {
      icon: <BarChart3 className="text-primary" size={24} />,
      title: "Advanced Analytics",
      description:
        "Get detailed insights into your link performance with real-time click tracking, geographic data, and device analytics.",
    },
    {
      icon: <Zap className="text-primary" size={24} />,
      title: "Lightning Fast",
      description:
        "Our global CDN ensures your links redirect instantly, providing the best user experience worldwide.",
    },
    {
      icon: <Shield className="text-primary" size={24} />,
      title: "Enterprise Security",
      description:
        "Bank-level security with SSL encryption, malware protection, and compliance with industry standards.",
    },
    {
      icon: <Globe className="text-primary" size={24} />,
      title: "Global Reach",
      description: "Serve users from 190+ countries with our worldwide network of servers for optimal performance.",
    },
    {
      icon: <Users className="text-primary" size={24} />,
      title: "Team Collaboration",
      description:
        "Work together with your team using shared workspaces, role-based permissions, and collaborative features.",
    },
    {
      icon: <Target className="text-primary" size={24} />,
      title: "Smart Targeting",
      description: "Route users to different destinations based on their location, device, or other custom parameters.",
    },
    {
      icon: <Clock className="text-primary" size={24} />,
      title: "Link Scheduling",
      description: "Schedule your links to activate or expire at specific times, perfect for campaigns and promotions.",
    },
    {
      icon: <Smartphone className="text-primary" size={24} />,
      title: "Mobile Optimized",
      description: "Fully responsive design and mobile apps ensure you can manage your links from anywhere.",
    },
    {
      icon: <Lock className="text-primary" size={24} />,
      title: "Password Protection",
      description: "Add an extra layer of security with password-protected links for sensitive content.",
    },
    {
      icon: <PieChart className="text-primary" size={24} />,
      title: "Conversion Tracking",
      description: "Track conversions and measure ROI with integrated analytics and goal tracking features.",
    },
    {
      icon: <LineChart className="text-primary" size={24} />,
      title: "A/B Testing",
      description: "Test different destinations and optimize your campaigns with built-in A/B testing tools.",
    },
  ]

  return (
    <>
      <Head>
        <title>Features - ShortlyURL</title>
        <meta
          name="description"
          content="Discover all the powerful features that make ShortlyURL the best choice for link management"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features for Modern Link Management</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Everything you need to create, manage, and optimize your links with enterprise-grade tools and analytics.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/signup" className="btn-primary flex items-center justify-center">
                Get Started for Free
              </Link>
              <Link href="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="card hover:shadow-hover transition-all duration-400 hover:-translate-y-1">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/90 to-primary-dark rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to experience these features?</h2>
              <p className="text-xl mb-8 text-white/80">
                Join thousands of professionals who trust ShortlyURL for their link management needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/signup"
                  className="bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-white/90 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border border-white/50 text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
                >
                  Contact Sales
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
