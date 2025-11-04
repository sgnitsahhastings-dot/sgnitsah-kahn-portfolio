import { useEffect, useRef, useState } from "react";
import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
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

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Creating intuitive and beautiful interfaces that users love to interact with.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency without compromising quality.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-background to-card"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-6 ${
              isVisible ? "slide-up" : "opacity-0"
            }`}
          >
            About <span className="text-gradient">Me</span>
          </h2>
          
          <p
            className={`text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto ${
              isVisible ? "slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            I'm a passionate full-stack developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies, I create seamless
            digital experiences that solve real-world problems.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 ${
                  isVisible ? "slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div
            className={`mt-16 p-8 bg-gradient-to-r from-card to-secondary rounded-2xl border border-border ${
              isVisible ? "slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              With years of experience in web development, I've worked on diverse projects ranging from
              e-commerce platforms to complex web applications. My expertise spans across modern frameworks
              like React, Node.js, and databases like PostgreSQL and MongoDB. I'm constantly learning and
              adapting to new technologies to deliver the best solutions for every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
