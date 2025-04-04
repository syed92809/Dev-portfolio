import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// Data for multiple full-stack projects
const fullStackProjects = [
  {
    title: "Only Halal",
    description:
      "A halal-certified food delivery platform with React frontend, Node.js backend, and MongoDB database. Features include halal certification verification, prayer time integration, restaurant filtering by halal standards, real-time order tracking, and secure payment gateway. All meals are sourced from certified halal providers with full audit trails.",
    techStack: [
      "React Native",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Context",
      "Stripe API",
      "JWT",
      "AWS",
    ],
    githubUrl: "https://github.com/syed92809/onlyhalal.git",
    liveUrl: "https://only-halal.com/",
    images: [
      "https://media-hosting.imagekit.io/4a4fce2b95ee46ee/1.PNG?Expires=1838382569&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ma6d-F5T1eXse9KBduf9nYcKTVvXkEcrt97ZJJ91NVsnFaXxIEgjvfaU02tyoxIAlpbqTN9SmIpLjYmjiPoZtXPC5mdFvUCJf57lu-EhQW3U8V1JhAbel0emUI1GmLLg1y3jNPat-7wMthHHuhi-UcWpP-9TpDg09eDecE2W2OkmIe3JLYx9WYUMgzBv2-WDBU1XrLKMrlvHQtbFcutzaUoFCqf1B4pVFuuiBTFSdxzKRWq2X1OR2jhSnIKAqZ-YG9WWkVBJb~iRF9tq7zlBe1OgLUXGgwKVEPc4Oa2QbUDcywjUXa3ErckoSBMJX4mLBcbr2rG7ElLfZtEAT8lWJA__",
      "https://media-hosting.imagekit.io/cb9c525bd10f47c8/2.PNG?Expires=1838382739&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PqQy7jyEvVPvd2Bso7T7khDHZghg0KkXuIN1GFSYkLsDzsfuCt0uLtw3g3IyqXrZpXxt8hvxGDFRXXos683571Q7tI28Mh1POgRb~TR1E5P5ijHsiiIa0mrSZ1jAYifWmAhF2WcOpHOK336VYu-hE8GPtvQHCzyg0mEhllGnmrkaUp~0ZZ-cbKMlJsxtYmRUptLE5ogUJ5uqMDy8DwCm8uISJRRCX-xEjYjj4zSBncz6sUDepWrtAIrXsXai1w7ZAveQjrlZyKnGvvWEIIqoH6x69dusqWOYUB8gnuxxdaqqfbGxao1L-4SpxGsLmDH5rSjWoTYjF9AusYbmdodXCw__",
    ],
  },
  {
    title: "Legal Ease",
    description:
      "AI-powered legal assistance platform connecting users with specialized lawyers. Features include AI case analysis, lawyer matching algorithm, document automation, video consultation scheduling, and smart contract review. The AI chatbot provides preliminary legal suggestions and helps users draft legal documents.",
    techStack: [
      "Flutter",
      "Firebase",
      "Firestore",
      "Flask",
      "Python",
      "AWS",
      "React",
    ],
    githubUrl: "https://github.com/syed92809/lawsphere-.git",
    liveUrl: "",
    images: [
      "https://media-hosting.imagekit.io/88112a71f9314ce9/3.PNG?Expires=1838382876&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EfRug~xtsjLldMar6P7u76xczDkSj4S5t71dt7kK2WznSzLjePDf1mvsyC1hVfDGPMZ07VMHTdstbSmCsawrD3gPiCk3lmr5pUkO3HfUDlyiVCO9OqQVM4YLWS7ZbvYqA3xDNwJFNFo3I5fe2QFB37AHDLTpmucuEYNw4C-PjA14BnkGBS~1uEtpuBMOFzSduEBfqhHHbn1EYW4kIRnf3MX1U~NIQnFvZXph5wNcvJOpK~CzWrMKRmVEO4LCgULy73LPTWRM5dO581wj-E6eKXLnN-jHIuKUbLCL7bHfnXWAwmH2-ZKcONZE-YQ7UPGh9nhOXkgUxqPrwNVxn3x1Sw__",
      "https://media-hosting.imagekit.io/3cf284b429644442/4.PNG?Expires=1838382876&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PlLZGgU8omfQkp0fYGIsmxZrObDL2BVrKbJm91V4cSlUyfeK5ZjfuXxE0aDiEgNr0-bUnvf1dHi5xDNtVtap4U3twuWSXv6UGt9VTYczKTrU3iPeqnI0CL-L~JtUJxx7Yhs0UbnDKBLB6GmnJdr25gooWoG1hwzG7XQkr-kSHm47gQ9d5oS49hcH9JRI7SQkNNHdTea01liMs8B-vTyaqE5XOEklzUVhSBwmrZ5q0Oth1a6DF5F9gM7gJme3C8jvpYFKqN58oM~IE5mLd5e5qBqYLyArAFLVzOzvi-oUBmxVnIlhsJCcPrDwBVgY4YMjNRvGnq9tRVPO3hvnE~7deA__",
      "https://media-hosting.imagekit.io/88112a71f9314ce9/3.PNG?Expires=1838382876&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EfRug~xtsjLldMar6P7u76xczDkSj4S5t71dt7kK2WznSzLjePDf1mvsyC1hVfDGPMZ07VMHTdstbSmCsawrD3gPiCk3lmr5pUkO3HfUDlyiVCO9OqQVM4YLWS7ZbvYqA3xDNwJFNFo3I5fe2QFB37AHDLTpmucuEYNw4C-PjA14BnkGBS~1uEtpuBMOFzSduEBfqhHHbn1EYW4kIRnf3MX1U~NIQnFvZXph5wNcvJOpK~CzWrMKRmVEO4LCgULy73LPTWRM5dO581wj-E6eKXLnN-jHIuKUbLCL7bHfnXWAwmH2-ZKcONZE-YQ7UPGh9nhOXkgUxqPrwNVxn3x1Sw__",
    ],
  },
  {
    title: "Rent4U",
    description:
      "Academic car rental platform built with PHP and MySQL. Features include vehicle inventory management, real-time booking system, user authentication, payment processing, and admin dashboard with reporting. Includes complete documentation with ER diagrams and UML models.",
    techStack: [
      "PHP",
      "MySQL",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "Stripe API",
      "PHPMailer",
      "XAMPP",
    ],
    githubUrl: "https://github.com/syed92809/CarRental.git",
    liveUrl: "",
    images: [
      "https://media-hosting.imagekit.io/a86e364e310d42ff/r1.png?Expires=1838382999&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fyXvSvaEaTc03nd6N3AueoQT5Lz0pFM6jVcWtNAES31xJlytxKyRhrKG0pU6KGuEtYsfZbAmh8jMBpoAcRKf8QF~2Wzx5QBBBOmDmsA56E45ywvESIpu3IaqsyMzqcA0ZyhOOL18YBD~F7eKAfbP0ga6X9zoWUQ1-SDzofFInoqQw0t5APgvAdRR5OCZOAPwEw56PtjPvzev7vblc~QcpLLvX9aXWjcCJp2iFYvHDbL9LqcOCzbhFr2JBXW~AD4lSgte4nBul3LxO0RSIg8--5V8NtDZzl1CRjpJrB0gZC0jqVjcoTPnLRyFwH2575~nDw8GU9R3L2oYxnjJh6F~Rw__",
      "https://media-hosting.imagekit.io/c406e4d9325a4db1/r4.png?Expires=1838383614&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MwlLSXJ7ul-T7uCgfF7y9hQgx6Mm7lpJfZA3q1w0ridUczpoiRcFAZ4O62ulIGioiDA3S3a~SdYQGixZvWHP9Jcvt6dDSRrUuDq7rhcpjfeyjw7QYulOOjSQrZvEWD2y3hVO~JuU5eQ~s3NFu3X0pW8bTTqjmSTGxadSxvUtLdnoi4pvDXOoN~C8lM7u7pxRFg1czycdDzUecgAJMPiuEgH--qpQ~iGZ3MtTWSZeE7iDh1PK1B5SvCKPSl9tXtLYqA~IJJUBhJZkukXSRvAyT5vYiKIETDwdh5S1fGolDW9TOD~RMnuisTMRJIY0lBg57elqrkDDa4w75KVrv4hlrg__",
      "https://media-hosting.imagekit.io/f34649d3b2f64e1d/r2.png?Expires=1838382999&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=c4D4oJTemtGxGNh~l28Mui7tNcPTjEfkXRBRlgiqTD-AzteInTJfeJID9ys5rjgP93rPV7Q~GXPczeImG01uhj0pCKEFfkxSnWXkjztTAbzPSVVftmJVeujV~44UklgitRuK0K6KrXt5ehKPqYYrdmzT-skkjKhU43yisIRwotS0YMTbcLM2RUNR1QrcxHqsmCy52bRNkmac7B6GzYmSwntLlc1bdTKqgSaoi-JWlild6Dc7nuGu3Zelxz-PFhQb8LpV07pkJ-rT~WAaXUHRG0b1QfBrmxMAcvm0JiQDEGOlAaCvvpcQFYdqmTus75CiaU5CnKqdLJcFpPtNJ1uAkQ__",
      "https://media-hosting.imagekit.io/fa5de71b4e984a06/r3.png?Expires=1838382999&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uNymPaQYyjFyeQxMZwNVo3PuBcypNi5gSuBVM2nAZ-n-IwLZONsiU8ADojjGSm-j-bhWbToVhXeNfl0FZyzXnXVI~vzAcJ-5zTQmJOkQT6uKqSylAUqHg3n46jcv8ye686JxOrgm8e-hRUJ8iedKdSxb1gj0-eyeWIIWaVFgjcopTLxqXi4MI85SmR4aA57w7OgphuwVk1jEdzMxHkL0q9s06f4wJoXEU1kfiaa8QCA~ulysqEvM-sxMZV5LWRwX4wwp1KaDw7kY3O0z5bR9iqprPOFBTuImOzz-dC30sO6PXXAkGVZtUcwAZ2DV7-j90prlkmRb6Hp-MFMA-mIdwQ__",
    ],
  },
  {
    title: "Side Earn",
    description:
      "An educational platform with course creation tools, student enrollment, progress tracking, quiz system, and certificate generation. Supports video lectures and interactive assignments.",
    techStack: [
      "React Native",
      "Node.js",
      "MongoDB",
      "REST API",
      "Render",
      "Bank Integration",
      "JavaScript",
    ],
    githubUrl: "https://github.com/syed92809/SideEarn-Frontend",
    liveUrl: "",
    images: [
      "https://media-hosting.imagekit.io/d01160503fb449d5/8.PNG?Expires=1838383073&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mhadfBehJ7p35TywkGjseRSNthbMi17Xg-nLyBXz~oYRbBAs~s39AS~7GPOeX4jhQHOLmXp0YOkmXtCzbyS-~dlJ0RqCLIX7-XAsJaU4WIz8-hZStUNhAdP2g0~g1Rxf~PaocWU5N1OlU9SMx9UdjYfdcwRFAfYJc7OGDEjNZ9WnmD24liQq-aZYEoYK~YKanHRiz1orwUz8OWP9ZwseX0fDmVhy-Wb8HRVv3gCD3mMv5lvo6vM9TerxOLjw-cKvR721qshkYcGVqs0qpNQZ3Z-22dxNrPlMajhct0U7dmvMFAeLc9rISsU5JC9deE11S6D9M9c92Mt3BrKmJPMEUA__",
      "https://media-hosting.imagekit.io/88cca99b4cf34be5/7.PNG?Expires=1838383073&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MY-MZ-onE7ZRvYW8lIAz~zLXJlNSBIgXFqU-anCjHFzILCqr5wRWZCcCpblEaQRHIJHHL-RV3~DfhPTJaB24UJxpVHsBGeGRfIFjfES2ZsbWg~lVu9AD~9a~cFQmoQJBKnQB-2OLFQ34xykfqbczBA4iEXn0R9QgLLPjgWS4NQfODSmCtIkUq3VNXCzs8AKRRp0MPLTLwZp-Bhe3ve5w~MOhhiyPRNF69e5wV2Blmlic--4S~jP1IHX5DXP7IRwy8vVvlrbhElkcxOwQw57VBYx4gAYmQ6-dCHuyF1p6quXcbkLFOFzdFwF8IS-DV3u63JZwiZdrkWONSYlFYj-yPQ__",
      "https://media-hosting.imagekit.io/3c273a57dc7a4b31/6.PNG?Expires=1838383073&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=D7gM6vuiOsOr8l5YFp2Krt-fcR8Ky3cwyiQ~2CR5FRZecgQJVb8~nmN7P0i6~M9qArbcKKiURcrtQ51CgXb1ITaPtBxSdC4jPRsNEAiSJR6UfLgfjbi6VCgWU8fPZkelF5kaHdFgRUV0QZhp8C9qvHwLcxrQJhtEfJ2~SIOh-J9V5ikwhiVqncr1tVSpNj-aFDwA8nEEHa6R2rbiIyAiR4llqx7EctuMMAwoCx4~YUvwT42SncGMqVe5AnmjO7Y3R7b~smAhQALsUC4ZKhNPxD2~wPnLNe4KPNDW-XxAl8y6Kh6gflr0huzkljkGRzaOQVC28KGWoSa9lj2NtUh1zA__",
    ],
  },
];

