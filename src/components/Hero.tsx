import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-b from-hero-from to-hero-to">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Rep Nexus: Your Intelligent Engagement Hub
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Empowering reps with insights, coaching, and automation—all in one place.
        </p>
        <Button size="lg" className="gap-2 group">
          Explore Modules
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
