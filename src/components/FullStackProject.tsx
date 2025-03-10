import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// Data for multiple full-stack projects
const fullStackProjects = [
  {
    title: "Only Halal",
    description:
      "A halal-certified food delivery platform with React frontend, Node.js backend, and MongoDB database. Features include halal certification verification, prayer time integration, restaurant filtering by halal standards, real-time order tracking, and secure payment gateway. All meals are sourced from certified halal providers with full audit trails.",
    techStack: [
      "React Native",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Context",
      "Stripe API",
      "JWT",
      "AWS",
    ],
    githubUrl: "https://github.com/syed92809/onlyhalal.git",
    liveUrl: "https://only-halal.com/",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    title: "Legal Ease",
    description:
      "AI-powered legal assistance platform connecting users with specialized lawyers. Features include AI case analysis, lawyer matching algorithm, document automation, video consultation scheduling, and smart contract review. The AI chatbot provides preliminary legal suggestions and helps users draft legal documents.",
    techStack: [
      "Flutter",
      "Firebase",
      "Firestore",
      "Flask",
      "Python",
      "AWS",
      "React",
    ],
    githubUrl: "https://github.com/syed92809/lawsphere-.git",
    liveUrl: "",
    images: [
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    title: "Rent4U",
    description:
      "Academic car rental platform built with PHP and MySQL. Features include vehicle inventory management, real-time booking system, user authentication, payment processing, and admin dashboard with reporting. Includes complete documentation with ER diagrams and UML models.",
    techStack: [
      "PHP",
      "MySQL",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "Stripe API",
      "PHPMailer",
      "XAMPP",
    ],
    githubUrl: "https://github.com/syed92809/CarRental.git",
    liveUrl: "",
    images: [
      "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    title: "Side Earn",
    description:
      "An educational platform with course creation tools, student enrollment, progress tracking, quiz system, and certificate generation. Supports video lectures and interactive assignments.",
    techStack: [
      "React Native",
      "Node.js",
      "MongoDB",
      "REST API",
      "Render",
      "Bank Integration",
      "JavaScript",
    ],
    githubUrl: "https://github.com/syed92809/SideEarn-Frontend",
    liveUrl: "",
    images: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    ],
  },
];

const FullStackProject = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentProject = fullStackProjects[currentProjectIndex];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + currentProject.images.length) % currentProject.images.length
    );
  };

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % fullStackProjects.length);
    setCurrentImageIndex(0); // Reset image index when changing projects
  };

  const prevProject = () => {
    setCurrentProjectIndex(
      (prev) => (prev - 1 + fullStackProjects.length) % fullStackProjects.length
    );
    setCurrentImageIndex(0); // Reset image index when changing projects
  };

  return (
    <section id="full-stack-project" className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-block">
            <div className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Portfolio
            </div>
          </div>
          <h2 className="mb-4">Full-Stack Applications</h2>
          <p className="text-muted-foreground text-lg">
            Explore few of my full-stack development projects
          </p>
        </div>

        <div className="relative mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-medium">{currentProject.title}</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={prevProject}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                <span>Previous</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={nextProject}
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          <div className="text-sm text-muted-foreground mb-4">
            Project {currentProjectIndex + 1} of {fullStackProjects.length}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video bg-accent rounded-xl overflow-hidden shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center transition-standard"
              style={{
                backgroundImage: `url(${currentProject.images[currentImageIndex]})`,
              }}
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
              {currentProject.images.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-standard cursor-pointer",
                    index === currentImageIndex ? "bg-white" : "bg-white/40"
                  )}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          <Card className="border bg-card p-8 h-full shadow-sm">
            <h3 className="text-2xl font-medium mb-4">
              {currentProject.title}
            </h3>

            <p className="text-muted-foreground mb-6">
              {currentProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {currentProject.techStack.map((tech) => (
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
              {currentProject.githubUrl && (
                <Button
                  variant="outline"
                  className="rounded-full flex items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-standard"
                  onClick={() =>
                    window.open(currentProject.githubUrl, "_blank")
                  }
                >
                  <Github className="h-4 w-4" />
                  <span>View Code</span>
                </Button>
              )}

              {currentProject.liveUrl && (
                <Button
                  className="rounded-full flex items-center gap-2 bg-primary hover:bg-primary/90 text-white transition-standard"
                  onClick={() => window.open(currentProject.liveUrl, "_blank")}
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FullStackProject;
