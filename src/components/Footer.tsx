import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <span className="font-medium text-xl">
              <span className="text-primary">Software </span>Developer
            </span>
          </div>

          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary"
              onClick={() =>
                window.open("https://github.com/syed92809", "_blank")
              }
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/syed-faizan-56b5a5246/",
                  "_blank"
                )
              }
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary"
              onClick={() =>
                window.open("https://twitter.com/syed92809", "_blank")
              }
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary"
              onClick={() => window.open("mailto:contact@example.com")}
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <ul className="flex flex-wrap gap-6 text-sm text-muted-foreground justify-center">
            <li>
              <button
                onClick={() => {
                  const element = document.getElementById("projects");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-foreground transition-standard"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const element = document.getElementById("skills");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-foreground transition-standard"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-foreground transition-standard"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
