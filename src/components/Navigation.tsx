import { useState, useEffect } from "react";
import { Menu, X, Home, User, Code, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import profilePicture from "@/assets/profile-picture.jpg";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Home", id: "hero", icon: Home },
    { name: "About", id: "about", icon: User },
    { name: "Skills", id: "skills", icon: Code },
    { name: "Projects", id: "projects", icon: Briefcase },
    { name: "Contact", id: "contact", icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-lg shadow-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Profile Picture */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="relative group cursor-pointer focus:outline-none">
                  <div className="relative w-12 h-12 md:w-14 md:h-14">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/60 to-accent-secondary blur-sm opacity-40 group-hover:opacity-70 transition-all duration-500" />
                    
                    {/* Profile image container */}
                    <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-primary/30 group-hover:ring-primary/60 shadow-lg shadow-primary/10 transition-all duration-500 group-hover:scale-110">
                      <img 
                        src={profilePicture} 
                        alt="Sgnitsah Kahn" 
                        className="w-full h-full object-cover"
                      />
                      
                      {/* SK badge overlay */}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-primary to-primary/90 rounded-tl-2xl rounded-br-full flex items-center justify-center shadow-md transform group-hover:scale-110 transition-all duration-500">
                        <span className="text-primary-foreground font-bold text-[8px] tracking-tight">SK</span>
                      </div>
                    </div>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 overflow-hidden bg-background/98 backdrop-blur-2xl border-2 border-primary/30 shadow-2xl animate-scale-in">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={profilePicture} 
                      alt="Sgnitsah Kahn - Full Stack Developer" 
                      className="w-full h-auto max-h-[80vh] object-contain animate-fade-in"
                    />
                    
                    {/* Bottom gradient info panel */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/95 to-transparent p-8 md:p-10">
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

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
            >
              Let's Talk
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors duration-300 z-50 relative"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden transition-opacity duration-500 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-card border-l border-border z-40 md:hidden transition-transform duration-700 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          boxShadow: isMobileMenuOpen ? "-10px 0 50px rgba(0, 0, 0, 0.5)" : "none",
        }}
      >
        {/* Sidebar Header */}
        <div className="p-8 border-b border-border">
          <div
            className={`transition-all duration-700 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "200ms" : "0ms" }}
          >
            <h2 className="text-2xl font-bold text-gradient mb-2">Menu</h2>
            <p className="text-sm text-muted-foreground">Navigate to section</p>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <nav className="p-6">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`transition-all duration-700 ${
                  isMobileMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${300 + index * 100}ms` : "0ms",
                }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-primary/10 hover:border-primary border border-transparent transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
          <div
            className={`transition-all duration-700 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "800ms" : "0ms" }}
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
              size="lg"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-40 h-40 bg-accent-secondary/5 rounded-full blur-3xl" />
      </aside>
    </>
  );
};

export default Navigation;
