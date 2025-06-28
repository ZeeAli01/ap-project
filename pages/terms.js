import Footer from "@/components/layout/Footer";
import Head from "next/head";
import Link from "next/link";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - ShortlyURL</title>
        <meta
          name="description"
          content="Terms of Service for ShortlyURL. Read our terms and conditions for using our link shortening service."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: December 28, 2024</p>
          </div>

          <div className="card prose prose-gray max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using ShortlyURL ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              ShortlyURL is a URL shortening service that allows users to create shortened versions of long URLs. The service also provides analytics and link management features for registered users.
            </p>

            <h2>3. User Accounts</h2>
            <p>To access certain features of the Service, you may be required to create an account. You are responsible for:</p>
            <ul>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and complete information</li>
              <li>Promptly updating your account information</li>
            </ul>

            <h2>4. Acceptable Use</h2>
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Distribute malware, viruses, or harmful code</li>
              <li>Engage in spamming or unsolicited communications</li>
              <li>Create links to illegal, harmful, or offensive content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the service for commercial purposes without proper authorization</li>
            </ul>

            <h2>5. Content and Links</h2>
            <p>You are solely responsible for the content of the URLs you shorten and the destinations they lead to. ShortlyURL does not:</p>
            <ul>
              <li>Monitor or review all user-generated content</li>
              <li>Endorse or approve any third-party content</li>
              <li>Guarantee the accuracy or safety of linked content</li>
            </ul>

            <h2>6. Privacy and Data</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
            </p>

            <h2>7. Service Availability</h2>
            <p>We strive to maintain high availability but do not guarantee uninterrupted service. We reserve the right to:</p>
            <ul>
              <li>Modify or discontinue the service at any time</li>
              <li>Perform maintenance that may temporarily affect service</li>
              <li>Suspend accounts that violate these terms</li>
            </ul>

            <h2>8. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are owned by ShortlyURL and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              In no event shall ShortlyURL, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless ShortlyURL from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the Service or violation of these Terms.
            </p>

            <h2>11. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be interpreted and governed by the laws of the State of California, without regard to its conflict of law provisions.
            </p>

            <h2>13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through the Service. Continued use of the Service after changes constitutes acceptance of the new terms.
            </p>

            <h2>14. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
            <ul>
              <li>Email: legal@shortlyurl.com</li>
              <li>Address: 123 Tech Street, San Francisco, CA 94105</li>
            </ul>

            <div className="mt-8 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground mb-0">
                <strong>Note:</strong> These terms are effective as of the date listed above. By using ShortlyURL, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="btn-primary mr-4">
              Back to Home
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
