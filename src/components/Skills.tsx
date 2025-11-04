import { useEffect, useRef, useState } from "react";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Next.js", level: 77 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 70 },
        { name: "PostgreSQL", level: 70 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 77 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 60 },
        { name: "REST APIs", level: 80 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-6 ${
              isVisible ? "slide-up" : "opacity-0"
            }`}
          >
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          
          <p
            className={`text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto ${
              isVisible ? "slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            A comprehensive toolkit for building modern, scalable applications
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`p-8 bg-card rounded-2xl border border-border ${
                  isVisible ? "slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.2 + categoryIndex * 0.1}s` }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent-secondary rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${0.3 + categoryIndex * 0.1 + skillIndex * 0.05}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
