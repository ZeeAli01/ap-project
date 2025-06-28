import Head from "next/head"
import Link from "next/link"
import { Users, Target, Award, Globe } from "lucide-react"
import Footer from "@/components/layout/Footer"

export default function About() {
  const stats = [
    { value: "2019", label: "Founded" },
    { value: "15M+", label: "Active Users" },
    { value: "190+", label: "Countries Served" },
    { value: "1.2B+", label: "Links Created" },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former VP of Engineering at TechCorp with 15+ years in scaling web platforms.",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer passionate about building reliable, scalable infrastructure.",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Product",
      bio: "Product leader with expertise in user experience and growth optimization.",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Full-stack engineer focused on performance and developer experience.",
      avatar: "/placeholder.svg?height=120&width=120",
    },
  ]

  const values = [
    {
      icon: <Users className="text-primary" size={32} />,
      title: "User-Centric",
      description: "Every decision we make is guided by what's best for our users and their success.",
    },
    {
      icon: <Target className="text-primary" size={32} />,
      title: "Reliability",
      description: "We build robust systems that our users can depend on 24/7, 365 days a year.",
    },
    {
      icon: <Award className="text-primary" size={32} />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to customer support.",
    },
    {
      icon: <Globe className="text-primary" size={32} />,
      title: "Global Impact",
      description: "We're building tools that connect people and businesses around the world.",
    },
  ]

  return (
    <>
      <Head>
        <title>About Us - ShortlyURL</title>
        <meta
          name="description"
          content="Learn about ShortlyURL's mission, team, and values. We're building the future of link management."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ShortlyURL</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to make link management simple, powerful, and accessible to everyone.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ShortlyURL was born out of frustration with existing link management tools that were either too
                  complex or too limited. Our founders, Sarah and Michael, experienced this firsthand while working at
                  fast-growing tech companies.
                </p>
                <p>
                  In 2019, they decided to build the link management platform they wished existed - one that was
                  powerful enough for enterprises but simple enough for individuals. What started as a side project
                  quickly grew into a platform trusted by millions.
                </p>
                <p>
                  Today, ShortlyURL serves over 15 million users worldwide, from individual creators to Fortune 500
                  companies. We're proud to be the infrastructure that powers billions of link clicks every month.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize link management and help everyone share content more effectively.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="card text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="card text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary/90 to-primary-dark rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Journey</h2>
              <p className="text-xl mb-8 text-white/80">
                We're always looking for talented people who share our passion for building great products.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/careers"
                  className="bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-white/90 transition-colors"
                >
                  View Open Positions
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border border-white/50 text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
                >
                  Get in Touch
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
