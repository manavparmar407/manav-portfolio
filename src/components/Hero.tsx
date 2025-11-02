import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown, Sparkles, Code2, TrendingUp } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated Background Gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 153, 51, 0.15), transparent 40%)`
        }}
      />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-40 left-10 w-20 h-20 border-4 border-accent/30 rounded-lg rotate-12 animate-[spin_20s_linear_infinite]" />
      <div className="absolute bottom-40 right-10 w-16 h-16 border-4 border-white/20 rounded-full animate-[spin_15s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-white/10 rounded-lg -rotate-12 animate-[spin_25s_linear_infinite]" />
      <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium border border-white/20 shadow-lg hover:scale-105 transition-transform">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span>Available for Opportunities</span>
            </div>
            
            {/* Main Heading with Gradient Text */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block text-white/90 text-3xl lg:text-4xl font-normal mb-2">Hello, I'm</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white animate-fade-in">
                Manav Parmar
              </span>
              <span className="block text-3xl lg:text-5xl mt-3 text-white/90">
                AI & Machine Learning Student
              </span>
            </h1>
            
            {/* Enhanced Description */}
            <p className="text-xl text-white/80 leading-relaxed max-w-xl backdrop-blur-sm">
              Focused learner exploring the world of <span className="text-accent font-semibold">Artificial Intelligence</span> and 
              <span className="text-accent font-semibold"> Data Science</span>. 
              Currently pursuing MCA at Lovely Professional University.
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 hover:bg-white/15 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">{stat.value}</p>
                    <p className="text-xs text-white/70">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons with Enhanced Styling */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all group px-8"
                onClick={() => scrollToSection('portfolio')}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all px-8"
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </Button>
            </div>
            
            {/* Enhanced Social Links with Labels */}
            <div className="flex gap-3 pt-2">
              <a 
                href="https://github.com/manavparmar407" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all hover:scale-105 shadow-lg"
              >
                <Github className="h-5 w-5 text-white" />
                <span className="text-sm font-medium hidden sm:inline">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/manavparmar0407" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all hover:scale-105 shadow-lg"
              >
                <Linkedin className="h-5 w-5 text-white" />
                <span className="text-sm font-medium hidden sm:inline">LinkedIn</span>
              </a>
              <a 
                href="mailto:manavparmar0407@gmail.com"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all hover:scale-105 shadow-lg"
              >
                <Mail className="h-5 w-5 text-white" />
                <span className="text-sm font-medium hidden sm:inline">Email</span>
              </a>
            </div>
          </div>
          
          {/* Right Content - Enhanced Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              {/* Multi-layer Glow Effect */}
              <div className="absolute inset-0 bg-accent rounded-full blur-3xl opacity-40 scale-110 animate-pulse" />
              <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-20 scale-105" />
              
              {/* Rotating Border Ring */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent border-r-accent animate-[spin_8s_linear_infinite]" />
              </div>
              
              {/* Profile Image Container with Glassmorphism */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10" />
                <img 
                  src={profileImage} 
                  alt="Manav Parmar - Professional Profile"
                  className="w-full h-full object-cover rounded-full relative z-10"
                />
              </div>
              
              {/* Floating Education Badge */}
              <div className="absolute bottom-8 -right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl animate-fade-in border border-accent/20 hover:scale-105 transition-transform">
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
              
              {/* Floating Location Badge */}
              <div className="absolute top-8 -left-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2 shadow-2xl animate-fade-in border border-primary/20" style={{ animationDelay: '0.3s' }}>
                <p className="text-xs font-semibold text-foreground">📍 Rajkot, Gujarat</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors group"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2 group-hover:border-white/50 transition-colors">
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
