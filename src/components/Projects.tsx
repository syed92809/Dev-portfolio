import { useState, useEffect, useRef } from "react";
import ProjectCard, { ProjectProps } from "./ProjectCard";
import { cn } from "@/lib/utils";

// Sample project data
const projectsData: ProjectProps[] = [
  {
    title: "Alpha Notes APIs",
    description:
      "A RESTful API backend for smart note taking application with user management, user authentication, and payment processing.",
    techStack: ["Node.js", "Express", "MYSQL", "JWT", "AWS"],
    githubUrl: "",
    liveUrl: "",
    image:
      "https://images.pond5.com/black-music-notes-flying-musical-footage-170744184_iconl.jpeg",
  },
  {
    title: "Purchase Order APIs",
    description:
      "Enterprise-grade purchase order management system with automated procurement workflows, vendor integration, and real-time budget tracking. Features include multi-level approval processes, ERP system synchronization, purchase order lifecycle management, and comprehensive audit trails.",
    techStack: ["Node", "Express", "MYSQL", "Docker", "JWT", "AWS"],
    githubUrl: "",
    image:
      "https://images.ctfassets.net/txhaodyqr481/2j27ZABKs9UMdWGE8P6iYR/5aed251bacae52afb6342e8860add131/shutterstock_499948342.jpg?fm=jpg&q=85&fl=progressive",
  },
  {
    title: "Deal Scan APIs",
    description:
      "Scalable system with 10k+ stores entertaining with various latest deals, real-time updates, and store engagement features.",
    techStack: ["Python", "Apache Kafka", "AWS Lambda", "Redis"],
    githubUrl: "",
    liveUrl: "",
    image:
      "https://fs.npstatic.com/userfiles/7715851/image/QRCode-Scanner-Pro-484642258-w810h462.jpg",
  },
  {
    title: "AI Lawyer Assistant Chatbot",
    description:
      "AI-powered legal assistant using case law analysis and precedent prediction. Features document generation, legal research automation, and case outcome modeling with 85% prediction accuracy.",
    techStack: ["Flask", "Python", "Firebase", "AWS"],
    githubUrl: "https://github.com/syed92809/legal-issues-chatbot",
    image:
      "https://business.cornell.edu/wp-content/uploads/sites/2/2024/07/Robot-working-on-computer-600x400.jpg",
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Stripe payment processing service with multiple provider integrations, transaction monitoring.",
    techStack: ["Express", "Node", "MongoDB", "Stripe API"],
    githubUrl: "",
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=800&auto=format&fit=crop",
  },
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
          <h2 className="mb-4">Backend Projects</h2>
          <p className="text-muted-foreground text-lg">
            Explore my backend development projects showcasing API design,
            database architecture.
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
