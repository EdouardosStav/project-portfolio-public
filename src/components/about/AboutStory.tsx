
interface AboutStoryProps {
  isLoaded: boolean;
}

export function AboutStory({ isLoaded }: AboutStoryProps) {
  return (
    <div 
      className={`glass-card p-8 rounded-xl mb-12 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDelay: '300ms' }}
    >
      <h2 className="text-2xl font-semibold mb-6">My Story</h2>
      <div className="space-y-4 text-muted-foreground">
        <p>
          I'm Edouardos, a consultant and engineer passionate about solving real-world problems through technology.
        </p>
        <p>
          With 4+ years of experience across AI, cloud engineering, and tech consulting, I've helped enterprises and 
          individuals make smarter decisions with data and automation.
        </p>
        <p>
          My journey blends hands-on development with business thinking—using AI not just to build smarter systems, 
          but to create value that actually matters.
        </p>
      </div>
    </div>
  );
}
