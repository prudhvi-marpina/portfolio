const roles = [
  {
    company: 'Ahlada Engineers Ltd',
    location: 'Hyderabad, India',
    period: 'Jun 2019 – May 2021',
    title: 'Data Analyst',
    bullets: [
      'Optimized ERP data extraction with Python + SQL, reduced reporting time by 30%.',
      'Automated receivables and delivery tracking via scheduled scripts (−40% manual).',
      'Designed Tableau dashboards for plant output and order fulfillment KPIs.'
    ]
  },
  {
    company: 'The University of Texas at Dallas',
    location: 'Dallas, USA',
    period: 'Aug 2022 – May 2024',
    title: 'Graduate Teaching Assistant',
    bullets: [
      'Supported data science coursework; labs, grading, and student mentoring.',
      'Built example notebooks and data exercises to simplify complex topics.'
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-2xl font-semibold">Experience</h2>
        <div className="grid gap-6">
          {roles.map((r) => (
            <article key={r.company + r.period} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <span className="text-xs rounded-full bg-neutral-900 px-2 py-1 text-white">{r.period}</span>
              </div>
              <p className="mt-1 text-sm text-neutral-600">{r.company} · {r.location}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                {r.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


