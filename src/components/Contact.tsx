import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Instagram, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manavparmar0407@gmail.com",
      link: "mailto:manavparmar0407@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7203920632",
      link: "tel:+917203920632",
      color: "accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rajkot, Gujarat, India",
      link: null,
      color: "primary"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "manavparmar0407",
      link: "https://linkedin.com/in/manavparmar0407",
      color: "primary"
    },
    {
      icon: Github,
      label: "GitHub",
      username: "manavparmar407",
      link: "https://github.com/manavparmar407",
      color: "primary"
    },
    {
      icon: Instagram,
      label: "Instagram",
      username: "@im.manavvvv",
      link: "https://instagram.com/im.manavvvv",
      color: "accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat about tech!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="p-6 shadow-card hover:shadow-hover transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${
                      info.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                    } flex items-center justify-center flex-shrink-0`}>
                      <info.icon className={`h-6 w-6 ${
                        info.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="font-semibold hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Social Media</h3>
              
              {socialLinks.map((social, index) => (
                <Card 
                  key={index}
                  className="p-6 shadow-card hover:shadow-hover transition-all animate-slide-up group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                  onClick={() => window.open(social.link, '_blank')}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${
                      social.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-accent/10 group-hover:bg-accent/20'
                    } flex items-center justify-center flex-shrink-0 transition-colors`}>
                      <social.icon className={`h-6 w-6 ${
                        social.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{social.label}</p>
                      <p className="font-semibold group-hover:text-primary transition-colors">
                        {social.username}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
              
              {/* CTA Card */}
              <Card className="p-6 gradient-hero text-white shadow-card">
                <h4 className="text-xl font-bold mb-2">Open to Opportunities</h4>
                <p className="text-white/80 mb-4">
                  Interested in internships, collaborations, or learning opportunities in AI & Data Science
                </p>
                <Button 
                  className="w-full bg-accent hover:bg-accent/90"
                  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=manavparmar0407@gmail.com', '_blank')}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Me an Email
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
