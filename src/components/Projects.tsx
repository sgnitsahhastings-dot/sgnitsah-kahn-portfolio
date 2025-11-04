import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration, inventory management, and real-time order tracking.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.",
      tags: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with beautiful data visualizations and automated reporting.",
      tags: ["React", "D3.js", "Express", "Redis"],
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather application with location-based forecasts, interactive maps, and severe weather alerts.",
      tags: ["React", "APIs", "Tailwind", "Maps"],
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for creative professionals with drag-and-drop interface and custom theming options.",
      tags: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
      gradient: "from-indigo-500/20 to-violet-500/20",
    },
    {
      title: "Real-Time Chat",
      description: "Modern messaging application with end-to-end encryption, file sharing, and video call capabilities.",
      tags: ["React", "WebRTC", "Socket.io", "Node.js"],
      gradient: "from-teal-500/20 to-cyan-500/20",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-card to-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-6 ${
              isVisible ? "slide-up" : "opacity-0"
            }`}
          >
            Featured <span className="text-gradient">Projects</span>
          </h2>
          
          <p
            className={`text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto ${
              isVisible ? "slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            A showcase of my recent work and side projects
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 ${
                  isVisible ? "slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative p-6 h-full flex flex-col">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-secondary rounded-full text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
