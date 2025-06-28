import Head from 'next/head';
import Link from 'next/link';
import { Check, X } from 'lucide-react';
import Footer from '@/components/layout/Footer';

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for personal use and small projects",
      features: [
        "1,000 links per month",
        "Basic analytics",
        "Standard support",
        "ShortlyURL branding",
        "7-day link history"
      ],
      limitations: [
        "No custom domains",
        "No team features",
        "Limited analytics"
      ],
      cta: "Get Started",
      href: "/signup",
      popular: false
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      description: "Ideal for professionals and growing businesses",
      features: [
        "25,000 links per month",
        "Advanced analytics",
        "Custom domains",
        "Priority support",
        "Remove branding",
        "90-day link history",
        "Password protection",
        "Link expiration"
      ],
      limitations: [
        "Limited team members"
      ],
      cta: "Start Free Trial",
      href: "/signup?plan=pro",
      popular: true
    },
    {
      name: "Business",
      price: "$29",
      period: "per month",
      description: "Perfect for teams and marketing campaigns",
      features: [
        "100,000 links per month",
        "Team collaboration",
        "Advanced targeting",
        "A/B testing",
        "Custom branded domains",
        "Unlimited link history",
        "API access",
        "Conversion tracking",
        "White-label options"
      ],
      limitations: [],
      cta: "Start Free Trial",
      href: "/signup?plan=business",
      popular: false
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited links",
        "Dedicated account manager",
        "Custom integrations",
        "SSO & SAML",
        "Advanced security",
        "SLA guarantee",
        "Custom analytics",
        "On-premise deployment",
        "24/7 phone support"
      ],
      limitations: [],
      cta: "Contact Sales",
      href: "/contact",
      popular: false
    }
  ];

  return (
    <>
      <Head>
        <title>Pricing - ShortlyURL</title>
        <meta name="description" content="Choose the perfect plan for your link management needs. Start free and scale as you grow." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the plan that fits your needs. Start free and upgrade as you grow.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`card relative ${plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''} hover:shadow-hover transition-all duration-400`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check size={16} className="text-success mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <div key={limitationIndex} className="flex items-center">
                      <X size={16} className="text-muted-foreground mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href={plan.href} 
                  className={`w-full text-center py-3 px-4 rounded-md font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-primary text-white hover:bg-primary/90' 
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-lg font-bold mb-2">Can I change plans anytime?</h3>
                <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges.</p>
              </div>
              <div className="card">
                <h3 className="text-lg font-bold mb-2">Is there a free trial?</h3>
                <p className="text-muted-foreground">Yes, all paid plans come with a 14-day free trial. No credit card required to start.</p>
              </div>
              <div className="card">
                <h3 className="text-lg font-bold mb-2">What happens if I exceed my link limit?</h3>
                <p className="text-muted-foreground">We'll notify you when you're approaching your limit. You can upgrade your plan or purchase additional links as needed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
