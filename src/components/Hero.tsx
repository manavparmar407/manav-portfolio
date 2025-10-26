import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/manav-profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-40 left-10 w-20 h-20 border-4 border-accent/30 rounded-lg rotate-12" />
      <div className="absolute bottom-40 right-10 w-16 h-16 border-4 border-white/20 rounded-full" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/20">
              👋 Welcome to my portfolio
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Hello, I'm <br />
              <span className="text-accent">Manav Parmar</span><br />
              An AI & Data Science Student
            </h1>
            
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              Focused learner exploring the world of Artificial Intelligence and Data Science. 
              Currently pursuing MCA at Lovely Professional University.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all"
                onClick={() => scrollToSection('portfolio')}
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/manavparmar407" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://linkedin.com/in/manavparmar0407" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a 
                href="mailto:manavparmar0407@gmail.com"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              {/* Decorative Circle */}
              <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-30 scale-110" />
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Manav Parmar - Professional Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 -right-4 bg-white rounded-2xl p-4 shadow-2xl animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">MCA Student</p>
                    <p className="text-xs text-muted-foreground">AI & ML @ LPU</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
