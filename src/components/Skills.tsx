import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, TrendingUp } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "Python", level: 55, icon: Code2, color: "primary", description: "Proficient in programming fundamentals" },
    { name: "HTML", level: 90, icon: Code2, color: "accent", description: "Advanced markup and semantic HTML" },
    { name: "CSS", level: 80, icon: Code2, color: "primary", description: "Styling and responsive design" },
    { name: "JavaScript", level: 70, icon: Code2, color: "primary", description: "Dynamic web functionality" },
    { name: "MySQL", level: 75, icon: Code2, color: "primary", description: "Database management and queries" }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30 dark:bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Skills</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">
              Technical <span className="text-primary">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Skills */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="
                  p-6 shadow-card hover:shadow-hover transition-all animate-slide-up group 
                  bg-card/90 dark:bg-background/40 
                  border border-border/60 dark:border-border/40
                "
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">

                  {/* Icon Container */}
                  <div
                    className={`
                      w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform
                      ${skill.color === "primary"
                        ? "bg-primary/15 dark:bg-primary/25"
                        : "bg-accent/15 dark:bg-accent/25"}
                    `}
                  >
                    <skill.icon
                      className={`
                        h-7 w-7 
                        ${skill.color === "primary" ? "text-primary" : "text-accent"}
                        dark:text-white
                      `}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 text-foreground">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-semibold">{skill.level}%</span>
                  </div>

                  {/* Progress bar improved */}
                  <Progress
                    value={skill.level}
                    className={`
                      h-2 
                      [&>*]:bg-${skill.color === "primary" ? "primary" : "accent"}
                    `}
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* Learning Note */}
          <Card
            className="
    p-8 rounded-2xl shadow-card transition-all

    /* LIGHT MODE */
    gradient-accent
    text-accent-foreground

    /* DARK MODE */
    dark:bg-white
    dark:text-black
    dark:border-primary/40
  "
          >
            <div className="flex items-start gap-6">

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-8 w-8 text-accent dark:text-primary" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Continuous Growth Mindset
                </h3>

                <p className="leading-relaxed mb-4">
                  Currently expanding my technical foundation through continuous learning and
                  hands-on projects. Each day brings new opportunities to deepen my
                  understanding of Python, Machine Learning, and Data Science concepts.
                </p>

                <div
                  className="
          inline-block px-4 py-2 rounded-full 
          bg-primary/10 text-white font-semibold text-sm

          dark:bg-primary/10
          dark:text-black
        "
                >
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