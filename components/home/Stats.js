export default function Stats() {
  const stats = [
    { value: '1.2B+', label: 'Links Shortened' },
    { value: '190+', label: 'Countries & Territories' },
    { value: '99.9%', label: 'Uptime Reliability' },
    { value: '15M+', label: 'Active Users' },
  ];
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}