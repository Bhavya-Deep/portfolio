import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert({ name, email, message });

      if (error) throw error;

      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      form.reset();
    } catch {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding py-24 md:py-32">
      <AnimatedSection>
        <h2 className="heading-lg text-foreground mb-4">Let's Make It Happen</h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="text-muted-foreground text-lg max-w-lg mb-12 leading-relaxed">
          Have a project in mind? I'd love to hear about it. Drop me a message and let's build something great together.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <form className="max-w-xl space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="label-tag mb-2 block">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full bg-card border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-shadow duration-200"
            />
          </div>
          <div>
            <label className="label-tag mb-2 block">Email</label>
            <input
              name="email"
              type="email"
              placeholder="your@email.com"
              className="w-full bg-card border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-shadow duration-200"
            />
          </div>
          <div>
            <label className="label-tag mb-2 block">Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full bg-card border border-border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-shadow duration-200 resize-none"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium text-sm hover:shadow-lg transition-shadow duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </motion.button>
        </form>
      </AnimatedSection>
    </section>
  );
};

export default ContactSection;
