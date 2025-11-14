export default function Skills() {
  const technicalStack = [
    {
      name: "TypeScript",
      icon: "<>",
    },
    {
      name: "JavaScript",
      icon: "JS",
    },
    {
      name: "React",
      icon: "⚛️",
    },
    {
      name: "Node.js",
      icon: "🟢",
    },
    {
      name: "React Native",
      icon: "📱",
    },
    {
      name: "Next.js",
      icon: "▲",
    },
  ];

  const productGrowth = [
    "Product-Led Growth (PLG)",
    "Growth Hacking",
    "A/B Testing & Experimentation",
    "Data-Driven Decision Making",
  ];

  const domainLeadership = [
    {
      title: "B2B SaaS Platforms",
      icon: "🏢",
      description:
        "Deep experience in building and scaling business-to-business SaaS products from concept to scale.",
    },
    {
      title: "Engineering Management",
      icon: "👥",
      description:
        "Building high-performing teams, managing technical priorities, and developing technical talent.",
    },
    {
      title: "Scaling Frontend Systems",
      icon: "⚡",
      description: "Building modern, high-quality UIs (not just) for growth.",
    },
    {
      title: "Cross-functional Collaboration",
      icon: "🤝",
      description:
        "Working with product, design, and data teams to ship features that drive results.",
    },
  ];

  return (
    <section id="skills" className="container mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        Core Expertise & Skills
      </h2>

      {/* Technical Stack */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Technical Stack</h3>
        <div className="flex flex-wrap gap-3">
          {technicalStack.map((tech, index) => (
            <span
              key={index}
              className="px-5 py-3 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <span className="text-cyan-600 font-bold">{tech.icon}</span>
              <span>{tech.name}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Product & Growth */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Product & Growth</h3>
        <div className="flex flex-wrap gap-3">
          {productGrowth.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Domain & Leadership */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Domain & Leadership</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {domainLeadership.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
