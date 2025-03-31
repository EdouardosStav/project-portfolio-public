
import { motion } from "framer-motion";

interface AboutHeaderProps {
  isLoaded: boolean;
}

export function AboutHeader({ isLoaded }: AboutHeaderProps) {
  return (
    <motion.div 
      className="max-w-3xl mx-auto text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>
      <motion.p 
        className="text-xl text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Building intelligent, cloud-native solutions that create measurable business value.
      </motion.p>
    </motion.div>
  );
}
