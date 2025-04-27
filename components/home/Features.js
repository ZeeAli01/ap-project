import { BarChart3, Link, Zap, Shield, LineChart, PieChart } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Link size={24} className="text-primary" />,
      title: 'Custom Short Links',
      description: 'Create branded links with custom domains that increase click-through rates and brand recognition.'
    },
    {
      icon: <BarChart3 size={24} className="text-primary" />,
      title: 'Detailed Analytics',
      description: 'Access comprehensive click data including location, devices, referrers, and timing information.'
    },
    {
      icon: <Zap size={24} className="text-primary" />,
      title: 'Fast Redirects',
      description: 'Our global CDN ensures lightning-fast redirects for an optimal user experience worldwide.'
    },
    {
      icon: <Shield size={24} className="text-primary" />,
      title: 'Secure Links',
      description: 'All links are screened for malware and phishing attempts to protect your brand and users.'
    },
    {
      icon: <LineChart size={24} className="text-primary" />,
      title: 'Traffic Insights',
      description: 'Gain valuable insights into your audience with detailed traffic source analysis.'
    },
    {
      icon: <PieChart size={24} className="text-primary" />,
      title: 'Engagement Tracking',
      description: 'Track user engagement metrics to optimize your marketing campaigns effectively.'
    }
  ];
  
  return (
    <section className="py-16 bg-secondary/30 dark:bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to manage, track, and optimize your links in one place
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card hover:shadow-hover transition-all duration-400 hover:-translate-y-1"
            >
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}