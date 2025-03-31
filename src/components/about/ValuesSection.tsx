
import { GraduationCap, Heart, Lightbulb, Award } from "lucide-react";

interface ValuesSectionProps {
  isLoaded: boolean;
}

export function ValuesSection({ isLoaded }: ValuesSectionProps) {
  const values = [
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Impact",
      description: "I focus on creating solutions that deliver measurable business value and meaningful transformation."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Innovation",
      description: "I constantly explore emerging technologies to craft unique, forward-thinking digital experiences."
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "Growth",
      description: "I embrace continuous learning to stay at the forefront of technology and business strategy."
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Quality",
      description: "I believe in crafting robust, scalable solutions that stand the test of time and changing requirements."
    }
  ];

  return (
    <div 
      className={`mb-12 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDelay: '500ms' }}
    >
      <h2 className="text-2xl font-semibold mb-6">My Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {values.map((value, index) => (
          <div 
            key={value.title} 
            className="glass-card p-6 rounded-xl"
            style={{ 
              animationDelay: `${600 + index * 100}ms`,
              animation: isLoaded ? 'fade-in 0.5s ease-out forwards' : 'none'
            }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-medium">{value.title}</h3>
            </div>
            <p className="text-muted-foreground">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
