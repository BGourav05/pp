import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Brain, Code, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: "VLSI Design & Verification",
      description: "Digital circuit design, RTL coding in Verilog HDL, and functional verification for ASIC/FPGA applications.",
      highlights: ["RISC-V Architecture", "Sequential & Combinational Logic", "Design Optimization"]
    },
    {
      icon: Brain,
      title: "Integrated AI Solutions",
      description: "Machine learning model development and deployment for real-world applications using modern frameworks.",
      highlights: ["Computer Vision", "Predictive Analytics", "Deep Learning"]
    },
    {
      icon: Zap,
      title: "Embedded Systems Development",
      description: "Microcontroller-based solutions for IoT, automation, and intelligent control systems.",
      highlights: ["IoT Integration", "Real-time Systems", "Hardware Interface"]
    },
    {
      icon: Code,
      title: "Front-End Web Design",
      description: "Modern, responsive web interfaces for technical portfolios and professional showcases.",
      highlights: ["Responsive Design", "Clean UI/UX", "Technical Documentation"]
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section header */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full glass-effect border border-primary/20 mb-4">
              <span className="text-sm font-medium text-primary">What I Offer</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold">
              Services & <span className="text-gradient">Collaboration</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Technical expertise and collaborative opportunities across hardware and software domains
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-glow group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl neon-border mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-primary flex items-center gap-2">
                        <span className="w-1 h-4 bg-gradient-to-b from-primary to-accent rounded-full" />
                        Key Areas
                      </p>
                      <ul className="space-y-2">
                        {service.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-sm text-muted-foreground flex items-center gap-3 group/item">
                            <span className="w-2 h-2 rounded-full bg-accent group-hover/item:scale-125 transition-transform" />
                            <span className="group-hover/item:text-foreground transition-colors">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
