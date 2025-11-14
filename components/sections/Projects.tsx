import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of the project, the problem it solves, and the solution implemented.',
      tags: ['TypeScript', 'React', 'Next.js'],
      github: '#',
      demo: '#',
      bgColor: 'bg-rose-200',
    },
    {
      title: 'Project Two',
      description: 'A brief description of the project, the problem it solves, and the solution implemented.',
      tags: ['React Native', 'Firebase', 'Node.js'],
      github: '#',
      demo: '#',
      bgColor: 'bg-teal-200',
    },
  ];

  return (
    <section id="projects" className="container mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
            {/* Project Image Placeholder */}
            <div className={`${project.bgColor} h-64 flex items-center justify-center`}>
              <div className="bg-white/80 p-8 rounded-lg shadow-lg">
                <div className="text-6xl">📱</div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <Link
                  href={project.github}
                  className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
                >
                  GitHub
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
                <Link
                  href={project.demo}
                  className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
                >
                  Live Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
