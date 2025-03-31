
import { useState, useEffect } from "react";
import { PageTransition } from "@/components/page-transition";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { motion } from "framer-motion";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Improve performance by lazy loading non-critical resources
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        // This would be a good place to load non-critical resources
      });
    }
  }, []);

  return (
    <PageTransition>
      <motion.div 
        className="container mx-auto px-4 md:px-6 pt-28 md:pt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection isLoaded={isLoaded} />

        {/* Featured Projects Section */}
        <ProjectsSection />
      </motion.div>
    </PageTransition>
  );
};

export default Index;
