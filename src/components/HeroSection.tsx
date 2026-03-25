import { motion } from "framer-motion";
import heroImg from "@/assets/hero-portrait.webp";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-end section-padding pb-12 pt-32 overflow-hidden">
      {/* Large name */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="heading-xl text-foreground/[0.06] whitespace-nowrap"
          style={{ fontSize: "clamp(4rem, 15vw, 14rem)" }}
        >
          FULL STACK
        </motion.h1>
      </div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-[8%] bottom-0 w-[280px] md:w-[360px] lg:w-[420px]"
      >
        <img
          src={heroImg}
          alt="Developer portrait"
          className="w-full h-auto object-contain"
          loading="eager"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="label-tag">Available for work</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-8"
        >
          I build fast, modern web applications that help businesses grow. Available for freelance projects worldwide.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium text-sm hover:gap-4 transition-all duration-300 active:scale-[0.97]"
        >
          CONTACT <span className="text-base">↗</span>
        </motion.a>
      </div>

      {/* Date */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 right-6 md:right-12 lg:right-24 label-tag"
      >
        Mar '26
      </motion.span>
    </section>
  );
};

export default HeroSection;
