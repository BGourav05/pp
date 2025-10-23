import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "bihargaurav@gmail.com",
      href: "mailto:bihargaurav@gmail.com",
      color: "text-accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Bihar Gourav",
      href: "https://www.linkedin.com/in/bihar-gourav-2382a02bb",
      color: "text-primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "gourav0504",
      href: "https://github.com/gourav0504",
      color: "text-accent"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@gourav_0504",
      href: "https://instagram.com/gourav_0504",
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Section header */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full glass-effect border border-accent/20 mb-4">
              <span className="text-sm font-medium text-accent">Let's Connect</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate on innovative projects or discuss opportunities in tech and engineering
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            {contactLinks.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card key={index} className="card-glow group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-8 relative z-10">
                    <a 
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-5"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass-effect border border-primary/20 group-hover:border-primary/50 group-hover:scale-110 transition-all">
                        <Icon className={`w-8 h-8 ${contact.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                        <p className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Enhanced CTA */}
          <div className="text-center space-y-8 animate-fade-in pt-8">
            <div className="glass-effect rounded-2xl p-8 md:p-12 border border-primary/20 space-y-6">
              <h3 className="text-3xl font-bold">Ready to innovate together?</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary group mt-4"
                onClick={() => window.location.href = 'mailto:bihargaurav@gmail.com'}
              >
                <Mail className="mr-2 w-5 h-5" />
                Send an Email
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border">
        <p className="text-center text-sm text-muted-foreground">
          © 2025 Bihar Gourav. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
