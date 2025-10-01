export default function Hero() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Prudhvi Marpina</h1>
            <p className="mt-3 text-lg text-neutral-600">Data Scientist · Design-focused Portfolio</p>
          </div>
          <div className="flex gap-3">
            <a
              href="/Prudhvi_Marpina_Data_Scientist_Resume.pdf"
              className="inline-flex items-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow-md"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


