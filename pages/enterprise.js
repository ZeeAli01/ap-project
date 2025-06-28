import Head from "next/head"
import Link from "next/link"
import { Shield, Users, Zap, Globe, Lock, BarChart3, Headphones, Settings } from "lucide-react"
import Footer from "@/components/layout/Footer"

export default function Enterprise() {
  const features = [
    {
      icon: <Shield className="text-primary" size={24} />,
      title: "Enterprise Security",
      description: "SOC 2 compliance, SSO integration, and advanced security controls for your organization.",
    },
    {
      icon: <Users className="text-primary" size={24} />,
      title: "Team Management",
      description: "Advanced user management with role-based permissions and team collaboration tools.",
    },
    {
      icon: <Zap className="text-primary" size={24} />,
      title: "High Performance",
      description: "Dedicated infrastructure with guaranteed uptime and lightning-fast redirects.",
    },
    {
      icon: <Globe className="text-primary" size={24} />,
      title: "Custom Domains",
      description: "Unlimited custom domains with SSL certificates and advanced DNS management.",
    },
    {
      icon: <Lock className="text-primary" size={24} />,
      title: "Data Privacy",
      description: "Complete data ownership with on-premise deployment options and GDPR compliance.",
    },
    {
      icon: <BarChart3 className="text-primary" size={24} />,
      title: "Advanced Analytics",
      description: "Custom reporting, data exports, and integration with your existing analytics tools.",
    },
    {
      icon: <Headphones className="text-primary" size={24} />,
      title: "Dedicated Support",
      description: "24/7 priority support with dedicated account manager and SLA guarantees.",
    },
    {
      icon: <Settings className="text-primary" size={24} />,
      title: "Custom Integrations",
      description: "Tailored integrations with your existing systems and custom API endpoints.",
    },
  ]

  const benefits = [
    {
      title: "Scale with Confidence",
      description: "Handle millions of links and billions of clicks with our enterprise-grade infrastructure.",
      stats: "99.99% uptime SLA",
    },
    {
      title: "Maintain Brand Control",
      description: "Complete white-label solution with your branding, domains, and custom user experience.",
      stats: "Unlimited domains",
    },
    {
      title: "Ensure Compliance",
      description: "Meet regulatory requirements with SOC 2, GDPR, and industry-specific compliance features.",
      stats: "SOC 2 Type II certified",
    },
    {
      title: "Get Expert Support",
      description: "Dedicated customer success team with priority support and custom onboarding.",
      stats: "< 1 hour response time",
    },
  ]

  const testimonials = [
    {
      quote:
        "ShortlyURL Enterprise has transformed how we manage our global marketing campaigns. The analytics and team features are exactly what we needed.",
      author: "Jennifer Martinez",
      title: "VP of Marketing, GlobalTech Inc.",
      company: "Fortune 500 Technology Company",
    },
    {
      quote:
        "The security features and compliance certifications gave us confidence to deploy ShortlyURL across our entire organization.",
      author: "Robert Chen",
      title: "CISO, SecureBank",
      company: "Financial Services",
    },
  ]

  return (
    <>
      <Head>
        <title>Enterprise - ShortlyURL</title>
        <meta
          name="description"
          content="Enterprise-grade link management with advanced security, analytics, and support for large organizations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Link Management</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Secure, scalable, and compliant link management solution designed for large organizations and enterprises.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact" className="btn-primary">
                Request Demo
              </Link>
              <Link href="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="card hover:shadow-hover transition-all duration-400 hover:-translate-y-1">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Enterprises Choose ShortlyURL</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="card">
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-4">{benefit.description}</p>
                  <div className="text-primary font-bold">{benefit.stats}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Compliance */}
          <div className="card mb-16 bg-primary/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Security & Compliance First</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Shield className="text-primary mr-3" size={20} />
                    <span>SOC 2 Type II Certified</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="text-primary mr-3" size={20} />
                    <span>GDPR & CCPA Compliant</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="text-primary mr-3" size={20} />
                    <span>ISO 27001 Certified</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="text-primary mr-3" size={20} />
                    <span>HIPAA Compliant Options</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="text-primary mr-3" size={20} />
                    <span>SSO & SAML Integration</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
                  <Shield className="text-primary mx-auto mb-4" size={64} />
                  <h3 className="text-xl font-bold mb-2">Bank-Level Security</h3>
                  <p className="text-muted-foreground">
                    Your data is protected with the same security standards used by financial institutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card">
                  <div className="mb-6">
                    <svg
                      width="45"
                      height="36"
                      className="text-primary/30"
                      viewBox="0 0 45 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5 18H9C9.75 12 12.75 9 18.75 9V13.5C15.75 13.5 13.5 15 13.5 18ZM27 18H22.5C23.25 12 26.25 9 32.25 9V13.5C29.25 13.5 27 15 27 18ZM13.5 31.5V18H22.5V31.5H13.5ZM27 31.5V18H36V31.5H27Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="mb-6 text-foreground">{testimonial.quote}</p>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Process */}
          <div className="card mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Implementation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">Discovery Call</h3>
                <p className="text-muted-foreground text-sm">Understand your requirements and use cases</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">Custom Setup</h3>
                <p className="text-muted-foreground text-sm">Configure your enterprise environment</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Team Training</h3>
                <p className="text-muted-foreground text-sm">Onboard your team with dedicated training</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold mb-2">Go Live</h3>
                <p className="text-muted-foreground text-sm">Launch with ongoing support and monitoring</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary/90 to-primary-dark rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Link Management?</h2>
              <p className="text-xl mb-8 text-white/80">
                Join hundreds of enterprises who trust ShortlyURL for their mission-critical link management needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/contact"
                  className="bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-white/90 transition-colors"
                >
                  Schedule Demo
                </Link>
                <Link
                  href="/pricing"
                  className="bg-transparent border border-white/50 text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
                >
                  View Enterprise Pricing
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
