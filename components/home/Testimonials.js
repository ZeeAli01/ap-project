export default function Testimonials() {
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
  
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Users Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="mb-6">
                <svg width="45" height="36" className="text-primary/30" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 18H9C9.75 12 12.75 9 18.75 9V13.5C15.75 13.5 13.5 15 13.5 18ZM27 18H22.5C23.25 12 26.25 9 32.25 9V13.5C29.25 13.5 27 15 27 18ZM13.5 31.5V18H22.5V31.5H13.5ZM27 31.5V18H36V31.5H27Z" fill="currentColor"/>
                </svg>
              </div>
              
              <p className="mb-6 text-foreground">{testimonial.quote}</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
                </div>
                
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}