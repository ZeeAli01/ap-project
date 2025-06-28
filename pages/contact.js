import Head from "next/head"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, MessageCircle, Users } from "lucide-react"
import Footer from "@/components/layout/Footer"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - ShortlyURL</title>
        <meta
          name="description"
          content="Get in touch with our team. We're here to help with any questions about ShortlyURL."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">
                      First Name
                    </label>
                    <input type="text" id="firstName" name="firstName" className="input-field" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">
                      Last Name
                    </label>
                    <input type="text" id="lastName" name="lastName" className="input-field" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email Address
                  </label>
                  <input type="email" id="email" name="email" className="input-field" required />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1">
                    Company (Optional)
                  </label>
                  <input type="text" id="company" name="company" className="input-field" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                    Subject
                  </label>
                  <select id="subject" name="subject" className="input-field" required>
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales Question</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="input-field"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary py-3">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-primary mr-3" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">support@shortlyurl.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-primary mr-3" size={20} />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-primary mr-3" size={20} />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        123 Tech Street
                        <br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-primary mr-3" size={20} />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-muted-foreground">Mon-Fri: 9AM-6PM PST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-4">Other Ways to Reach Us</h3>
                <div className="space-y-4">
                  <Link href="/help" className="flex items-center text-primary hover:underline">
                    <MessageCircle className="mr-3" size={20} />
                    Help Center & Live Chat
                  </Link>
                  <Link href="/enterprise" className="flex items-center text-primary hover:underline">
                    <Users className="mr-3" size={20} />
                    Enterprise Sales
                  </Link>
                </div>
              </div>

              <div className="card bg-primary/5">
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-muted-foreground mb-4">
                  Check out our comprehensive help center for instant answers to common questions.
                </p>
                <Link href="/help" className="btn-primary inline-block">
                  Visit Help Center
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
