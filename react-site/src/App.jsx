export default function App() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Prudhvi Marpina</h1>
          <p className="mt-3 text-lg text-neutral-600">Data Scientist • Designer-first Portfolio (React)</p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <h2 className="text-xl font-semibold">Project One</h2>
            <p className="mt-2 text-sm text-neutral-600">Clean card with Tailwind utilities as a base visual system.</p>
          </article>
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <h2 className="text-xl font-semibold">Project Two</h2>
            <p className="mt-2 text-sm text-neutral-600">Replace with your projects, metrics, and images later.</p>
          </article>
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <h2 className="text-xl font-semibold">Experience</h2>
            <p className="mt-2 text-sm text-neutral-600">We will port Ahlada, UT Dallas, and other sections here.</p>
          </article>
        </section>

        <footer className="mt-20 border-t border-neutral-200 pt-8 text-sm text-neutral-600">
          © {new Date().getFullYear()} Prudhvi Marpina
        </footer>
      </div>
    </main>
  )
}
