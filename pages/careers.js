import Head from "next/head"
import Link from "next/link"
import { MapPin, Clock, Users, Heart, Zap, Globe } from "lucide-react"
import Footer from "@/components/layout/Footer"

export default function Careers() {
  const openPositions = [
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description:
        "Join our frontend team to build beautiful, performant user interfaces using React and modern web technologies.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Lead product strategy and roadmap for our core link management platform and analytics features.",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Help scale our infrastructure to handle billions of link redirects with reliability and performance.",
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "New York, NY / Remote",
      type: "Full-time",
      description: "Work with enterprise customers to ensure they get maximum value from our platform.",
    },
    {
      title: "Marketing Designer",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Create compelling visual content for our marketing campaigns and brand initiatives.",
    },
    {
      title: "Backend Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Build and maintain our high-performance API and data processing systems.",
    },
  ]

  const benefits = [
    {
      icon: <Heart className="text-primary" size={32} />,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plus wellness stipend",
    },
    {
      icon: <Clock className="text-primary" size={32} />,
      title: "Flexible Schedule",
      description: "Flexible working hours and unlimited PTO to maintain work-life balance",
    },
    {
      icon: <Globe className="text-primary" size={32} />,
      title: "Remote First",
      description: "Work from anywhere with optional office access in San Francisco",
    },
    {
      icon: <Zap className="text-primary" size={32} />,
      title: "Growth & Learning",
      description: "Professional development budget and conference attendance support",
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: "Equity Package",
      description: "Competitive equity package so you can share in our success",
    },
    {
      icon: <MapPin className="text-primary" size={32} />,
      title: "Office Perks",
      description: "Catered meals, snacks, and modern office space in downtown SF",
    },
  ]

  const values = [
    {
      title: "Customer Obsession",
      description: "We start with the customer and work backwards, always putting their needs first.",
    },
    {
      title: "Ownership",
      description: "We take ownership of our work and are accountable for the outcomes.",
    },
    {
      title: "Innovation",
      description: "We embrace new ideas and aren't afraid to challenge the status quo.",
    },
    {
      title: "Transparency",
      description: "We communicate openly and honestly, sharing both successes and failures.",
    },
  ]

  return (
    <>
      <Head>
        <title>Careers - ShortlyURL</title>
        <meta
          name="description"
          content="Join our team and help build the future of link management. Explore open positions and learn about our culture."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Help us build the future of link management and make the internet more connected.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#positions" className="btn-primary">
                View Open Positions
              </Link>
              <Link href="#culture" className="btn-secondary">
                Learn About Our Culture
              </Link>
            </div>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Years Growing</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15M+</div>
              <div className="text-muted-foreground">Users Served</div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16" id="culture">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="card text-center">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="card hover:shadow-hover transition-all duration-400 hover:-translate-y-1">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-center">{benefit.title}</h3>
                  <p className="text-muted-foreground text-center">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16" id="positions">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="card hover:shadow-hover transition-all duration-400">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <h3 className="text-xl font-bold">{position.title}</h3>
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                          {position.department}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{position.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-1" />
                          {position.type}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <Link href="/contact" className="btn-primary">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Don't See Your Role */}
          <div className="card text-center bg-primary/5">
            <h2 className="text-2xl font-bold mb-4">Don't See Your Role?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented people to join our team. If you're passionate about what we do and think
              you'd be a great fit, we'd love to hear from you.
            </p>
            <Link href="/contact" className="btn-primary">
              Send Us Your Resume
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
