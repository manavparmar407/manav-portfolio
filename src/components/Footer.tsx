import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        bg-[hsl(140_60%_28%)] text-white
        dark:bg-background dark:text-foreground
        py-12
      "
    >
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Manav<span className="text-accent">.</span>
            </h3>
            <p className="text-white/80 dark:text-foreground/70 leading-relaxed">
              Aspiring AI & Data Science Student passionate about learning and 
              building innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Education', 'Skills', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(link.toLowerCase());
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="
                      text-white/80 
                      dark:text-foreground/70
                      hover:text-accent 
                      transition-colors
                    "
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Me</h4>

            <div className="flex gap-4 mb-4">
              {[
                { href: "https://github.com/manavparmar407", icon: Github },
                { href: "https://linkedin.com/in/manavparmar0407", icon: Linkedin },
                { href: "https://instagram.com/im.manavvvv", icon: Instagram },
                { href: "mailto:manavparmar0407@gmail.com", icon: Mail },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-10 h-10 rounded-full flex items-center justify-center
                    bg-white/10 hover:bg-accent transition-all
                    dark:bg-card/20
                  "
                >
                  <item.icon
                    className="
                      h-5 w-5 
                      text-white
                      dark:text-foreground
                    "
                  />
                </a>
              ))}
            </div>

            <p className="text-white/80 dark:text-foreground/70 text-sm">
              <a 
                href="mailto:manavparmar0407@gmail.com"
                className="hover:text-accent transition-colors"
              >
                manavparmar0407@gmail.com
              </a>
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 dark:border-border/40">
          <p className="
            text-center
            text-white/80 dark:text-foreground/70
            flex items-center justify-center gap-2 flex-wrap
          ">
            © {currentYear} Manav Parmar. Crafted with 
            <Heart className="h-4 w-4 text-accent fill-accent" /> 
            and dedication.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;