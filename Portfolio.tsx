import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Brain, Satellite, Cpu, Clock, Calculator } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      icon: Zap,
      title: "Smart EV Charging System",
      description: "Controller-based system enhancing efficiency and safety in Electric Vehicles with intelligent power management.",
      tags: ["Embedded Systems", "Power Electronics", "IoT"],
      color: "text-accent"
    },
    {
      icon: Brain,
      title: "AI Foul Detection",
      description: "ML model for automated sports foul detection using computer vision and deep learning algorithms.",
      tags: ["AI/ML", "Computer Vision", "Python"],
      color: "text-primary"
    },
    {
      icon: Satellite,
      title: "Mini Satellites Simulation",
      description: "Simulated satellite telemetry & control system — Ranked Top 16 nationwide in ISRO-recognized competition.",
      tags: ["Space Tech", "Embedded C", "Simulation"],
      color: "text-accent"
    }
  ];

  const vlsiProjects = [
    {
      icon: Cpu,
      title: "RISC-V Pipelined CPU",
      description: "5-stage processor design implementing classic RISC architecture with hazard detection.",
      tags: ["Verilog HDL", "Digital Design"]
    },
    {
      icon: Clock,
      title: "Digital Clock with Counters",
      description: "Clock implementation using cascaded counters and multiplexed seven-segment displays.",
      tags: ["Verilog HDL", "Sequential Logic"]
    },
    {
      icon: Calculator,
      title: "4-bit ALU",
      description: "Arithmetic Logic Unit performing arithmetic and logic operations with status flags.",
      tags: ["Verilog HDL", "Combinational Logic"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden bg-secondary/20">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section header */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full glass-effect border border-accent/20 mb-4">
              <span className="text-sm font-medium text-accent">My Work</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing innovative solutions across embedded systems, AI/ML, and VLSI design
            </p>
          </div>

          {/* Main projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className="card-glow group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass-effect border border-primary/20 mb-6 group-hover:border-primary/50 group-hover:scale-110 transition-all">
                      <Icon className={`w-8 h-8 ${project.color}`} />
                    </div>
                    <CardTitle className="text-2xl mb-3">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="glass-effect border border-border hover:border-primary/50 transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* VLSI Projects section */}
          <div className="space-y-6 animate-fade-in">
            <div className="text-center space-y-2">
              <h3 className="text-3xl font-bold">
                VLSI Design <span className="text-gradient">Practice</span>
              </h3>
              <p className="text-muted-foreground">Verilog HDL Projects</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {vlsiProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card key={index} className="card-glow hover:scale-105 transition-all duration-300">
                    <CardHeader>
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 mb-3">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs border-primary/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
