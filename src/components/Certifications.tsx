import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar } from "lucide-react";

interface Certificate {
  title: string;
  organization: string;
  date: string;
  link: string;
}

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      title: "Python Programming",
      organization: "Coursera",
      date: "May 2024",
      link: "https://www.coursera.org/account/accomplishments/certificate/XYZ123"
    },
    {
      title: "HTML, CSS & JavaScript for Web Developers",
      organization: "Coursera",
      date: "July 2024",
      link: "https://www.coursera.org/account/accomplishments/certificate/ABC456"
    },
    {
      title: "Machine Learning",
      organization: "Google AI",
      date: "August 2024",
      link: "https://developers.google.com/machine-learning"
    },
    {
      title: "Data Visualization with Python",
      organization: "IBM Skills Network",
      date: "September 2024",
      link: "https://courses.ibm.com/certificates/DEF789"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and completed courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-accent/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedCert(cert)}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {cert.organization}
                    </p>
                    <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-md border-primary/30 shadow-2xl animate-fade-in">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              {selectedCert?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Issuing Organization</p>
                  <p className="text-base font-semibold">{selectedCert?.organization}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Date of Completion</p>
                  <p className="text-base font-semibold">{selectedCert?.date}</p>
                </div>
              </div>
            </div>
            <Button
              className="w-full bg-accent hover:bg-accent/90 shadow-lg group"
              onClick={() => window.open(selectedCert?.link, '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              View Live Certificate
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certifications;