export default function About() {
  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
      <div className="card p-8 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <img src="/Profile.JPG" alt="Prudhvi Marpina" className="rounded-lg w-full max-w-xs mx-auto object-cover" />
          </div>
          <div className="md:col-span-2">
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              I build data systems that drive business decisions. 4+ years of experience delivering end-to-end solutions across Python, React, cloud platforms, and ML frameworks. I turn complex problems into scalable systems that serve thousands of users.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mt-4">
              Full-stack technical leader: from data pipelines processing millions of records to ML models in production, from React dashboards to cloud architecture on AWS/GCP/Azure. I speak both technical and business languages fluently.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mt-4">
              Proven results: 25% faster reporting, 30% fewer failures, 12% engagement boost, 95% system reliability. I deliver measurable impact across data science, software engineering, and product roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
