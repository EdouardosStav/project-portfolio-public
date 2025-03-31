
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ProjectTag } from "@/components/project-tag";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  trackProjectClick: (projectName: string, linkType: 'demo' | 'repo') => void;
}

export function ProjectCard({ project, trackProjectClick }: ProjectCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="glass-card rounded-xl overflow-hidden hover:shadow-md transition-all"
      variants={itemVariants}
      whileHover={{ y: -5 }}
    >
      <div className="block">
        <Link to={`/projects/${project.slug}`} className="block">
          <div className="aspect-video w-full bg-secondary/30 flex items-center justify-center overflow-hidden">
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <Github size={48} className="text-muted-foreground/40" />
            )}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            {project.subtitle && (
              <p className="text-sm italic text-muted-foreground mb-3">
                {project.subtitle}
              </p>
            )}
            <p className="text-muted-foreground mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <ProjectTag key={tag} tag={tag} />
              ))}
            </div>
          </div>
        </Link>
        
        <div className="flex items-center gap-3 px-6 pb-6">
          {project.repoUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1" 
              asChild 
              onClick={(e) => {
                e.stopPropagation();
                trackProjectClick(project.title, 'repo');
              }}
            >
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
          {project.demoUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1" 
              asChild 
              onClick={(e) => {
                e.stopPropagation();
                trackProjectClick(project.title, 'demo');
              }}
            >
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
