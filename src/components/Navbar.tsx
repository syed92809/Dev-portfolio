
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setMobileMenuOpen(false);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full py-4 z-50 transition-standard",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a 
          href="#"
          className="font-medium text-xl tracking-tight hover:opacity-80 transition-standard"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="text-primary">Dev</span>Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {["projects", "skills", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm font-medium opacity-80 hover:opacity-100 transition-standard link-underline"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-white rounded-full px-6 hover:translate-y-[-2px] hover:shadow-md transition-standard"
          >
            Get In Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-background z-40 md:hidden transition-standard overflow-hidden",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className={cn(
          "flex flex-col items-center justify-center space-y-8 h-full transition-all duration-500 transform",
          mobileMenuOpen ? "translate-y-0" : "translate-y-10"
        )}>
          {["projects", "skills", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-lg font-medium opacity-80 hover:opacity-100 transition-standard"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-white rounded-full px-8 py-6 mt-4 hover:translate-y-[-2px] hover:shadow-md transition-standard"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
