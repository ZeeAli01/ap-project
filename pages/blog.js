import Head from "next/head"
import Link from "next/link"
import { Calendar, User, ArrowRight, Tag } from "lucide-react"
import Footer from "@/components/layout/Footer"

export default function Blog() {
  const featuredPost = {
    title: "The Future of Link Management: Trends to Watch in 2025",
    excerpt:
      "Discover the emerging trends that will shape how businesses manage and optimize their digital links in the coming year.",
    author: "Sarah Johnson",
    date: "December 20, 2024",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "/placeholder.svg?height=400&width=600",
    slug: "future-of-link-management-2025",
  }

  const blogPosts = [
    {
      title: "10 Best Practices for Link Management in Marketing Campaigns",
      excerpt: "Learn how to optimize your marketing campaigns with strategic link management and tracking.",
      author: "Michael Chen",
      date: "December 18, 2024",
      readTime: "6 min read",
      category: "Marketing",
      image: "/placeholder.svg?height=300&width=400",
      slug: "link-management-marketing-best-practices",
    },
    {
      title: "How to Set Up Custom Domains for Your Short Links",
      excerpt: "A step-by-step guide to configuring custom domains and building brand trust with your links.",
      author: "Emily Rodriguez",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Tutorial",
      image: "/placeholder.svg?height=300&width=400",
      slug: "custom-domains-setup-guide",
    },
    {
      title: "Understanding Link Analytics: Metrics That Matter",
      excerpt: "Deep dive into the key metrics you should track to measure your link performance effectively.",
      author: "David Kim",
      date: "December 12, 2024",
      readTime: "7 min read",
      category: "Analytics",
      image: "/placeholder.svg?height=300&width=400",
      slug: "link-analytics-metrics-guide",
    },
    {
      title: "Security Best Practices for URL Shortening",
      excerpt: "Protect your links and users with these essential security measures and best practices.",
      author: "Sarah Johnson",
      date: "December 10, 2024",
      readTime: "4 min read",
      category: "Security",
      image: "/placeholder.svg?height=300&width=400",
      slug: "url-shortening-security-practices",
    },
    {
      title: "API Integration Guide: Building with ShortlyURL",
      excerpt: "Learn how to integrate ShortlyURL's API into your applications with practical examples.",
      author: "Michael Chen",
      date: "December 8, 2024",
      readTime: "9 min read",
      category: "Development",
      image: "/placeholder.svg?height=300&width=400",
      slug: "api-integration-guide",
    },
    {
      title: "Case Study: How TechCorp Increased CTR by 40%",
      excerpt:
        "Discover how one company used strategic link management to dramatically improve their click-through rates.",
      author: "Emily Rodriguez",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Case Study",
      image: "/placeholder.svg?height=300&width=400",
      slug: "techcorp-ctr-case-study",
    },
  ]

  const categories = [
    "All Posts",
    "Marketing",
    "Tutorial",
    "Analytics",
    "Security",
    "Development",
    "Case Study",
    "Industry Insights",
  ]

  return (
    <>
      <Head>
        <title>Blog - ShortlyURL</title>
        <meta
          name="description"
          content="Stay updated with the latest insights, tutorials, and best practices for link management and URL shortening."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ShortlyURL Blog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tutorials, and best practices for modern link management and digital marketing.
            </p>
          </div>

          {/* Featured Post */}
          <div className="card mb-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="order-2 lg:order-1 p-6 lg:p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded text-sm font-medium mr-4">Featured</span>
                  <span className="text-sm text-primary">{featuredPost.category}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <User size={16} className="mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link href={`/blog/${featuredPost.slug}`} className="btn-primary inline-flex items-center">
                  Read Article
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 ? "bg-primary text-white" : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="card hover:shadow-hover transition-all duration-400 hover:-translate-y-1 overflow-hidden"
              >
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Tag size={14} className="text-primary mr-2" />
                    <span className="text-sm text-primary">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <User size={14} className="mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar size={14} className="mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:underline text-sm font-medium flex items-center"
                  >
                    Read More
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="card text-center bg-primary/5">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights, tutorials, and product updates delivered to your
              inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="btn-primary px-6 py-3">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
