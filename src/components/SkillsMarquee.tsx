import AnimatedSection from "./AnimatedSection";

const languages = ["TypeScript", "JavaScript", "C++", "HTML", "CSS"];
const frameworks = ["React", "Node.js", "Express.js", "TailwindCSS", "MongoDB", "PostgreSQL", "GSAP", "Framer Motion", "Redis"];
const concepts = ["DSA", "OOP", "System Design", "REST APIs", "Caching", "Rate Limiting"];

const MarqueeRow = ({ items, reverse = false, speed = "25s" }: { items: string[]; reverse?: boolean; speed?: string }) => {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-3">
      <div
        className="flex gap-4 w-max"
        style={{
          animation: `marquee ${speed} linear infinite${reverse ? " reverse" : ""}`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="px-5 py-2.5 rounded-full border border-border bg-card text-sm font-medium text-foreground/80 whitespace-nowrap hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-200 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsMarquee = () => {
  return (
    <section id="skills" className="py-24 md:py-32 overflow-hidden">
      <div className="section-padding mb-12">
        <AnimatedSection>
          <div className="flex items-center gap-6 mb-2">
            <h2 className="heading-lg text-foreground">Developer</h2>
            <span className="heading-lg text-accent">&bull;</span>
            <h2 className="heading-lg text-foreground">Designer</h2>
            <span className="heading-lg text-accent">&bull;</span>
            <h2 className="heading-lg text-foreground">Creator</h2>
            <span className="text-foreground/30 font-display text-2xl">/</span>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <div className="section-padding mb-4">
          <span className="label-tag">Languages & Tools</span>
        </div>
        <MarqueeRow items={languages} speed="20s" />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="section-padding mb-4 mt-8">
          <span className="label-tag">Frameworks & Libraries</span>
        </div>
        <MarqueeRow items={frameworks} reverse speed="30s" />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="section-padding mb-4 mt-8">
          <span className="label-tag">Core CS Concepts</span>
        </div>
        <MarqueeRow items={concepts} speed="22s" />
      </AnimatedSection>
    </section>
  );
};

export default SkillsMarquee;
