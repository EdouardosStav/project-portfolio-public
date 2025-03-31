
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectTag } from "@/components/project-tag";

export function ProjectsSection() {
  // Filter featured projects that are not hidden
  const featuredProjects = projects.filter(project => project.featured && !project.hidden);
  
  return <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work across web development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="group glass-card rounded-xl overflow-hidden hover:shadow-md transition-all" 
              whileHover={{ y: -5 }} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <div className="block">
                <Link to={`/projects/${project.slug}`} className="block">
                  <div className="aspect-video w-full bg-secondary/30 flex items-center justify-center overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        width="512"
                        height="512"
                        className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                        loading="lazy" 
                        decoding="async"
                      />
                    ) : <Github size={48} className="text-muted-foreground/40" />}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    {project.subtitle && (
                      <p className="text-sm italic text-muted-foreground mb-3">
                        {project.subtitle}
                      </p>
                    )}
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map(tag => <ProjectTag key={tag} tag={tag} />)}
                      {project.tags.length > 3 && <span className="px-2 py-1 text-xs rounded-full bg-secondary/80 text-secondary-foreground">
                          +{project.tags.length - 3}
                        </span>}
                    </div>
                  </div>
                </Link>
                
                <div className="flex items-center px-6 pb-6">
                  {project.repoUrl && (
                    <Button variant="ghost" size="sm" className="group/btn" asChild>
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Github className="h-4 w-4 mr-1" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button variant="ghost" size="sm" className="ml-2" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/projects" className="group flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>;
}
