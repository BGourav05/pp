import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Cpu, Zap, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Tech Innovator | Electrical Engineer | AI/ML Explorer | Space Tech Learner";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-full animate-glow-pulse blur-sm" />
        <div className="absolute top-40 right-20 w-4 h-4 bg-accent rounded-full animate-glow-pulse blur-sm" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-primary rounded-full animate-glow-pulse blur-sm" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-accent rounded-full animate-glow-pulse blur-sm" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 right-1/4 w-4 h-4 bg-primary rounded-full animate-glow-pulse blur-sm" style={{ animationDelay: '1.5s' }} />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm font-medium">Available for Collaboration</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm <span className="text-gradient animated-gradient">Bihar Gourav</span>
              </h1>
              <div className="h-20 flex items-center">
                <p className="text-xl md:text-2xl text-muted-foreground font-light">
                  {text}<span className="animate-pulse">|</span>
                </p>
              </div>
              <p className="text-lg text-muted-foreground/90 max-w-2xl leading-relaxed">
                Blending hardware and intelligence to build innovative systems for the future.
              </p>
            </div>

            {/* Quick highlights with glass effect */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl glass-effect border border-primary/30 hover:border-primary/60 transition-all group">
                <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <Cpu className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">VLSI Design</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl glass-effect border border-accent/30 hover:border-accent/60 transition-all group">
                <div className="p-2 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors">
                  <Code2 className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-medium">AI/ML</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl glass-effect border border-primary/30 hover:border-primary/60 transition-all group">
                <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Embedded Systems</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('portfolio')}
                className="relative bg-primary hover:bg-primary/90 text-primary-foreground glow-primary group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="glass-effect border-accent/50 text-accent hover:bg-accent/10 hover:border-accent"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right content - Enhanced hero image */}
          <div className="relative lg:block hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Enhanced glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-3xl animate-pulse" />
              
              {/* Main image container with neon border */}
              <div className="relative rounded-3xl overflow-hidden neon-border">
                <img 
                  src={heroImage} 
                  alt="Bihar Gourav - Tech Innovator"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-primary/40 rounded-full floating-animation" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 border-2 border-accent/40 rounded-full floating-animation" style={{ animationDelay: '1s' }} />
              
              {/* Accent dots */}
              <div className="absolute top-10 -left-4 w-4 h-4 bg-accent rounded-full glow-accent" />
              <div className="absolute bottom-20 -right-4 w-3 h-3 bg-primary rounded-full glow-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
