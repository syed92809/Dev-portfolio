
import { useState, useEffect, useRef } from "react";
import ProjectCard, { ProjectProps } from "./ProjectCard";
import { cn } from "@/lib/utils";

// Sample project data
const projectsData: ProjectProps[] = [
  {
    title: "E-Commerce API",
    description: "A RESTful API backend for e-commerce applications with product management, user authentication, and order processing.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com/yourusername/ecommerce-api",
    liveUrl: "https://api.example.com",
    image: "https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Authentication Microservice",
    description: "A standalone authentication and authorization service with OAuth integration, role-based access control and secure token management.",
    techStack: ["Golang", "PostgreSQL", "Docker", "OAuth2"],
    githubUrl: "https://github.com/yourusername/auth-microservice",
    image: "https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Data Processing Pipeline",
    description: "Scalable data processing system with extract, transform, and load (ETL) capabilities for high-volume analytics.",
    techStack: ["Python", "Apache Kafka", "AWS Lambda", "Redis"],
    githubUrl: "https://github.com/yourusername/data-pipeline",
    liveUrl: "https://pipeline.example.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Real-time Chat Backend",
    description: "WebSocket-based backend service for real-time messaging with message persistence and delivery status tracking.",
    techStack: ["Node.js", "Socket.IO", "Redis", "MongoDB"],
    githubUrl: "https://github.com/yourusername/realtime-chat",
    image: "https://images.unsplash.com/photo-1574069945535-62d17abe8cad?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Content Management API",
    description: "Headless CMS API with content modeling, versioning, and asset management for multi-channel publishing.",
    techStack: ["Java", "Spring Boot", "MySQL", "Elasticsearch"],
    githubUrl: "https://github.com/yourusername/cms-api",
    liveUrl: "https://cms-api.example.com",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Payment Gateway Integration",
    description: "Secure payment processing service with multiple provider integrations, transaction monitoring, and reconciliation.",
    techStack: ["PHP", "Laravel", "MySQL", "Stripe API"],
    githubUrl: "https://github.com/yourusername/payment-gateway",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=800&auto=format&fit=crop"
  }
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<ProjectProps[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Gradually add projects with delay for a staggered animation effect
    const showProjects = async () => {
      if (isInView) {
        for (let i = 0; i < projectsData.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 150));
          setVisibleProjects((prev) => [...prev, projectsData[i]]);
        }
      }
    };
    
    showProjects();
  }, [isInView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="projects" className="py-24 bg-accent/30" ref={containerRef}>
      <div className="section-container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-block">
            <div className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Portfolio
            </div>
          </div>
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            Explore my backend development projects showcasing API design, database architecture, and system integration expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "opacity-0",
                isInView && "animate-scale-in opacity-100"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
