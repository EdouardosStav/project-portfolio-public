
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

interface ProjectsGridProps {
  projects: Project[];
  trackProjectClick: (projectName: string, linkType: 'demo' | 'repo') => void;
}

export function ProjectsGrid({ projects, trackProjectClick }: ProjectsGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          trackProjectClick={trackProjectClick} 
        />
      ))}
    </motion.div>
  );
}
