import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
interface AboutSectionProps {
  isLoaded: boolean;
}
export function AboutSection({
  isLoaded
}: AboutSectionProps) {
  return <section className={`py-20 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{
    transitionDelay: '800ms'
  }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="w-full md:w-2/5">
            <motion.div whileHover={{
            scale: 1.03
          }} transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}>
              <Avatar className="h-full w-full">
                <AvatarImage src="/lovable-uploads/3289f3a6-2eb1-4a4e-81f8-166cba8455d7.png" alt="Edouardos" className="h-full w-full object-cover" />
                <AvatarFallback className="text-4xl">ES</AvatarFallback>
              </Avatar>
            </motion.div>
          </div>
          
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-4">
              I'm a Technology Consultant and AI Engineer, focused on building intelligent, 
              cloud-native solutions that create measurable business value.
            </p>
            <p className="text-muted-foreground mb-6">
              From founding NegotAI to delivering SaaS systems in finance and conducting IT audits at PwC, 
              I've worked across the full spectrum of tech strategy—from hands-on development to product positioning.
            </p>
            <p className="text-muted-foreground mb-6">
              With expertise in GPT, Python, cloud platforms (AWS, Supabase), and enterprise systems, 
              I help organizations accelerate digital transformation with clarity and confidence.
            </p>
            
            

            <motion.div className="mt-8" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1
          }}>
              <Button asChild variant="outline">
                <Link to="/about" className="inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
}