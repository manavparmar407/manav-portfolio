import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Instagram,
  MapPin,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manavparmar0407@gmail.com",
      link: "mailto:manavparmar0407@gmail.com",
      color: "primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7203920632",
      link: "tel:+917203920632",
      color: "accent",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rajkot, Gujarat, India",
      link: null,
      color: "primary",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "manavparmar0407",
      link: "https://linkedin.com/in/manavparmar0407",
    },
    {
      icon: Github,
      label: "GitHub",
      username: "manavparmar407",
      link: "https://github.com/manavparmar407",
    },
    {
      icon: Instagram,
      label: "Instagram",
      username: "@im.manavvvv",
      link: "https://instagram.com/im.manavvvv",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Soft glow background */}
      <div
        className="
        absolute inset-0 pointer-events-none
        opacity-15 dark:opacity-10
        bg-[radial-gradient(circle_at_top,hsla(var(--primary)/0.25),transparent)]
        dark:bg-[radial-gradient(circle_at_center,hsla(var(--accent)/0.2),transparent)]
      "
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Contact
            </span>

            <h2 className="text-4xl lg:text-5xl font-extrabold mt-3 mb-4">
              Let’s <span className="text-primary">Connect</span>
            </h2>

            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />

            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              I'm open to collaborations, opportunities, and conversations around AI & development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* CONTACT INFO SECTION */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>

              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className="
      p-6 rounded-2xl
      bg-card/70 dark:bg-background/40
      border border-border/70 dark:border-border/40
      backdrop-blur-xl
      shadow-card hover:shadow-hover
      hover:-translate-y-1
      transition-all animate-slide-up
    "
                >
                  <div className="flex items-center gap-4">

                    {/* ICON WRAPPER */}
                    <div
                      className={`
          w-14 h-14 rounded-xl flex items-center justify-center
          ${info.color === "primary"
                          ? "bg-primary/15 dark:bg-primary/25"
                          : "bg-accent/15 dark:bg-accent/25"
                        }
        `}
                    >
                      <info.icon
                        className={`
            h-7 w-7 
            ${info.color === "primary" ? "text-primary" : "text-accent"}
            dark:text-white
          `}
                      />
                    </div>

                    {/* TEXT */}
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {info.label}
                      </p>

                      {info.link ? (
                        <a
                          href={info.link}
                          className="
              font-semibold text-lg 
              hover:text-primary 
              transition
            "
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-lg dark:text-white">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}

            </div>

            {/* SOCIAL LINKS */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Social Media</h3>

              {socialLinks.map((social, index) => (
                <Card
                  key={index}
                  onClick={() => window.open(social.link, "_blank")}
                  className="
    p-6 cursor-pointer
    bg-card/70 dark:bg-background/40
    backdrop-blur-xl
    rounded-2xl
    border border-border/70 dark:border-border/40
    hover:-translate-y-1 
    shadow-lg hover:shadow-hover
    transition-all 
    animate-slide-up 
    group
  "
                  style={{ animationDelay: `${index * 0.12 + 0.3}s` }}
                >
                  <div className="flex items-center gap-4">

                    {/* ICON */}
                    <div className={`
      w-14 h-14 rounded-xl flex items-center justify-center transition-all
      ${social.color === "primary"
                        ? "bg-primary/15 dark:bg-primary/25"
                        : "bg-accent/15 dark:bg-accent/25"}
    `}>
                      <social.icon
                        className={`
          h-7 w-7
          ${social.color === "primary" ? "text-primary" : "text-accent"}
          dark:text-white
        `}
                      />
                    </div>

                    {/* TEXT */}
                    <div>
                      <p className="text-sm text-muted-foreground mb-1 dark:text-muted-foreground">
                        {social.label}
                      </p>

                      <p
                        className="
          font-semibold text-lg group-hover:text-primary
          dark:text-white dark:group-hover:text-white
        "
                      >
                        {social.username}
                      </p>
                    </div>

                  </div>
                </Card>
              ))}

              {/* CTA CARD */}
              <Card
                className="
    p-8 rounded-2xl
    bg-primary text-primary-foreground
    shadow-xl hover:-translate-y-1 transition-all

    dark:bg-card
    dark:text-card-foreground
  "
              >
                <h4 className="text-xl font-bold mb-2">Open to Opportunities</h4>

                <p className="text-primary-foreground/80 dark:text-muted-foreground mb-4">
                  Whether it's an internship, collaboration, or freelance opportunity —
                  feel free to contact me.
                </p>

                <Button
                  className="
      w-full bg-accent hover:bg-accent/90 text-accent-foreground
      dark:bg-accent dark:hover:bg-accent/90
    "
                  onClick={() =>
                    window.open(
                      'https://mail.google.com/mail/?view=cm&fs=1&to=manavparmar0407@gmail.com',
                      '_blank'
                    )
                  }
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