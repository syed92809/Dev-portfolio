
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Mail, SendIcon, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully",
        description: "I'll get back to you as soon as possible!",
      });
      
      // Reset form after delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 2000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-accent/30">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-block">
              <div className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                Get In Touch
              </div>
            </div>
            <h2 className="mb-6">Let's Work Together</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Interested in collaborating on a project? Have a question about my work? 
              Feel free to reach out and I'll get back to you as soon as possible.
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <a 
                  href="mailto:contact@example.com" 
                  className="font-medium hover:text-primary transition-standard"
                >
                  contact@example.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-md mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle>Send Message</CardTitle>
                <CardDescription>
                  Fill out the form below to get in touch with me.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-input focus:border-primary focus:ring-1 focus:ring-primary"
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-input focus:border-primary focus:ring-1 focus:ring-primary"
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="bg-background border-input focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className={cn(
                      "w-full rounded-full bg-primary text-white hover:bg-primary/90 transition-standard",
                      "flex items-center justify-center gap-2 mt-4",
                      isSubmitted && "bg-green-600 hover:bg-green-600"
                    )}
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        <span>Sent Successfully!</span>
                      </>
                    ) : (
                      <>
                        <SendIcon className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
