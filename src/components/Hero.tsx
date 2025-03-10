
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="min-h-[100vh] flex flex-col justify-center items-center relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_40%,hsl(var(--primary)/0.1),transparent)]" />
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 container max-w-7xl z-10 px-4 sm:px-6">
        <div className="lg:col-span-3 flex flex-col justify-center animate-fade-in" style={{animationDelay: "0.2s"}}>
          <div className="space-y-4">
            <div className="inline-block">
              <div className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full mb-4 animate-scale-in" style={{animationDelay: "0.6s"}}>
                Backend Developer
              </div>
            </div>
            
            <h1 className="text-balance">
              Crafting Robust <span className="text-primary">Backend</span> Solutions
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-[600px] text-balance">
              Specialized in building scalable APIs, database architectures, and server-side applications that power exceptional user experiences.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-scale-in" style={{animationDelay: "0.8s"}}>
            <button 
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:translate-y-[-2px] hover:shadow-md transition-standard"
            >
              View My Work
            </button>
            
            <button 
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-input bg-background hover:bg-muted px-6 py-3 rounded-full font-medium transition-standard"
            >
              Contact Me
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-2 flex items-center justify-center">
          <div className={cn(
            "w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] relative animate-float",
            "rounded-full bg-gradient-to-r from-primary/20 to-accent/20",
            "flex items-center justify-center"
          )}>
            <div className="absolute inset-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/40 flex items-center justify-center">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-medium text-primary">10+ Projects</h3>
                <p className="text-sm text-muted-foreground">
                  From microservices to databases
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToProjects}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulsate"
        aria-label="Scroll to projects"
      >
        <ArrowDown className="w-8 h-8 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;
