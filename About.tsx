import { Award, Code, Cpu, Lightbulb, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Gold Medalist",
      description: "AI/ML School Olympiad",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Zap,
      title: "Top 18 Nationwide",
      description: "ATL Space Challenge (ISRO Recognized)",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: TrendingUp,
      title: "1st Rank",
      description: "All-India School-Level Tech Competition",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  const skillCategories = [
    {
      category: "Programming",
      skills: ["Python", "C"],
      icon: Code,
      color: "text-primary"
    },
    {
      category: "Electrical & VLSI",
      skills: ["Circuit Design", "Power Systems", "LTspice", "MATLAB"],
      icon: Cpu,
      color: "text-accent"
    },
    {
      category: "AI/ML",
      skills: ["Machine Learning", "Deep Learning", "Computer Vision"],
      icon: Lightbulb,
      color: "text-primary"
    },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "MySQL", "Front-End Design"],
      icon: Code,
      color: "text-accent"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section header */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full glass-effect border border-primary/20 mb-4">
              <span className="text-sm font-medium text-primary">Get to know me</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm an Electrical Engineering student passionate about innovation, AI/ML, VLSI design, 
              and EV technologies — blending hardware and intelligence to create impactful, future-ready systems.
            </p>
          </div>

          {/* Achievements with enhanced design */}
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="card-glow group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-8 text-center space-y-4 relative z-10">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${achievement.bgColor} group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-10 h-10 ${achievement.color}`} />
                    </div>
                    <h3 className="font-bold text-xl">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Inspirational quote with modern design */}
          <div className="text-center py-12 animate-fade-in relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
            <div className="relative glass-effect rounded-2xl p-8 md:p-12 border border-primary/20 max-w-4xl mx-auto">
              <blockquote className="text-2xl md:text-4xl font-light italic text-gradient leading-relaxed">
                "Innovation begins where curiosity meets creativity"
              </blockquote>
            </div>
          </div>

          {/* Skills section with modern cards */}
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-3">
              <h3 className="text-3xl md:text-4xl font-bold">
                Skills & <span className="text-gradient">Expertise</span>
              </h3>
              <p className="text-muted-foreground">Technologies and tools I work with</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="card-glow group">
                    <CardContent className="p-8 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl glass-effect border border-primary/20 group-hover:border-primary/50 transition-colors">
                          <Icon className={`w-7 h-7 ${category.color}`} />
                        </div>
                        <h4 className="text-2xl font-semibold">{category.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-4 py-2 text-sm font-medium glass-effect rounded-full border border-border hover:border-primary/50 hover:scale-105 transition-all cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Special interests with modern pills */}
          <div className="text-center space-y-6 animate-fade-in">
            <h4 className="text-2xl font-semibold">Special Interests</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {["VLSI Design", "Electric Vehicles", "Embedded Systems", "Space Tech"].map((interest, index) => (
                <span 
                  key={index}
                  className="px-8 py-4 text-sm font-medium neon-border rounded-xl hover:scale-105 transition-all cursor-default group"
                >
                  <span className="relative z-10">{interest}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
