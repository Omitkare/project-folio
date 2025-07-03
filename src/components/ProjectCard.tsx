import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  timeline: string;
  description: string;
  tags: string[];
  image?: string;
  githubLink?: string;
  liveLink?: string;
  icon?: React.ReactNode;
}

const ProjectCard = ({
  title = "Project Title",
  timeline = "Jan 2023 - Mar 2023",
  description = "A brief description of the project and what technologies were used. This is a placeholder for the actual project description.",
  tags = ["React", "TypeScript", "Tailwind"],
  image,
  githubLink,
  liveLink,
  icon,
}: ProjectCardProps) => {
  return (
    <Card className="bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
      {image && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            {icon && <div className="text-primary">{icon}</div>}
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          </div>
          <CardDescription className="text-xs text-muted-foreground">
            {timeline}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-foreground/80 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {(githubLink || liveLink) && (
        <CardFooter className="flex justify-end gap-2 pt-2">
          {githubLink && (
            <Button variant="ghost" size="sm" asChild>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          )}
          {liveLink && (
            <Button variant="ghost" size="sm" asChild>
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Live Demo</span>
              </a>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
