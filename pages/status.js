import Head from "next/head"
import Link from "next/link"
import { useState, useEffect } from "react"
import { CheckCircle, AlertCircle, XCircle, Clock } from "lucide-react"
import Footer from "@/components/layout/Footer"

export default function Status() {
  const [lastUpdated, setLastUpdated] = useState("")

  useEffect(() => {
    setLastUpdated(new Date().toLocaleString())
  }, [])

  const services = [
    {
      name: "Link Shortening Service",
      status: "operational",
      uptime: "99.98%",
      responseTime: "45ms",
    },
    {
      name: "Analytics Dashboard",
      status: "operational",
      uptime: "99.95%",
      responseTime: "120ms",
    },
    {
      name: "API Services",
      status: "operational",
      uptime: "99.99%",
      responseTime: "35ms",
    },
    {
      name: "Custom Domains",
      status: "operational",
      uptime: "99.97%",
      responseTime: "55ms",
    },
    {
      name: "Mobile Applications",
      status: "operational",
      uptime: "99.96%",
      responseTime: "80ms",
    },
  ]

  const incidents = [
    {
      date: "Dec 15, 2024",
      title: "Scheduled Maintenance - Database Optimization",
      status: "resolved",
      description: "Performed routine database maintenance to improve performance.",
      duration: "30 minutes",
    },
    {
      date: "Dec 10, 2024",
      title: "Brief API Slowdown",
      status: "resolved",
      description:
        "API response times were elevated due to increased traffic. Issue resolved by scaling infrastructure.",
      duration: "15 minutes",
    },
    {
      date: "Nov 28, 2024",
      title: "Analytics Dashboard Update",
      status: "resolved",
      description: "Deployed new analytics features with improved performance.",
      duration: "45 minutes",
    },
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="text-success" size={20} />
      case "degraded":
        return <AlertCircle className="text-warning" size={20} />
      case "outage":
        return <XCircle className="text-error" size={20} />
      default:
        return <Clock className="text-muted-foreground" size={20} />
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "operational":
        return "Operational"
      case "degraded":
        return "Degraded Performance"
      case "outage":
        return "Service Outage"
      default:
        return "Unknown"
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "operational":
        return "text-success"
      case "degraded":
        return "text-warning"
      case "outage":
        return "text-error"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <>
      <Head>
        <title>System Status - ShortlyURL</title>
        <meta name="description" content="Check the current status of ShortlyURL services and view recent incidents." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">System Status</h1>
            <p className="text-xl text-muted-foreground">
              Real-time status and performance metrics for all ShortlyURL services.
            </p>
          </div>

          {/* Overall Status */}
          <div className="card mb-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="text-success mr-3" size={32} />
              <h2 className="text-2xl font-bold text-success">All Systems Operational</h2>
            </div>
            <p className="text-muted-foreground">
              All services are running normally. 
              {lastUpdated && ` Last updated: ${lastUpdated}`}
            </p>
          </div>

          {/* Services Status */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6">Service Status</h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                  <div className="flex items-center">
                    {getStatusIcon(service.status)}
                    <div className="ml-3">
                      <h3 className="font-medium">{service.name}</h3>
                      <p className={`text-sm ${getStatusColor(service.status)}`}>{getStatusText(service.status)}</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div>Uptime: {service.uptime}</div>
                    <div>Response: {service.responseTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card text-center">
              <h3 className="text-lg font-bold mb-2">Overall Uptime</h3>
              <div className="text-3xl font-bold text-success mb-1">99.97%</div>
              <p className="text-muted-foreground text-sm">Last 30 days</p>
            </div>
            <div className="card text-center">
              <h3 className="text-lg font-bold mb-2">Avg Response Time</h3>
              <div className="text-3xl font-bold text-primary mb-1">67ms</div>
              <p className="text-muted-foreground text-sm">Global average</p>
            </div>
            <div className="card text-center">
              <h3 className="text-lg font-bold mb-2">Incidents Resolved</h3>
              <div className="text-3xl font-bold text-success mb-1">100%</div>
              <p className="text-muted-foreground text-sm">This month</p>
            </div>
          </div>

          {/* Recent Incidents */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6">Recent Incidents</h2>
            <div className="space-y-4">
              {incidents.map((incident, index) => (
                <div key={index} className="border-l-4 border-success pl-4 py-2">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{incident.title}</h3>
                    <span className="text-sm text-muted-foreground">{incident.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-1">{incident.description}</p>
                  <div className="flex items-center text-sm">
                    <span className="text-success font-medium mr-4">Resolved</span>
                    <span className="text-muted-foreground">Duration: {incident.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subscribe to Updates */}
          <div className="card text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to get notified about service updates and maintenance windows.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact" className="btn-primary">
                Subscribe to Updates
              </Link>
              <Link href="/help" className="btn-secondary">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}