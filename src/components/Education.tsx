import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      specialization: "Artificial Intelligence and Machine Learning",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      duration: "2025 - Present",
      status: "1st Semester Running",
      color: "primary"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Saurashtra University",
      location: "Rajkot, Gujarat",
      duration: "2022 - 2025",
      status: "Completed",
      color: "accent"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Education</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">
              Academic <span className="text-primary">Journey</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className={`relative animate-slide-up ${
                    index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -ml-0 md:-ml-4 w-8 h-8 rounded-full bg-accent border-4 border-background shadow-lg flex items-center justify-center z-10">
                    <GraduationCap className="h-4 w-4 text-white" />
                  </div>
                  
                  <Card className={`p-6 ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  } shadow-card hover:shadow-hover transition-all`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-2xl ${
                        edu.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                      } flex items-center justify-center flex-shrink-0`}>
                        <GraduationCap className={`h-8 w-8 ${
                          edu.color === 'primary' ? 'text-primary' : 'text-accent'
                        }`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            edu.status === 'Completed' 
                              ? 'bg-accent/10 text-accent' 
                              : 'bg-primary/10 text-primary'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                        {edu.specialization && (
                          <p className="text-sm text-primary font-semibold mb-2">{edu.specialization}</p>
                        )}
                        
                        <p className="font-semibold text-muted-foreground mb-1">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mb-3">{edu.location}</p>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
