export default function Career() {
  const timeline = [
    {
      role: 'Continuous Evolution',
      company: 'Present',
      period: '',
      description: 'Always at the edge of new tech and constantly integrating expert-led product strategy and growth. I focus on leveraging modern tools and AI to build high-quality products and teams.',
    },
    {
      role: 'Transition to Engineering Management',
      company: 'Leadership Step',
      period: '',
      description: 'I transitioned to leading engineering teams, focusing on upskilling a culture of meaningful, technical excellence, and user-first/value collaboration in cross-functional settings.',
    },
    {
      role: 'Transition to Product-Focused Roles',
      company: 'Senior IC',
      period: '',
      description: 'I deepened my expertise in B2B SaaS and full-stack product development. Focused on AB testing, data analytics, and product-led features that led to this user growth.',
    },
    {
      role: 'Early Years as Fullstack Developer',
      company: 'Junior to Mid-level',
      period: '',
      description: 'Began my career building web and mobile applications and rapidly explored new JavaScript, React, Node.js, and technologies like React Native and GraphQL.',
    },
  ];

  return (
    <section id="career" className="container mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">Career Journey</h2>
      <div className="space-y-8 max-w-3xl">
        {timeline.map((item, index) => (
          <div key={index} className="flex gap-6">
            {/* Timeline Dot */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-primary rounded-full mt-1"></div>
              {index < timeline.length - 1 && (
                <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <h3 className="text-2xl font-bold mb-1">{item.role}</h3>
              <div className="text-sm text-gray-500 mb-2">{item.company}</div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
