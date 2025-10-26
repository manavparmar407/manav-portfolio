import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Manav<span className="text-accent">.</span>
            </h3>
            <p className="text-white/70 leading-relaxed">
              Aspiring AI & Data Science Student passionate about learning and building innovative solutions.
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
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Me</h4>
            <div className="flex gap-4 mb-4">
              <a 
                href="https://github.com/manavparmar407"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-all flex items-center justify-center"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/manavparmar0407"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-all flex items-center justify-center"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/im.manavvvv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-all flex items-center justify-center"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:manavparmar0407@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-all flex items-center justify-center"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-white/70 text-sm">
              <a href="mailto:manavparmar0407@gmail.com" className="hover:text-accent transition-colors">
                manavparmar0407@gmail.com
              </a>
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-white/70 flex items-center justify-center gap-2 flex-wrap">
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
