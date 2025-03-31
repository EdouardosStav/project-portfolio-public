
import { PageTransition } from "@/components/page-transition";
import { projects } from "@/data/projects";
import { ProjectsHeader } from "@/components/projects/ProjectsHeader";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { useProjectsLogic } from "@/components/projects/useProjectsLogic";

const Projects = () => {
  // Filter out hidden projects
  const visibleProjects = projects.filter(project => !project.hidden);
  
  const {
    activeFilter,
    filteredProjects,
    allTags,
    trackProjectClick,
    handleFilterChange
  } = useProjectsLogic(visibleProjects);

  return (
    <PageTransition>
      <div className="container mx-auto px-4 md:px-6 pt-28 md:pt-32">
        <section className="py-12">
          <ProjectsHeader />
          
          <ProjectFilters 
            allTags={allTags} 
            activeFilter={activeFilter} 
            handleFilterChange={handleFilterChange} 
          />

          <ProjectsGrid 
            projects={filteredProjects} 
            trackProjectClick={trackProjectClick} 
          />
        </section>
      </div>
    </PageTransition>
  );
};

export default Projects;
