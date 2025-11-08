import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ShoppingBag, PartyPopper } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Seven Seas Party Lawns Booking",
      description:
        "An event booking web platform that streamlines the process of booking party lawns for various occasions. Includes booking management, availability checking, and event scheduling features.",
      image: "/sevens.png", // 👈 add your image here (place it in /public/images/)
      color: "accent",
      tags: ["Booking", "Event Management", "Web Platform"],
      link: "https://party-lawn-booking-app.vercel.app/"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">
              My Work & <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Exploring web development through practical projects that solve real-world problems
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-1 place-items-center gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-card hover:shadow-hover transition-all animate-slide-up group max-w-md"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image Header */}
                <div className="h-56 w-full overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full bg-secondary text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      className="flex-1 bg-primary hover:bg-primary/90 text-white"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="mt-12 text-center">
            <Card className="p-8 shadow-card inline-block">
              <p className="text-lg mb-4">
                <span className="font-semibold">More projects coming soon!</span>
                <span className="text-muted-foreground"> Currently working on exciting new ideas.</span>
              </p>
              <a
                href="https://github.com/manavparmar407"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub Profile
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
