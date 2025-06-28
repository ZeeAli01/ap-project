import Footer from "@/components/layout/Footer"
import Head from "next/head"
import Link from "next/link"

export default function Cookies() {
  return (
    <>
      <Head>
        <title>Cookie Policy - ShortlyURL</title>
        <meta
          name="description"
          content="Cookie Policy for ShortlyURL. Learn about how we use cookies and similar technologies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: December 28, 2024</p>
          </div>

          <div className="card prose prose-gray max-w-none">
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>ShortlyURL uses cookies and similar technologies to:</p>
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Keep you signed in to your account</li>
              <li>Analyze how our service is used</li>
              <li>Improve our service performance</li>
              <li>Provide personalized content and features</li>
              <li>Prevent fraud and enhance security</li>
            </ul>

            <h2>3. Types of Cookies We Use</h2>

            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable core functionality such as
              security, network management, and accessibility.
            </p>
            <div className="bg-muted/30 p-4 rounded-lg mb-4">
              <p className="mb-2">
                <strong>Examples:</strong>
              </p>
              <ul className="mb-0">
                <li>Authentication cookies to keep you logged in</li>
                <li>Security cookies to protect against fraud</li>
                <li>Load balancing cookies for optimal performance</li>
              </ul>
            </div>

            <h3>Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our website by collecting and reporting
              information anonymously.
            </p>
            <div className="bg-muted/30 p-4 rounded-lg mb-4">
              <p className="mb-2">
                <strong>Examples:</strong>
              </p>
              <ul className="mb-0">
                <li>Google Analytics cookies to track page views</li>
                <li>Performance monitoring cookies</li>
                <li>User behavior analysis cookies</li>
              </ul>
            </div>

            <h3>Functional Cookies</h3>
            <p>
              These cookies enable enhanced functionality and personalization, such as remembering your preferences.
            </p>
            <div className="bg-muted/30 p-4 rounded-lg mb-4">
              <p className="mb-2">
                <strong>Examples:</strong>
              </p>
              <ul className="mb-0">
                <li>Theme preference cookies (dark/light mode)</li>
                <li>Language selection cookies</li>
                <li>Dashboard layout preferences</li>
              </ul>
            </div>

            <h3>Marketing Cookies</h3>
            <p>
              These cookies are used to track visitors across websites to display relevant advertisements and measure
              campaign effectiveness.
            </p>
            <div className="bg-muted/30 p-4 rounded-lg mb-4">
              <p className="mb-2">
                <strong>Examples:</strong>
              </p>
              <ul className="mb-0">
                <li>Advertising platform cookies</li>
                <li>Social media integration cookies</li>
                <li>Conversion tracking cookies</li>
              </ul>
            </div>

            <h2>4. Third-Party Cookies</h2>
            <p>We may use third-party services that place cookies on your device. These include:</p>
            <ul>
              <li>
                <strong>Google Analytics:</strong> For website analytics and performance monitoring
              </li>
              <li>
                <strong>Intercom:</strong> For customer support and live chat functionality
              </li>
              <li>
                <strong>Stripe:</strong> For payment processing and fraud prevention
              </li>
              <li>
                <strong>Social Media Platforms:</strong> For social sharing and login functionality
              </li>
            </ul>

            <h2>5. Cookie Duration</h2>
            <p>Cookies may be either "session" cookies or "persistent" cookies:</p>
            <ul>
              <li>
                <strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser
              </li>
              <li>
                <strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them
              </li>
            </ul>

            <h2>6. Managing Your Cookie Preferences</h2>

            <h3>Browser Settings</h3>
            <p>Most web browsers allow you to control cookies through their settings. You can:</p>
            <ul>
              <li>View what cookies are stored on your device</li>
              <li>Delete existing cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all cookies (may affect website functionality)</li>
            </ul>

            <h3>Our Cookie Preferences</h3>
            <p>
              You can manage your cookie preferences for our website by clicking the "Cookie Settings" link in our
              website footer or by visiting your account settings.
            </p>

            <h3>Opt-Out Links</h3>
            <p>For third-party analytics and advertising cookies, you can opt out directly:</p>
            <ul>
              <li>
                <strong>Google Analytics:</strong>{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Analytics Opt-out
                </a>
              </li>
              <li>
                <strong>Advertising Cookies:</strong>{" "}
                <a
                  href="http://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Digital Advertising Alliance
                </a>
              </li>
            </ul>

            <h2>7. Impact of Disabling Cookies</h2>
            <p>If you choose to disable cookies, some features of our service may not function properly:</p>
            <ul>
              <li>You may need to log in repeatedly</li>
              <li>Your preferences may not be saved</li>
              <li>Some personalized features may not work</li>
              <li>Analytics and performance monitoring may be affected</li>
            </ul>

            <h2>8. Mobile Applications</h2>
            <p>Our mobile applications may use similar technologies to cookies, including:</p>
            <ul>
              <li>Local storage for app preferences</li>
              <li>Analytics SDKs for usage tracking</li>
              <li>Push notification tokens</li>
              <li>Crash reporting tools</li>
            </ul>

            <h2>9. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other
              operational, legal, or regulatory reasons. We will notify you of any material changes by:
            </p>
            <ul>
              <li>Posting the updated policy on our website</li>
              <li>Sending email notifications to registered users</li>
              <li>Displaying a notice on our service</li>
            </ul>

            <h2>10. Contact Us</h2>
            <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us:</p>
            <ul>
              <li>
                <strong>Email:</strong> privacy@shortlyurl.com
              </li>
              <li>
                <strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105
              </li>
              <li>
                <strong>Phone:</strong> +1 (555) 123-4567
              </li>
            </ul>

            <div className="mt-8 p-4 bg-primary/5 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Quick Cookie Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p>
                    <strong>Essential Cookies:</strong> Always active
                  </p>
                  <p>
                    <strong>Analytics Cookies:</strong> Can be disabled
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Functional Cookies:</strong> Can be disabled
                  </p>
                  <p>
                    <strong>Marketing Cookies:</strong> Can be disabled
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground mb-0">
                <strong>Note:</strong> This Cookie Policy is part of our Privacy Policy and Terms of Service. By using
                ShortlyURL, you consent to the use of cookies as described in this policy.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="btn-primary mr-4">
              Back to Home
            </Link>
            <Link href="/privacy" className="btn-secondary mr-4">
              Privacy Policy
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
