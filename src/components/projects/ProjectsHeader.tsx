
import { motion } from "framer-motion";

export function ProjectsHeader() {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>
      <motion.p 
        className="text-xl text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        A collection of my work across web development, design, and more.
      </motion.p>
    </div>
  );
}
