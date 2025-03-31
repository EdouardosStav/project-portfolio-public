
import { motion } from "framer-motion";

interface ProjectFiltersProps {
  allTags: string[];
  activeFilter: string;
  handleFilterChange: (tag: string) => void;
}

export function ProjectFilters({ allTags, activeFilter, handleFilterChange }: ProjectFiltersProps) {
  return (
    <motion.div 
      className="flex flex-wrap justify-center mb-12 gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {allTags.map((tag, index) => (
        <motion.button
          key={tag}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            activeFilter === tag
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
          onClick={() => handleFilterChange(tag)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.3 }}
        >
          {tag}
        </motion.button>
      ))}
    </motion.div>
  );
}
