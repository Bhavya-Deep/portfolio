import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "E-Commerce Platform",
    tech: "React • Node.js • MongoDB • Express • Stripe • JWT • Cloudinary",
    desc: "Full-stack e-commerce platform with real-time inventory, secure payment processing, and admin dashboard for product and order management.",
    year: "2026",
    url: "https://ecommerce-frontend-three-flax.vercel.app/",
  },
  {
    title: "Resume Builder (Under Work)",
    tech: "React • Node.js • MongoDB • Express • Oauth • Puppeteer",
    desc: "Interactive resume builder with live preview, dynamic templates, and PDF export for professional resume generation.",
    year: "2026",
    url: "",
  },
  {
    title: "Real Time Chat Application ",
    tech: "React • Node.js • MongoDB • Express • Socket.io • TailwindCss",
    desc: "Real-time chat application with one-to-one/group messaging, online presence tracking, and WebSocket-based communication.",
    year: "2025",
    url: "https://chat-app-six-xi-38.vercel.app/",
  },
  {
    title: "User Authentication System",
    tech: "React • Node.js • MongoDB • Express • JWT • Bcrypt",
    desc: "Secure authentication system with JWT-based access control, password encryption, and role-based authorization.",
    year: "2025",
    url: "https://mern-auth-amber-seven.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="works" className="section-padding py-24 md:py-32">
      <AnimatedSection>
        <div className="flex items-baseline gap-4 mb-4">
          <h2 className="heading-lg text-foreground">Selected Works</h2>
          <span className="text-foreground/30 font-display text-2xl">/</span>
        </div>
        <span className="label-tag">(Projects)</span>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <p className="text-muted-foreground text-lg max-w-2xl mt-6 mb-16 leading-relaxed">
          Thoughtfully crafted digital experiences that blend utility and aesthetics into something functional, memorable, and refined.
        </p>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <AnimatedSection key={project.title} delay={0.1 * i}>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="card-surface p-8 md:p-10 h-full flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="label-tag text-accent">{project.year}</span>
                    <motion.span
                      className="text-foreground/30 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-lg"
                    >
                      ↗
                    </motion.span>
                  </div>
                  <h3 className="heading-md mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{project.desc}</p>
                </div>
                <p className="text-sm text-foreground/50 font-medium">{project.tech}</p>
              </motion.div>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
