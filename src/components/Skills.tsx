import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Brain, Database, TrendingUp } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "Python",
      level: 40,
      icon: Code2,
      color: "bg-primary",
      description: "Actively learning programming fundamentals"
    },
    {
      name: "Machine Learning",
      level: 30,
      icon: Brain,
      color: "bg-accent",
      description: "Exploring ML algorithms and concepts"
    },
    {
      name: "Data Science",
      level: 35,
      icon: Database,
      color: "bg-primary",
      description: "Building foundation in data analysis"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Skills</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">
              Technical <span className="text-primary">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {skills.map((skill, index) => (
              <Card 
                key={index}
                className="p-6 shadow-card hover:shadow-hover transition-all animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl ${
                    skill.color === 'bg-primary' ? 'bg-primary/10' : 'bg-accent/10'
                  } flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <skill.icon className={`h-7 w-7 ${
                      skill.color === 'bg-primary' ? 'text-primary' : 'text-accent'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-semibold">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              </Card>
            ))}
          </div>
          
          {/* Learning Note Card */}
          <Card className="p-8 shadow-card">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Continuous Growth Mindset
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Currently expanding my technical foundation through continuous learning and hands-on projects. 
                  Each day brings new opportunities to deepen my understanding of Python, Machine Learning, 
                  and Data Science concepts.
                </p>
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                  🎯 Actively Learning & Building
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
