import { GraduationCap, Target, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Me</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">
              My Journey & <span className="text-primary">Aspirations</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>
          
          {/* Bio Card */}
          <Card className="p-8 mb-8 shadow-card hover:shadow-hover transition-all animate-slide-up">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              My name is <span className="text-foreground font-semibold">Manav Parmar</span>, and I am from <span className="text-foreground font-semibold">Rajkot</span>. 
              I'm a focused and dedicated learner who enjoys exploring new skills and challenges. 
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I have completed my <span className="text-foreground font-semibold">BCA from Saurashtra University, Rajkot</span> (2022–2025) 
              and am currently pursuing my <span className="text-foreground font-semibold">MCA in Artificial Intelligence and Machine Learning</span> at 
              <span className="text-foreground font-semibold"> Lovely Professional University</span>.
            </p>
          </Card>
          
          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="p-6 text-center shadow-card hover:shadow-hover transition-all group hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Education Focused</h3>
              <p className="text-sm text-muted-foreground">
                Building strong academic foundation in AI & ML
              </p>
            </Card>
            
            <Card className="p-6 text-center shadow-card hover:shadow-hover transition-all group hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Goal Oriented</h3>
              <p className="text-sm text-muted-foreground">
                Dedicated to mastering Data Science & ML
              </p>
            </Card>
            
            <Card className="p-6 text-center shadow-card hover:shadow-hover transition-all group hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Continuous Learner</h3>
              <p className="text-sm text-muted-foreground">
                Always exploring new skills and technologies
              </p>
            </Card>
          </div>
          
          {/* Learning Note */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-accent text-white text-center">
            <p className="text-lg font-medium">
              🚀 Currently expanding my technical foundation through continuous learning in Python, Machine Learning, and Data Science
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
