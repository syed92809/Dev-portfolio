
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const projectImages = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format&fit=crop"
];

const projectData = {
  title: "Full-Stack E-Commerce Platform",
  description: "A complete e-commerce solution with a React frontend, Node.js backend, and MongoDB database. Features include user authentication, product management, shopping cart functionality, order processing, and payment integration.",
  techStack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe API", "JWT", "Tailwind CSS"],
  githubUrl: "https://github.com/yourusername/ecommerce-platform",
  liveUrl: "https://ecommerce-platform.example.com"
};

const FullStackProject = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <section id="full-stack-project" className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-block">
            <div className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Featured Project
            </div>
          </div>
          <h2 className="mb-4">Full-Stack Application</h2>
          <p className="text-muted-foreground text-lg">
            Take a look at my comprehensive full-stack development project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video bg-accent rounded-xl overflow-hidden shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center transition-standard"
              style={{ backgroundImage: `url(${projectImages[currentImageIndex]})` }}
            />
            
            <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-standard flex items-center justify-between px-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-white/20 hover:bg-white/40 text-white rounded-full"
                onClick={prevImage}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-white/20 hover:bg-white/40 text-white rounded-full"
                onClick={nextImage}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
              {projectImages.map((_, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "w-2 h-2 rounded-full transition-standard",
                    index === currentImageIndex ? "bg-white" : "bg-white/40"
                  )}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
          
          <Card className="border bg-card p-8 h-full shadow-sm">
            <h3 className="text-2xl font-medium mb-4">{projectData.title}</h3>
            
            <p className="text-muted-foreground mb-6">
              {projectData.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {projectData.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-accent text-accent-foreground font-normal"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="rounded-full flex items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-standard"
                onClick={() => window.open(projectData.githubUrl, "_blank")}
              >
                <Github className="h-4 w-4" />
                <span>View Code</span>
              </Button>

              <Button
                className="rounded-full flex items-center gap-2 bg-primary hover:bg-primary/90 text-white transition-standard"
                onClick={() => window.open(projectData.liveUrl, "_blank")}
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FullStackProject;
