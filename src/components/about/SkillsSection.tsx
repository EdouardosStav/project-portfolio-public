
import { useState, useEffect } from "react";

interface SkillsSectionProps {
  isLoaded: boolean;
}

export function SkillsSection({ isLoaded }: SkillsSectionProps) {
  const skills = [
    "AI Solutions", "Cloud Architecture", "Software Engineering", 
    "Business Strategy", "Digital Transformation", "Data Analytics",
    "Machine Learning", "Technology Consulting", "GPT & LLMs", 
    "AI Product Development", "Python", "AWS", "Azure"
  ];

  return (
    <div 
      className={`mb-12 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDelay: '400ms' }}
    >
      <h2 className="text-2xl font-semibold mb-6">Skills & Expertise</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div 
            key={skill}
            className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
            style={{ 
              animationDelay: `${index * 50}ms`,
              animation: isLoaded ? 'fade-in 0.5s ease-out forwards' : 'none'
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
