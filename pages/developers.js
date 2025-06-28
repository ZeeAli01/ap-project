import Head from "next/head"
import Link from "next/link"
import { Code, Book, Zap, Shield, Globe, Users } from "lucide-react"
import Footer from "@/components/layout/Footer"

export default function Developers() {
  const features = [
    {
      icon: <Code className="text-primary" size={24} />,
      title: "RESTful API",
      description: "Simple, intuitive REST API with comprehensive documentation and examples.",
    },
    {
      icon: <Zap className="text-primary" size={24} />,
      title: "Rate Limiting",
      description: "Generous rate limits with clear headers and upgrade options for high-volume usage.",
    },
    {
      icon: <Shield className="text-primary" size={24} />,
      title: "Authentication",
      description: "Secure API key authentication with support for multiple keys per account.",
    },
    {
      icon: <Globe className="text-primary" size={24} />,
      title: "Webhooks",
      description: "Real-time notifications for link events including clicks, creation, and updates.",
    },
    {
      icon: <Book className="text-primary" size={24} />,
      title: "SDKs & Libraries",
      description: "Official SDKs for popular programming languages and frameworks.",
    },
    {
      icon: <Users className="text-primary" size={24} />,
      title: "Developer Support",
      description: "Dedicated developer support team and active community forum.",
    },
  ]

  const endpoints = [
    {
      method: "POST",
      endpoint: "/v1/links",
      description: "Create a new short link",
    },
    {
      method: "GET",
      endpoint: "/v1/links/{id}",
      description: "Retrieve link details and analytics",
    },
    {
      method: "PUT",
      endpoint: "/v1/links/{id}",
      description: "Update an existing link",
    },
    {
      method: "DELETE",
      endpoint: "/v1/links/{id}",
      description: "Delete a link",
    },
    {
      method: "GET",
      endpoint: "/v1/links",
      description: "List all links with pagination",
    },
    {
      method: "GET",
      endpoint: "/v1/analytics/{id}",
      description: "Get detailed analytics for a link",
    },
  ]

  const codeExample = `// Create a short link
const response = await fetch('https://api.shortlyurl.com/v1/links', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://example.com/very-long-url',
    title: 'My Link',
    domain: 'short.ly'
  })
});

const data = await response.json();
console.log(data.shortUrl); // https://short.ly/abc123`

  return (
    <>
      <Head>
        <title>Developers - ShortlyURL</title>
        <meta
          name="description"
          content="Build with ShortlyURL's powerful API. Comprehensive documentation, SDKs, and developer tools."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Build with ShortlyURL</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Integrate link shortening and analytics into your applications with our powerful, easy-to-use API.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/signup" className="btn-primary">
                Get API Key
              </Link>
              <Link href="#documentation" className="btn-secondary">
                View Documentation
              </Link>
            </div>
          </div>

          {/* Features */}
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

          {/* Quick Start */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Quick Start</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Get Your API Key</h3>
                    <p className="text-muted-foreground">
                      Sign up for a free account and generate your API key from the dashboard.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Make Your First Request</h3>
                    <p className="text-muted-foreground">
                      Use our REST API to create your first short link in seconds.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Track Performance</h3>
                    <p className="text-muted-foreground">Access detailed analytics and insights for all your links.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-muted/30">
              <h3 className="text-lg font-bold mb-4">Example Request</h3>
              <pre className="text-sm overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>
          </div>

          {/* API Endpoints */}
          <div className="mb-16" id="documentation">
            <h2 className="text-3xl font-bold text-center mb-12">API Endpoints</h2>
            <div className="card">
              <div className="space-y-4">
                {endpoints.map((endpoint, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                    <div className="flex items-center">
                      <span
                        className={`px-3 py-1 rounded text-sm font-medium mr-4 ${
                          endpoint.method === "GET"
                            ? "bg-blue-100 text-blue-800"
                            : endpoint.method === "POST"
                              ? "bg-green-100 text-green-800"
                              : endpoint.method === "PUT"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                        }`}
                      >
                        {endpoint.method}
                      </span>
                      <code className="font-mono text-sm">{endpoint.endpoint}</code>
                    </div>
                    <p className="text-muted-foreground text-sm">{endpoint.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card text-center">
              <Book className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Documentation</h3>
              <p className="text-muted-foreground mb-4">Comprehensive API documentation with examples and tutorials.</p>
              <Link href="#" className="btn-primary">
                Read Docs
              </Link>
            </div>
            <div className="card text-center">
              <Code className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">SDKs</h3>
              <p className="text-muted-foreground mb-4">Official SDKs for JavaScript, Python, PHP, Ruby, and more.</p>
              <Link href="#" className="btn-primary">
                Download SDKs
              </Link>
            </div>
            <div className="card text-center">
              <Users className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-muted-foreground mb-4">Join our developer community for support and discussions.</p>
              <Link href="#" className="btn-primary">
                Join Community
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary/90 to-primary-dark rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Building?</h2>
              <p className="text-xl mb-8 text-white/80">
                Get your API key and start integrating ShortlyURL into your applications today.
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
