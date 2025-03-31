
import { motion } from "framer-motion";
import { Briefcase, Cloud } from "lucide-react";

interface CertificationsSectionProps {
  isLoaded: boolean;
}

export function CertificationsSection({
  isLoaded
}: CertificationsSectionProps) {
  const certifications = [{
    title: "AWS Cloud Practitioner",
    provider: "Amazon Web Services",
    icon: <Cloud className="h-4 w-4" />
  }, {
    title: "Digital Product Management",
    provider: "UCD Professional Academy",
    icon: <Briefcase className="h-4 w-4" />
  }];

  return <motion.div className={`mb-12 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{
    transitionDelay: '450ms'
  }} initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: 0.5
  }}>
      <h2 className="text-2xl font-semibold mb-6">Courses & Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {certifications.map((cert, index) => <motion.div key={cert.title} whileHover={{
        scale: 1.03
      }} transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }} className="px-4 py-3 rounded-xl bg-secondary/80 text-secondary-foreground flex items-center gap-3" style={{
        animationDelay: `${500 + index * 100}ms`,
        animation: isLoaded ? 'fade-in 0.5s ease-out forwards' : 'none'
      }}>
            <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center">
              {cert.icon}
            </div>
            <div>
              <p className="font-medium">{cert.title}</p>
              <p className="text-xs text-muted-foreground">{cert.provider}</p>
            </div>
          </motion.div>)}
      </div>
      <div className="mt-4 text-sm text-muted-foreground">
        
        
      </div>
    </motion.div>;
}
