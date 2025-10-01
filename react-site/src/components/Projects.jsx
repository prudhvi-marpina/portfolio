const projects = [
  {
    title: 'Agentic BI Architecture',
    img: '/agentic-bi-architecture.png',
    desc: 'Concept architecture for agentic business intelligence workflows.'
  },
  {
    title: 'Fraud Detection',
    img: '/fraud.png',
    desc: 'Modeling and dashboards for fraud detection and monitoring.'
  },
  {
    title: 'Sentiment Dashboard',
    img: '/sentiment.png',
    desc: 'Text analytics with streamlined reporting and insights.'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900">View all</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm transition hover:shadow-md">
              <div className="aspect-[16/10] bg-neutral-100">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


