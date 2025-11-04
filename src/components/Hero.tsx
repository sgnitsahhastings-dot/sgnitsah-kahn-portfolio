import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, X } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="slide-up mb-8 flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <button className="relative group cursor-pointer focus:outline-none">
                  {/* Main logo container with image and SK overlay */}
                  <div className="relative w-36 h-36 md:w-44 md:h-44">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/60 to-accent-secondary blur-md opacity-50 group-hover:opacity-80 transition-all duration-500 group-hover:blur-lg" />
                    
                    {/* Main avatar with image */}
                    <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-primary/30 group-hover:ring-primary/50 shadow-2xl shadow-primary/20 transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl group-hover:shadow-primary/40">
                      <img 
                        src={profilePicture} 
                        alt="Sgnitsah Kahn" 
                        className="w-full h-full object-cover"
                      />
                      
                      {/* SK initials overlay - positioned at bottom right */}
                      <div className="absolute bottom-0 right-0 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/90 rounded-tl-3xl rounded-br-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-500">
                        <span className="text-primary-foreground font-bold text-lg md:text-xl tracking-tight">SK</span>
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                            <span className="text-primary-foreground text-sm font-semibold">Click to view</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 overflow-hidden bg-background/98 backdrop-blur-2xl border-2 border-primary/30 shadow-2xl animate-scale-in">
                <div className="relative group">
                  {/* Full size image */}
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={profilePicture} 
                      alt="Sgnitsah Kahn - Full Stack Developer" 
                      className="w-full h-auto max-h-[80vh] object-contain animate-fade-in"
                    />
                    
                    {/* Bottom gradient info panel */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/95 to-transparent p-8 md:p-10 transform translate-y-2 transition-transform duration-500">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-3xl md:text-4xl font-bold text-foreground">Sgnitsah Kahn</h3>
                            <div className="bg-primary/20 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/40">
                              <span className="text-primary font-bold text-sm tracking-wide">SK</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground text-lg">Full Stack Developer</p>
                          <p className="text-muted-foreground/80 text-sm mt-1">Crafting beautiful digital experiences</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="slide-up" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="text-gradient glow-effect">Sgnitsah Kahn</span>
            </h1>
          </div>

          <div className="slide-up h-20 md:h-24 mb-8" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-2xl md:text-4xl text-muted-foreground">
              <span className="text-primary font-semibold">{text}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 slide-up max-w-2xl mx-auto" style={{ animationDelay: "0.6s" }}>
            Crafting beautiful, scalable web applications with modern technologies.
            Passionate about creating seamless user experiences and clean code.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12 slide-up" style={{ animationDelay: "0.8s" }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-6 justify-center slide-up" style={{ animationDelay: "1s" }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:sgnitsah@example.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-all duration-300 animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
