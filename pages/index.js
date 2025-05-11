import Head from 'next/head';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';
import { BarChart3, Link, Zap, Shield, LineChart, PieChart } from 'lucide-react';

export default function Home(props) {
    const features = props.features.map(feature => ({
    ...feature,
    icon: getIconComponent(feature.iconName)
  }));
  return (
    <>
      <Head>
        <title>ShortlyURL - Professional URL Shortener</title>
        <meta name="description" content="Shorten, share, and track your links with ease using ShortlyURL, the professional URL shortening service." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Hero />
      <Stats stats={props.stats}/>
      <Features features={features}/>
      <Testimonials testimonials={props.testimonials}/>
      <CTA />
    </>
  );
}

function getIconComponent(iconName) {
  switch(iconName) {
    case 'Link': 
      return <Link size={24} className="text-primary" />;
    case 'BarChart3':
      return <BarChart3 size={24} className="text-primary" />;
    case 'Zap':
      return <Zap size={24} className="text-primary" />;
    case 'Shield':
      return <Shield size={24} className="text-primary" />;
    case 'LineChart':
      return <LineChart size={24} className="text-primary" />;
    case 'PieChart':
      return <PieChart size={24} className="text-primary" />;
    default:
      return null;
  }
}

export async function getStaticProps() {
  const stats = [
    { value: '1.2B+', label: 'Links Shortened' },
    { value: '190+', label: 'Countries & Territories' },
    { value: '99.9%', label: 'Uptime Reliability' },
    { value: '15M+', label: 'Active Users' },
  ];
  
  const features = [
    {
      iconName: 'Link', // Use string names instead of JSX elements
      title: 'Custom Short Links',
      description: 'Create branded links with custom domains that increase click-through rates and brand recognition.'
    },
    {
      iconName: 'BarChart3',
      title: 'Detailed Analytics',
      description: 'Access comprehensive click data including location, devices, referrers, and timing information.'
    },
    {
      iconName: 'Zap',
      title: 'Fast Redirects',
      description: 'Our global CDN ensures lightning-fast redirects for an optimal user experience worldwide.'
    },
    {
      iconName: 'Shield',
      title: 'Secure Links',
      description: 'All links are screened for malware and phishing attempts to protect your brand and users.'
    },
    {
      iconName: 'LineChart',
      title: 'Traffic Insights',
      description: 'Gain valuable insights into your audience with detailed traffic source analysis.'
    },
    {
      iconName: 'PieChart',
      title: 'Engagement Tracking',
      description: 'Track user engagement metrics to optimize your marketing campaigns effectively.'
    }
  ];
  
  const testimonials = [
    {
      quote: "ShortlyURL has transformed our marketing campaigns. The analytics are comprehensive and the custom branding options are exactly what we needed.",
      author: "Sarah Johnson",
      title: "Marketing Director, TechCorp",
      avatar: "https://randomuser.me/api/portraits/women/17.jpg"
    },
    {
      quote: "We've increased our click-through rates by 30% since switching to ShortlyURL. The dashboard is intuitive and the insights are invaluable.",
      author: "Mark Williams",
      title: "Digital Strategist, GrowthFirm",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The reliability and speed of ShortlyURL's service is unmatched. Our social media team can't imagine working without it now.",
      author: "Jessica Chen",
      title: "Social Media Manager, BrandX",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  return {
    props: {
      testimonials,
      stats,
      features
    }
  }
}