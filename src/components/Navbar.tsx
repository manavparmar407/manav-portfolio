import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Soft Skills", id: "soft-skills" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Certifications", id: "certifications" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        navbar-bg
        ${isScrolled ? "backdrop-blur-md shadow-lg" : ""}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold flex items-center gap-1"
          >
            <span
              className="transition"
              style={{ color: `hsl(var(--navbar-logo))` }}
            >
              Manav
            </span>

            {/* Logo Dot = Accent Green */}
            <span className="text-accent">.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                style={{ color: `hsl(var(--navbar-links))` }}
                className="font-medium transition-colors hover:opacity-80"
              >
                {link.label}
              </button>
            ))}

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className="h-6 w-6"
                style={{ color: `hsl(var(--navbar-links))` }}
              />
            ) : (
              <Menu
                className="h-6 w-6"
                style={{ color: `hsl(var(--navbar-links))` }}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left font-medium py-2 px-4 rounded-lg transition-colors"
                  style={{ color: `hsl(var(--navbar-links))` }}
                >
                  {link.label}
                </button>
              ))}

              {/* Mobile Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;