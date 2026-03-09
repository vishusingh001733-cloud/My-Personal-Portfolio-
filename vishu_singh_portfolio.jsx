export default function VishuSinghPortfolio() {
  const services = [
    {
      title: "Business Websites",
      desc: "Modern websites for local businesses, startups, and personal brands that need a premium online presence.",
      tag: "Fast & Professional",
    },
    {
      title: "Portfolio Design",
      desc: "Elegant portfolio websites for photographers, creators, freelancers, and agencies that want to stand out.",
      tag: "Creative & Clean",
    },
    {
      title: "Logo & Brand Style",
      desc: "Simple but attractive brand presentation with premium color combinations, layout direction, and visual identity.",
      tag: "Memorable Identity",
    },
  ];

  const projects = [
    {
      title: "Photographer Portfolio",
      category: "Creative Portfolio",
      desc: "A stylish showcase website with gallery sections, booking call-to-actions, and elegant dark visuals.",
    },
    {
      title: "Personal Brand Website",
      category: "Freelancer Site",
      desc: "A polished website built to attract clients with trust-building sections, service cards, and testimonials.",
    },
    {
      title: "Small Business Landing Page",
      category: "Business Website",
      desc: "A conversion-focused landing page designed to help businesses get more calls, leads, and customers.",
    },
  ];

  const skills = [
    "Responsive Web Design",
    "Portfolio Websites",
    "Landing Pages",
    "Premium UI Design",
    "Brand-Focused Layouts",
    "Frontend Development",
  ];

  const stats = [
    { number: "Premium", label: "Design Quality" },
    { number: "Fast", label: "Delivery Style" },
    { number: "Modern", label: "Website Experience" },
  ];

  return (
    <div className="min-h-screen bg-[#07111f] text-white overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.25),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.18),_transparent_22%),radial-gradient(circle_at_center,_rgba(236,72,153,0.12),_transparent_30%)]" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute top-32 right-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute top-[520px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-indigo-400 to-fuchsia-500 shadow-[0_10px_30px_rgba(99,102,241,0.45)]">
              <span className="text-lg font-black text-slate-950">VS</span>
            </div>
            <div>
              <p className="text-lg font-semibold tracking-wide">Vishu Singh</p>
              <p className="text-sm text-slate-300">Web Developer • Freelancer</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-200 backdrop-blur md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </header>

        <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-8 lg:grid-cols-2 lg:px-10 lg:pb-28 lg:pt-12">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Available for freelance web projects
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              I build <span className="bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent">premium websites</span> that make people stop and look.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Hi, I’m <span className="font-semibold text-white">Vishu Singh</span> — a web developer creating attractive, modern, and high-converting websites for businesses, creators, and freelancers. I focus on elegant design, smart layout, and a premium visual style that helps your brand stand out.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-gradient-to-r from-cyan-300 via-indigo-400 to-fuchsia-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_10px_35px_rgba(56,189,248,0.35)] transition hover:scale-[1.02]"
              >
                Start Your Project
              </a>
              <a
                href="#projects"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                View My Work
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-2xl font-black text-white">{item.number}</p>
                  <p className="mt-1 text-sm text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-r from-cyan-400/20 to-fuchsia-500/20 blur-3xl" />

            <div className="relative w-full max-w-xl">
              <div className="absolute -left-10 top-8 hidden h-24 w-24 rounded-3xl border border-white/10 bg-white/10 backdrop-blur lg:block" />
              <div className="absolute -right-4 top-0 h-20 w-20 rounded-full bg-gradient-to-br from-cyan-300 to-indigo-500 opacity-90 shadow-2xl" />
              <div className="absolute bottom-8 -left-2 h-16 w-16 rounded-2xl bg-gradient-to-br from-fuchsia-400 to-orange-300 opacity-90 shadow-2xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/8 p-4 shadow-[0_25px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                <div className="rounded-[1.6rem] border border-white/10 bg-[#0b1728] p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-sm text-cyan-200">Featured Developer</p>
                      <h2 className="mt-1 text-2xl font-bold">Vishu Singh</h2>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-cyan-300 via-indigo-400 to-fuchsia-500 px-4 py-2 text-xs font-bold text-slate-950">
                      PREMIUM UI
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl bg-gradient-to-br from-cyan-300/15 to-indigo-400/15 p-5">
                      <p className="text-sm text-slate-300">Main Focus</p>
                      <p className="mt-2 text-lg font-bold">Modern Web Design</p>
                    </div>
                    <div className="rounded-3xl bg-gradient-to-br from-fuchsia-400/15 to-orange-300/15 p-5">
                      <p className="text-sm text-slate-300">Client Goal</p>
                      <p className="mt-2 text-lg font-bold">Attract More Customers</p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(168,85,247,0.14),rgba(251,146,60,0.12))] p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-sm text-slate-200">Signature Style</p>
                        <p className="mt-2 text-3xl font-black">3D Premium Feel</p>
                      </div>
                      <div className="relative h-20 w-20">
                        <div className="absolute inset-0 rounded-[1.4rem] bg-white/10 rotate-6" />
                        <div className="absolute inset-0 rounded-[1.4rem] bg-gradient-to-br from-cyan-300 to-fuchsia-400 -rotate-6" />
                        <div className="absolute inset-2 rounded-[1rem] bg-[#08111d]" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-white/5 p-4 text-center">
                      <p className="text-lg font-bold">UI</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4 text-center">
                      <p className="text-lg font-bold">UX</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4 text-center">
                      <p className="text-lg font-bold">Brand</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Services</p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">What I can build for you</h2>
          <p className="mt-4 text-slate-300">
            I create websites that are attractive, smooth, mobile-friendly, and built to leave a strong first impression on your customers.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/8"
            >
              <div className="inline-flex rounded-full bg-gradient-to-r from-cyan-300/15 to-fuchsia-400/15 px-4 py-2 text-xs font-semibold text-cyan-200">
                {service.tag}
              </div>
              <h3 className="mt-5 text-2xl font-bold">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-300">Portfolio</p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">Selected project styles</h2>
          </div>
          <p className="max-w-xl text-slate-300">
            I can design different types of websites, including photographer portfolios, freelancer pages, and premium business sites.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={project.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d182a] shadow-2xl">
              <div className={`h-56 w-full ${index === 0 ? "bg-[linear-gradient(135deg,rgba(34,211,238,0.9),rgba(168,85,247,0.8),rgba(251,146,60,0.7))]" : index === 1 ? "bg-[linear-gradient(135deg,rgba(96,165,250,0.9),rgba(45,212,191,0.7),rgba(99,102,241,0.8))]" : "bg-[linear-gradient(135deg,rgba(244,114,182,0.9),rgba(99,102,241,0.8),rgba(34,211,238,0.7))]"} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-32 w-52 rounded-[1.8rem] border border-white/20 bg-slate-950/25 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                    <div className="absolute left-4 right-4 top-4 h-4 rounded-full bg-white/25" />
                    <div className="absolute left-4 top-12 h-16 w-16 rounded-2xl bg-white/20" />
                    <div className="absolute right-4 top-12 h-5 w-20 rounded-full bg-white/20" />
                    <div className="absolute right-4 top-20 h-5 w-16 rounded-full bg-white/15" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-cyan-200">{project.category}</p>
                <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">About Me</p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">A developer focused on attractive websites</h2>
            <p className="mt-5 max-w-3xl leading-8 text-slate-300">
              I am Vishu Singh, a web developer who creates modern websites with strong visuals and premium layouts. I enjoy making websites that look professional, feel smooth, and help people trust a brand quickly. I can build portfolio websites, business pages, landing pages, and stylish online showcases that leave a lasting impression.
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              I have worked on portfolio-style ideas such as photographer websites and other creative presentations. My goal is to build websites that not only look beautiful but also attract customers and increase confidence in your business.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-300">Core Skills</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-[1.7rem] bg-[#08111d] p-6">
              <p className="text-sm text-slate-400">Why clients choose me</p>
              <ul className="mt-4 space-y-3 text-slate-200">
                <li>• Premium design style with strong first impression</li>
                <li>• Clean sections that help visitors understand your brand</li>
                <li>• Modern layout with mobile-friendly structure</li>
                <li>• Freelancer-focused website presentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 lg:px-10">
        <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(168,85,247,0.12),rgba(251,146,60,0.12))] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Client Promise</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black sm:text-4xl">
            A website that feels premium, trustworthy, and visually unforgettable.
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-300">
            Your website should not look ordinary. It should attract attention, build confidence, and help turn visitors into customers.
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur lg:grid-cols-[1fr_0.8fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-300">Contact</p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">Let’s build your next website</h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              Need a premium website for your brand, business, or portfolio? Let’s create something stylish, modern, and client-winning.
            </p>
          </div>

          <div className="rounded-[1.8rem] bg-[#091220] p-6">
            <p className="text-lg font-bold text-white">Vishu Singh</p>
            <p className="mt-2 text-slate-300">Web Developer & Freelance Website Designer</p>
            <div className="mt-6 space-y-3 text-slate-200">
              <p>• Available for portfolio websites</p>
              <p>• Available for business landing pages</p>
              <p>• Available for premium redesign projects</p>
              <p>• Phone: 07493 602551</p>
              <p>• WhatsApp: 07493 602551</p>
              <p>• Email: vishusingh001733@gmail.com</p>
            </div>
            <a
              href="mailto:vishusingh001733@gmail.com"
              className="mt-8 inline-block rounded-2xl bg-gradient-to-r from-cyan-300 via-indigo-400 to-fuchsia-500 px-6 py-3 text-sm font-bold text-slate-950"
            >
              Hire Me Now
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400 lg:px-10">
        © 2026 Vishu Singh — Premium Web Developer Portfolio
      </footer>
    </div>
  );
}
