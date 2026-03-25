import AnimatedSection from "./AnimatedSection";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="section-padding py-16 border-t border-border">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div>
            <h3 className="font-display font-700 text-lg text-foreground mb-4">Menu</h3>
            <nav className="flex flex-col gap-2">
              {["Home", "Services", "Works", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-display font-700 text-lg text-foreground mb-4">Socials</h3>
            <nav className="flex flex-col gap-2">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/bhavya-deep-087653390/" },
                { label: "GitHub", href: "https://github.com/Bhavya-Deep" },
                { label: "Instagram", href: "#" },
                { label: "Twitter", href: "https://x.com/Bhavya_Deep96" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:text-right">
            <p className="label-tag mb-2">Local Time</p>
            <p className="text-sm text-muted-foreground">{new Date().toLocaleTimeString()}, IST</p>
            <p className="text-sm text-muted-foreground mt-4">© {year} All rights reserved.</p>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
};

export default Footer;
