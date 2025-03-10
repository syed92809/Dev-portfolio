import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

const ProjectCard = ({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  image,
}: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={cn(
        "overflow-hidden border rounded-xl transition-standard h-full flex flex-col",
        "bg-background hover:shadow-md hover:border-primary/20",
        "transform hover:-translate-y-1"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="relative w-full pt-[56.25%] overflow-hidden border-b">
          <div
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-standard",
              isHovered ? "scale-105" : "scale-100"
            )}
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-medium mb-2">{title}</h3>

        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-accent text-accent-foreground font-normal"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="rounded-full flex items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-standard"
              onClick={() => window.open(githubUrl, "_blank")}
            >
              <Github className="h-4 w-4" />
              <span>Code</span>
            </Button>
          )}

          {liveUrl && (
            <Button
              size="sm"
              className="rounded-full flex items-center gap-2 bg-primary hover:bg-primary/90 text-white transition-standard"
              onClick={() => window.open(liveUrl, "_blank")}
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
