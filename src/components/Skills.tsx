import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Server,
  Cloud,
  Lock,
  BarChart,
  Layers,
  GitBranch,
} from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["JavaScript", "TypeScript", "Python", "PHP", "Java"],
  },
  {
    name: "Database Technologies",
    icon: <Database className="h-6 w-6" />,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Firebase"],
  },
  {
    name: "Backend Frameworks",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js/Express", "Flask", "FastAPI", "NestJS"],
  },
  {
    name: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    skills: [
      "AWS",
      "Docker",
      "CI/CD",
      "ECS",
      "ECR",
      "Load-balancing",
      "Render",
    ],
  },
  {
    name: "Security & Authentication",
    icon: <Lock className="h-6 w-6" />,
    skills: [
      "OAuth",
      "JWT",
      "HTTPS/TLS",
      "API Security",
      "Auth0",
      "Role-Based Access Control",
      "SSO",
      "Encryption",
    ],
  },
  {
    name: "API Design & Architecture",
    icon: <Layers className="h-6 w-6" />,
    skills: [
      "RESTful APIs",
      "Microservices",
      "WebSockets",
      "API Gateway",
      "Event-Driven",
    ],
  },
  {
    name: "Testing & Quality",
    icon: <BarChart className="h-6 w-6" />,
    skills: ["Unit Testing", "Integration Testing", "Jest", "Postman"],
  },
  {
    name: "Version Control & Collaboration",
    icon: <GitBranch className="h-6 w-6" />,
    skills: ["Git", "GitHub", "GitLab", "Code Review", "Jira", "Documentation"],
  },
];

const Skills = () => {
  const [visibleCategories, setVisibleCategories] = useState<SkillCategory[]>(
    []
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Gradually add skill categories with delay for a staggered animation effect
    const showCategories = async () => {
      if (isInView) {
        for (let i = 0; i < skillsData.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 100));
          setVisibleCategories((prev) => [...prev, skillsData[i]]);
        }
      }
    };

    showCategories();
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
    <section
      id="skills"
      className="py-24 relative overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_35%_at_60%_30%,hsl(var(--primary)/0.1),transparent)]" />

      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block">
            <div className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Expertise
            </div>
          </div>
          <h2 className="mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive look at my technical toolkit and proficiencies in
            backend development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleCategories.map((category, index) => (
            <div
              key={category.name}
              className={cn(
                "p-6 rounded-xl glass-card opacity-0",
                isInView && "animate-scale-in opacity-100"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-medium">{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-background border border-border hover:bg-accent transition-standard"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
