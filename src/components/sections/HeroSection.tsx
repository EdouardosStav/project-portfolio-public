import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { TypingAnimation } from "@/components/typing-animation";
import { motion } from "framer-motion";
export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const typingTexts = ["AI Engineer", "Technology Consultant", "Cloud Architect", "Digital Transformer"];
  return <section className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div className="inline-block px-3 py-1 mb-6 rounded-full bg-secondary text-secondary-foreground text-sm font-medium" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <span>Technology Consultant & AI Engineer</span>
        </motion.div>
        
        <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-tight mb-6" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }}>Designing AI and cloud systems that bridge deep tech execution with real business value</motion.h1>
        
        <motion.p className="text-xl text-muted-foreground mb-8" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }}>
          I help organizations solve real business problems through AI, cloud-native systems, and scalable digital products—bridging the gap between deep tech and business outcomes.
        </motion.p>
        
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.6
      }}>
          <motion.div whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <Button asChild size="lg" className="group">
              <Link to="/projects">
                View My Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        

        <motion.div className="flex items-center justify-center gap-4 mt-8" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.8
      }}>
          <motion.a href="https://github.com/EdouardosStav" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2" whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.95
        }}>
            <Github size={24} />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/edouardosstavrakis/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2" whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.95
        }}>
            <Linkedin size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>;
}