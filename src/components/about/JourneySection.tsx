
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

interface JourneySectionProps {
  isLoaded: boolean;
}

export function JourneySection({ isLoaded }: JourneySectionProps) {
  const journeyItems = [
    {
      period: "2024—Present",
      role: "Founder",
      location: "NegotAI – Remote (Switzerland)",
      achievements: [
        "Designed and launched an AI-powered SaaS for salary negotiation using GPT and real-time market data",
        "Led technical architecture, backend development, and cloud infrastructure (Supabase, OpenAI)",
        "Built scalable infrastructure for secure AI interactions and negotiation logic",
        "Defined GTM strategy positioning NegotAI at the intersection of AI and career tech"
      ]
    },
    {
      period: "2022—2024",
      role: "Full Stack Developer",
      location: "Fenergo – Dublin, Ireland",
      achievements: [
        "Developed scalable APIs for onboarding and regulatory workflows in the fintech sector",
        "Reduced client onboarding time by 20% through tailored API solutions",
        "Optimized CI/CD pipelines in Azure DevOps, cutting deployment time by 25%",
        "Contributed to the rollout of cloud-ready solutions across global banking clients"
      ]
    },
    {
      period: "2022",
      role: "Software Engineer Intern",
      location: "Udemy – Dublin, Ireland",
      achievements: [
        "Collaborated with UX/product teams to improve interface engagement",
        "Conducted A/B testing and usage analytics to optimize feature adoption",
        "Worked cross-functionally in a fast-paced SaaS environment"
      ]
    },
    {
      period: "2020—2021",
      role: "Systems & Data Assurance Associate",
      location: "PwC – Athens, Greece",
      achievements: [
        "Performed IT audits for clients including Coca-Cola HBC and Cosmote",
        "Supported risk assessments on infrastructure, access control, and compliance",
        "Used tools like Excel, SAP, and Alteryx to support reporting and GRC analysis"
      ]
    }
  ];

  return (
    <motion.div 
      className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDelay: '550ms' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h2 className="text-2xl font-semibold mb-6">My Journey</h2>
      
      <div className="hidden md:block">
        <div className="space-y-8">
          {journeyItems.map((item, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
            >
              <Card className="glass-card border-border/30">
                <CardContent className="p-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-primary">{item.period}</span>
                      <Separator className="w-4 bg-primary/30" />
                      <h3 className="text-lg font-medium">{item.role}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{item.location}</p>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
              {index < journeyItems.length - 1 && (
                <div className="absolute left-6 top-[5.5rem] bottom-0 w-px bg-border/30 h-8"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="md:hidden space-y-4">
        {journeyItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
            className="glass-card p-4 rounded-xl border-border/30"
          >
            <div>
              <div className="mb-2">
                <span className="text-xs font-medium text-primary">{item.period}</span>
                <h3 className="text-base font-medium">{item.role}</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{item.location}</p>
              <ul className="space-y-1">
                {item.achievements.map((achievement, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-1">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
