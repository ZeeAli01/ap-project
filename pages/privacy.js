import Footer from "@/components/layout/Footer"
import Head from "next/head"
import Link from "next/link"

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - ShortlyURL</title>
        <meta
          name="description"
          content="Privacy Policy for ShortlyURL. Learn how we collect, use, and protect your personal information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: December 28, 2024</p>
          </div>

          <div className="card prose prose-gray max-w-none">
            <h2>1. Introduction</h2>
            <p>
              At ShortlyURL ("we," "our," or "us"), we respect your privacy and are committed to protecting your
              personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you use our URL shortening service.
            </p>

            <h2>2. Information We Collect</h2>

            <h3>Personal Information</h3>
            <p>We may collect the following personal information when you use our service:</p>
            <ul>
              <li>
                <strong>Account Information:</strong> Name, email address, username, and password when you create an
                account
              </li>
              <li>
                <strong>Profile Information:</strong> Optional profile details such as company name, job title, and
                profile picture
              </li>
              <li>
                <strong>Contact Information:</strong> Email address and phone number for customer support
              </li>
              <li>
                <strong>Payment Information:</strong> Billing address and payment method details (processed securely by
                third-party payment processors)
              </li>
            </ul>

            <h3>Usage Information</h3>
            <p>We automatically collect information about how you use our service:</p>
            <ul>
              <li>
                <strong>Link Data:</strong> Original URLs, shortened URLs, custom aliases, and link metadata
              </li>
              <li>
                <strong>Click Analytics:</strong> Click timestamps, geographic location, device information, and
                referrer data
              </li>
              <li>
                <strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers
              </li>
              <li>
                <strong>Log Data:</strong> Server logs, error reports, and performance metrics
              </li>
            </ul>

            <h3>Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar technologies to enhance your experience. For detailed information, please see
              our{" "}
              <Link href="/cookies" className="text-primary hover:underline">
                Cookie Policy
              </Link>
              .
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>

            <h3>Service Provision</h3>
            <ul>
              <li>Create and manage your account</li>
              <li>Process and fulfill your requests</li>
              <li>Provide customer support</li>
              <li>Process payments and billing</li>
            </ul>

            <h3>Service Improvement</h3>
            <ul>
              <li>Analyze usage patterns and trends</li>
              <li>Improve our service performance and features</li>
              <li>Develop new products and services</li>
              <li>Conduct research and analytics</li>
            </ul>

            <h3>Communication</h3>
            <ul>
              <li>Send service-related notifications</li>
              <li>Provide customer support</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Respond to your inquiries</li>
            </ul>

            <h3>Legal and Security</h3>
            <ul>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and abuse</li>
              <li>Enforce our terms of service</li>
              <li>Maintain service security</li>
            </ul>

            <h2>4. Information Sharing and Disclosure</h2>
            <p>
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>

            <h3>Service Providers</h3>
            <p>We may share information with trusted third-party service providers who assist us in:</p>
            <ul>
              <li>Payment processing (Stripe, PayPal)</li>
              <li>Analytics and monitoring (Google Analytics)</li>
              <li>Customer support (Intercom, Zendesk)</li>
              <li>Email services (SendGrid, Mailchimp)</li>
              <li>Cloud hosting and infrastructure (AWS, Google Cloud)</li>
            </ul>

            <h3>Legal Requirements</h3>
            <p>We may disclose your information when required by law or to:</p>
            <ul>
              <li>Comply with legal processes or government requests</li>
              <li>Protect our rights, property, or safety</li>
              <li>Protect the rights, property, or safety of our users</li>
              <li>Investigate potential violations of our terms</li>
            </ul>

            <h3>Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of
              that transaction.
            </p>

            <h3>Aggregated Data</h3>
            <p>
              We may share aggregated, anonymized data that cannot be used to identify you for research, marketing, or
              other business purposes.
            </p>

            <h2>5. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your information:</p>
            <ul>
              <li>
                <strong>Encryption:</strong> Data is encrypted in transit and at rest using industry-standard protocols
              </li>
              <li>
                <strong>Access Controls:</strong> Strict access controls and authentication requirements
              </li>
              <li>
                <strong>Regular Audits:</strong> Security assessments and penetration testing
              </li>
              <li>
                <strong>Employee Training:</strong> Regular security training for all employees
              </li>
              <li>
                <strong>Compliance:</strong> SOC 2 Type II certification and GDPR compliance
              </li>
            </ul>

            <h2>6. Data Retention</h2>
            <p>We retain your information for as long as necessary to:</p>
            <ul>
              <li>Provide our services to you</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Improve our services</li>
            </ul>

            <div className="bg-muted/30 p-4 rounded-lg mb-4">
              <p className="mb-2">
                <strong>Retention Periods:</strong>
              </p>
              <ul className="mb-0">
                <li>Account data: Retained while your account is active</li>
                <li>Link data: Retained indefinitely unless deleted by user</li>
                <li>Analytics data: Retained for up to 7 years</li>
                <li>Log data: Retained for up to 2 years</li>
              </ul>
            </div>

            <h2>7. Your Rights and Choices</h2>
            <p>Depending on your location, you may have the following rights:</p>

            <h3>Access and Portability</h3>
            <ul>
              <li>Request access to your personal information</li>
              <li>Receive a copy of your data in a portable format</li>
              <li>Request information about how we process your data</li>
            </ul>

            <h3>Correction and Updates</h3>
            <ul>
              <li>Update your account information</li>
              <li>Correct inaccurate personal information</li>
              <li>Complete incomplete personal information</li>
            </ul>

            <h3>Deletion</h3>
            <ul>
              <li>Delete your account and associated data</li>
              <li>Request deletion of specific information</li>
              <li>Withdraw consent for data processing</li>
            </ul>

            <h3>Marketing Communications</h3>
            <ul>
              <li>Opt out of marketing emails</li>
              <li>Manage communication preferences</li>
              <li>Unsubscribe from newsletters</li>
            </ul>

            <h2>8. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure
              appropriate safeguards are in place, including:
            </p>
            <ul>
              <li>Standard Contractual Clauses (SCCs)</li>
              <li>Adequacy decisions by relevant authorities</li>
              <li>Certification schemes and codes of conduct</li>
            </ul>

            <h2>9. Children's Privacy</h2>
            <p>
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal
              information from children under 13. If we become aware that we have collected such information, we will
              take steps to delete it promptly.
            </p>

            <h2>10. Regional Privacy Rights</h2>

            <h3>European Union (GDPR)</h3>
            <p>If you are in the EU, you have additional rights under the General Data Protection Regulation:</p>
            <ul>
              <li>Right to object to processing</li>
              <li>Right to restrict processing</li>
              <li>Right to lodge a complaint with supervisory authorities</li>
              <li>Right to withdraw consent</li>
            </ul>

            <h3>California (CCPA)</h3>
            <p>If you are a California resident, you have rights under the California Consumer Privacy Act:</p>
            <ul>
              <li>Right to know what personal information is collected</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to non-discrimination</li>
            </ul>

            <h2>11. Third-Party Links</h2>
            <p>
              Our service may contain links to third-party websites. We are not responsible for the privacy practices of
              these external sites. We encourage you to review their privacy policies before providing any personal
              information.
            </p>

            <h2>12. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
            <ul>
              <li>Posting the updated policy on our website</li>
              <li>Sending email notifications to registered users</li>
              <li>Displaying a prominent notice on our service</li>
            </ul>
            <p>
              Your continued use of our service after changes become effective constitutes acceptance of the new policy.
            </p>

            <h2>13. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>

            <div className="bg-primary/5 p-4 rounded-lg mb-4">
              <p className="mb-2">
                <strong>Privacy Team:</strong>
              </p>
              <ul className="mb-0">
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
            </div>

            <h3>Data Protection Officer</h3>
            <p>For EU-related privacy matters, you can contact our Data Protection Officer at:</p>
            <ul>
              <li>
                <strong>Email:</strong> dpo@shortlyurl.com
              </li>
            </ul>

            <div className="mt-8 p-4 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Privacy Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p>
                    <strong>Data Collection:</strong> Account info, usage data, analytics
                  </p>
                  <p>
                    <strong>Data Use:</strong> Service provision, improvement, communication
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Data Sharing:</strong> Service providers, legal requirements only
                  </p>
                  <p>
                    <strong>Your Rights:</strong> Access, correction, deletion, portability
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-success/10 rounded-lg">
              <p className="text-sm text-success-foreground mb-0">
                <strong>Our Commitment:</strong> We are committed to protecting your privacy and being transparent about
                our data practices. We regularly review and update our privacy measures to ensure your information
                remains secure.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="btn-primary mr-4">
              Back to Home
            </Link>
            <Link href="/cookies" className="btn-secondary mr-4">
              Cookie Policy
            </Link>
            <Link href="/terms" className="btn-secondary mr-4">
              Terms of Service
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
