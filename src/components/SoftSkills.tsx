import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Sparkles, Users, Target, MessageSquare, Lightbulb } from "lucide-react";

const SoftSkills = () => {
  const softSkills = [
    {
      name: "Communication",
      level: 55,
      icon: MessageSquare,
      color: "bg-accent",
    },
    {
      name: "Teamwork",
      level: 85,
      icon: Users,
      color: "bg-primary",
    },
    {
      name: "Problem Solving",
      level: 70,
      icon: Lightbulb,
      color: "bg-primary",
    },
    {
      name: "Adaptability",
      level: 65,
      icon: Sparkles,
      color: "bg-accent",
    },
    {
      name: "Leadership",
      level: 50,
      icon: Target,
      color: "bg-primary",
    },
  ];

  return (
    <section id="soft-skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Soft Skills
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">
              Professional <span className="text-primary">Strengths</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Soft Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {softSkills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-hover transition-all animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl ${
                      skill.color === "bg-primary" ? "bg-primary/10" : "bg-accent/10"
                    } flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <skill.icon
                      className={`h-7 w-7 ${
                        skill.color === "bg-primary" ? "text-primary" : "text-accent"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="font-semibold">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              </Card>
            ))}
          </div>

          {/* Note Card */}
          <Card className="p-8 shadow-card">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Growth Beyond Code
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I believe strong communication, adaptability, and leadership are as important as technical skills. 
                  These traits help me connect, collaborate, and deliver projects that truly make an impact.
                </p>
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                  💬 Soft Skills Define Success
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;