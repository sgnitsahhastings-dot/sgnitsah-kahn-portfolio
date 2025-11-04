import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sgnitsahhasting@gmail.com.com",
      link: "mailto:sgnitsah@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+265 888 10 16 10",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Mzuzu, Malawi",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
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
            Get In <span className="text-gradient">Touch</span>
          </h2>
          
          <p
            className={`text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto ${
              isVisible ? "slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Have a project in mind? Let's work together to bring your ideas to life
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div
              className={`space-y-8 ${isVisible ? "slide-in-left" : "opacity-0"}`}
              style={{ animationDelay: "0.3s" }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.title}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-primary/10 to-accent-secondary/10 rounded-2xl border border-primary/20">
                <h4 className="text-xl font-semibold mb-3">Let's Connect!</h4>
                <p className="text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision. Feel free to reach out through any of the channels above.
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className={`space-y-6 ${isVisible ? "slide-in-right" : "opacity-0"}`}
              style={{ animationDelay: "0.3s" }}
            >
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary transition-colors duration-300"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary transition-colors duration-300"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-card border-border focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
