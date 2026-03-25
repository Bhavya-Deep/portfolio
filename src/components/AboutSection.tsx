import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import heroImg from "@/assets/hero-portrait.webp";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <AnimatedSection>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden aspect-[4/5] bg-secondary"
          >
            <img
              src={heroImg}
              alt="About me"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </AnimatedSection>

        <div>
          <AnimatedSection delay={0.1}>
            <span className="label-tag mb-4 block">(About Me)</span>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-display font-600 mb-6">
              I'm a software engineer driven by a passion for turning ideas into clean, intuitive digital experiences.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a full-stack developer who builds fast, modern web applications mostly with the MERN stack and TypeScript because they just work. I work with businesses and startups to turn ideas into reliable, user-friendly products built to scale.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-muted-foreground leading-relaxed">
              I've been building websites long enough to have strong opinions about things that don't matter to most people — like whether a transition should be 150ms or 200ms. (It's 150ms, btw). Build the thing, make it work, make it feel good. That's the gig.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
