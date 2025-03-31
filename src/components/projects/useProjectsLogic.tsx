
import { useState, useEffect } from "react";
import { Project } from "@/data/projects";

export function useProjectsLogic(visibleProjects: Project[]) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(visibleProjects);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Track link clicks
  const trackProjectClick = (projectName: string, linkType: 'demo' | 'repo') => {
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible('Project Link Click', { 
        props: { project: projectName, linkType: linkType } 
      });
    }
  };

  // Generate unique tags for filter from visible projects only
  const allTags = ["All", ...new Set(visibleProjects.flatMap((project) => project.tags))];

  const handleFilterChange = (tag: string) => {
    setActiveFilter(tag);
    
    if (tag === "All") {
      setFilteredProjects(visibleProjects);
    } else {
      const filtered = visibleProjects.filter((project) => project.tags.includes(tag));
      setFilteredProjects(filtered);
    }
  };

  return {
    isLoaded,
    activeFilter,
    filteredProjects,
    allTags,
    trackProjectClick,
    handleFilterChange
  };
}
