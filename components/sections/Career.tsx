export default function Career() {
  const timeline = [
    {
      role: "Engineering Manager",
      company: "Pipedrive",
      period: "January 2025 - Present",
      description:
        "Managing a distributed team of 8 brilliant engineers, focused on Growth engineering and rapid experimentation. Working closely with product managers, designers, engineering managers and stakeholders, while striving to be an enabler for the engineering team.",
    },
    {
      role: "Lead Software Engineer",
      company: "Pipedrive",
      period: "January 2024 - January 2025",
      description:
        "Tech lead in a small team focused on rapid experimentation around new customer journey. Worked closely with product manager, designer, UX researcher and data analyst. The work involved the whole product lifecycle, from early discovery phase through proof of concepts to putting together teams for final delivery.",
    },
    {
      role: "Senior Full-stack Developer",
      company: "Pipedrive",
      period: "March 2022 - January 2024",
      description:
        "Part of multiple product teams (initially Leads, later Support Inbox and finally Email & Messaging) while being involved in several platform initiatives. Led several projects within the Missions & Tribes framework. Technologies: TypeScript, React, GraphQL (Relay), Tanstack Query, Nest.js, Fastify, MySQL, Kafka, CouchDB.",
    },
    {
      role: "Frontend Developer & Lecturer",
      company: "Česká televize, Software Development Academy, Showmax",
      period: "February 2019 - March 2022",
      description:
        "Built a brand new video-on-demand platform at Česká televize (Czech national broadcasting television) from the ground up, including custom video player and GraphQL server. Taught JavaScript fundamentals at Software Development Academy. Previously worked on Showmax's VOD platform. Technologies: TypeScript, React, GraphQL (Apollo).",
    },
    {
      role: "PHP/JS Developer & JS Team Leader",
      company: "RTsoft s.r.o.",
      period: "March 2015 - January 2019",
      description:
        "Started as a PHP backend developer and transitioned to JavaScript and frontend development. Led the JavaScript team from March 2018, focusing on JavaScript in both web and mobile applications.",
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
              <div className="text-sm text-gray-500 mb-1">{item.company}</div>
              <div className="text-sm text-gray-400 mb-3">{item.period}</div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
