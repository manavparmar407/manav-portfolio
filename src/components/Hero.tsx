import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown, Sparkles, TrendingUp } from "lucide-react";
import profileImage from "@/assets/manav-profile-new.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { icon: Sparkles, value: "AI/ML", label: "Focus Area" },
    { icon: TrendingUp, value: "Growing", label: "Skillset" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero bg-background">
      
      {/* Mouse Gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(
            600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(255,153,51,0.15), 
            transparent 40%
          )`
        }}
      />

      {/* Floating Shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-40 left-10 w-20 h-20 border-4 border-accent/30 rounded-lg rotate-12 animate-[spin_20s_linear_infinite]" />
      <div className="absolute bottom-40 right-10 w-16 h-16 border-4 border-foreground/20 rounded-full animate-[spin_15s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-foreground/10 rounded-lg -rotate-12 animate-[spin_25s_linear_infinite]" />
      <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-foreground/10 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left */}
          <div className="space-y-8 animate-fade-in text-foreground">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium border border-border shadow-lg hover:scale-105 transition-transform">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent/70"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
              </span>
              <span>Available for Opportunities</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block text-muted-foreground text-3xl lg:text-4xl font-normal mb-2">Hello, I'm</span>

              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-foreground via-accent to-foreground animate-fade-in">
                Manav Parmar
              </span>

              <span className="block text-3xl lg:text-5xl mt-3 text-muted-foreground">
                AI & Machine Learning Student
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl backdrop-blur-sm">
              Focused learner exploring the world of 
              <span className="text-accent font-semibold"> Artificial Intelligence</span> and
              <span className="text-accent font-semibold"> Data Science</span>.  
              Currently pursuing MCA at Lovely Professional University.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-card/20 backdrop-blur-md px-4 py-3 rounded-2xl border border-border hover:bg-card/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all group px-8"
                onClick={() => scrollToSection('portfolio')}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-border bg-card/10 backdrop-blur-md text-foreground hover:bg-card/20 hover:border-border hover:scale-105 transition-all px-8"
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </Button>
            </div>

            {/* Socials */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/manavparmar407"
                target="_blank"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-card/20 backdrop-blur-md border border-border hover:bg-card/30 transition-all hover:scale-105 shadow-lg"
              >
                <Github className="h-5 w-5 text-foreground" />
                <span className="text-sm font-medium hidden sm:inline text-foreground">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/manavparmar0407"
                target="_blank"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-card/20 backdrop-blur-md border border-border hover:bg-card/30 transition-all hover:scale-105 shadow-lg"
              >
                <Linkedin className="h-5 w-5 text-foreground" />
                <span className="text-sm font-medium hidden sm:inline text-foreground">LinkedIn</span>
              </a>

              <a
                href="mailto:manavparmar0407@gmail.com"
                target="_blank"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-card/20 backdrop-blur-md border border-border hover:bg-card/30 transition-all hover:scale-105 shadow-lg"
              >
                <Mail className="h-5 w-5 text-foreground" />
                <span className="text-sm font-medium hidden sm:inline text-foreground">E-Mail</span>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">

              {/* Glows */}
              <div className="absolute inset-0 bg-accent rounded-full blur-3xl opacity-40 scale-110 animate-pulse" />
              <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-20 scale-105" />

              {/* Rotating Ring */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent border-r-accent animate-[spin_8s_linear_infinite]" />
              </div>

              {/* Profile Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-border shadow-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10" />
                <img
                  src={profileImage}
                  alt="Manav Parmar"
                  className="w-full h-full object-cover rounded-full relative z-10"
                />
              </div>

              {/* Education */}
              <div className="absolute bottom-8 -right-4 bg-card backdrop-blur-md rounded-2xl p-4 shadow-2xl animate-fade-in border border-border hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center animate-pulse">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">MCA Student</p>
                    <p className="text-xs text-muted-foreground">AI & ML @ LPU</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div
                className="absolute top-8 -left-4 bg-card backdrop-blur-md rounded-2xl px-4 py-2 shadow-2xl animate-fade-in border border-border"
                style={{ animationDelay: '0.3s' }}
              >
                <p className="text-xs font-semibold text-foreground">
                  📍 Rajkot, Gujarat
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-8 h-12 rounded-full border-2 border-border flex items-start justify-center p-2 group-hover:border-foreground transition-colors">
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;