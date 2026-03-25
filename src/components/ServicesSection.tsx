import AnimatedSection from "./AnimatedSection";

const services = [
  {
    num: "01",
    title: "Full-Stack Development",
    desc: "From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.",
    tags: ["React, Node.js, Express.js", "REST APIs, MongoDB, PostgreSQL", "Git, GitHub"],
  },
  {
    num: "02",
    title: "UI/UX & Frontend",
    desc: "Good design feels effortless. I design and develop responsive, intuitive interfaces that work smoothly across devices, with a strong focus on clarity, accessibility, and performance.",
    tags: ["React, TailwindCSS, GSAP", "Figma → Pixel-perfect code", "TypeScript, Framer Motion"],
  },
  {
    num: "03",
    title: "Backend & Optimization",
    desc: "I focus on building systems that stay reliable as things scale. Clean architecture, efficient data handling, and core CS principles keep applications fast, stable, and future-ready.",
    tags: ["Data Structures & Algorithms", "OOP, System Design", "Scalable APIs & Performance Optimizaiton"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding py-24 md:py-32">
      <AnimatedSection>
        <div className="flex items-baseline gap-4 mb-4">
          <h2 className="heading-lg text-foreground">What I Do</h2>
          <span className="text-foreground/30 font-display text-2xl">/</span>
        </div>
        <span className="label-tag">(Services)</span>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <p className="text-muted-foreground text-lg max-w-2xl mt-6 mb-16 leading-relaxed">
          I specialize in building fast, reliable, and user-friendly full-stack web applications. I help startups and businesses turn ideas into high-quality products that actually work and scale.
        </p>
      </AnimatedSection>

      <div className="space-y-6">
        {services.map((service, i) => (
          <AnimatedSection key={service.num} delay={0.1 * i}>
            <div className="card-surface p-8 md:p-10 group transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <span className="label-tag text-accent shrink-0">({service.num})</span>
                <div className="flex-1">
                  <h3 className="heading-md mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {service.tags.map((tag, j) => (
                      <span key={j} className="text-sm text-foreground/60">
                        <span className="text-accent mr-1.5 tabular-nums font-medium">0{j + 1}</span>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
