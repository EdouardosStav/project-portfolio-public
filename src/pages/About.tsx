
import { useState, useEffect } from "react";
import { AboutHeader } from "@/components/about/AboutHeader";
import { AboutStory } from "@/components/about/AboutStory";
import { SkillsSection } from "@/components/about/SkillsSection";
import { CertificationsSection } from "@/components/about/CertificationsSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { JourneySection } from "@/components/about/JourneySection";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-6 pt-28 md:pt-32">
      <section className="py-12">
        <AboutHeader isLoaded={isLoaded} />

        <div className="max-w-4xl mx-auto">
          <AboutStory isLoaded={isLoaded} />
          <SkillsSection isLoaded={isLoaded} />
          <CertificationsSection isLoaded={isLoaded} />
          <ValuesSection isLoaded={isLoaded} />
          <JourneySection isLoaded={isLoaded} />
        </div>
      </section>
    </div>
  );
};

export default About;