const FullStackProject = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const currentProject = fullStackProjects[currentProjectIndex];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + currentProject.images.length) % currentProject.images.length
    );
  };

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % fullStackProjects.length);
    setCurrentImageIndex(0);
  };

  const prevProject = () => {
    setCurrentProjectIndex(
      (prev) => (prev - 1 + fullStackProjects.length) % fullStackProjects.length
    );
    setCurrentImageIndex(0);
  };

  return (
    <section id="full-stack-project" className="py-24 bg-background">
      {isFullScreen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full"
              onClick={() => setIsFullScreen(false)}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <img
              src={currentProject.images[currentImageIndex]}
              alt={`${currentProject.title} screenshot ${
                currentImageIndex + 1
              }`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
              {currentProject.images.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-standard cursor-pointer",
                    index === currentImageIndex ? "bg-white" : "bg-white/40"
                  )}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="section-container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-block">
            <div className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Portfolio
            </div>
          </div>
          <h2 className="mb-4">Full-Stack Applications</h2>
          <p className="text-muted-foreground text-lg">
            Explore few of my full-stack development projects
          </p>
        </div>

        <div className="relative mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-medium">{currentProject.title}</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={prevProject}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                <span>Previous</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={nextProject}
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          <div className="text-sm text-muted-foreground mb-4">
            Project {currentProjectIndex + 1} of {fullStackProjects.length}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div
            className="relative aspect-video bg-accent rounded-xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => setIsFullScreen(true)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-standard"
              style={{
                backgroundImage: `url(${currentProject.images[currentImageIndex]})`,
              }}
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-standard flex items-center justify-between px-4">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/20 hover:bg-white/40 text-white rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="bg-white/20 hover:bg-white/40 text-white rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
              {currentProject.images.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-standard cursor-pointer",
                    index === currentImageIndex ? "bg-white" : "bg-white/40"
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                />
              ))}
            </div>
          </div>

          <Card className="border bg-card p-8 h-full shadow-sm">
            <h3 className="text-2xl font-medium mb-4">
              {currentProject.title}
            </h3>

            <p className="text-muted-foreground mb-6">
              {currentProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {currentProject.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-accent text-accent-foreground font-normal"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4">
              {currentProject.githubUrl && (
                <Button
                  variant="outline"
                  className="rounded-full flex items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-standard"
                  onClick={() =>
                    window.open(currentProject.githubUrl, "_blank")
                  }
                >
                  <Github className="h-4 w-4" />
                  <span>View Code</span>
                </Button>
              )}

              {currentProject.liveUrl && (
                <Button
                  className="rounded-full flex items-center gap-2 bg-primary hover:bg-primary/90 text-white transition-standard"
                  onClick={() => window.open(currentProject.liveUrl, "_blank")}
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FullStackProject;
