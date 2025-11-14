export default function ExpertiseHighlights() {
  const highlights = [
    {
      icon: '📈',
      title: 'Product-Led Growth',
      description: 'Driving user acquisition by connecting growth levers like onboarding funnels, activation triggers, and product improvements that naturally attract and retain users.',
    },
    {
      icon: '💼',
      title: 'B2B SaaS & Frontend',
      description: 'Building robust frontend architectures, have extensive experience in the technical and product challenges of delivering high-quality B2B SaaS software.',
    },
    {
      icon: '🔬',
      title: 'Experimentation & Data',
      description: 'Utilizing A/B testing and feature experiments to make data-informed decisions. Comfortable with setting up experiments, analyzing key metrics, and optimizing user experience.',
    },
    {
      icon: '🎯',
      title: 'Engineering Leadership',
      description: 'Building effective engineering teams, fostering technical excellence, and aligning technical initiatives with product and company strategy.',
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">Expertise Highlights</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="bg-card p-8 rounded-2xl hover:shadow-lg transition-shadow border border-gray-200"
          >
            <div className="text-4xl mb-4">{highlight.icon}</div>
            <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
            <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
