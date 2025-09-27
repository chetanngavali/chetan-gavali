import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Award, ExternalLink, MapPin, LaptopIcon, Laptop, ShieldCheck, Trophy, GlobeLock, Lightbulb, Shield } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function Activities() {
  const { ref, isIntersecting } = useIntersectionObserver();


  const certifications = [ "1ST Place Winner – Mind Spark Hackathon (KBT Tech Fest 2K25)", "Certificate of Completion – 3-Day Hands-On Ethical Hacking Training", "Certificate of Participation – Digital Bharat, Surakshit Bharat Webinar", "Certificate of Completion – 14-Day Cyber Xplore Bootcamp", "Finalist – SUNHACKS-2K25 (International Hackathon)", "Online Tech Quiz Participant – Knowledge Institute of Technology", "Deloitte Cyber Job Simulation – Certificate of Completion", "Deloitte Australia - Technology Job Simulation", "Online Cybersecurity Meetup", "Global Annual Security Conference SKILL FORGE – 2025"];


  const activities = [
    //hackathons 
    {
      type: "Hackathon",
      title: "Mind Spark - KBTCOE Tech Fest 2K25",
      location: "Karmaveer Adv. Baburao Ganpatrao Thakare College of Engineering, Nashik",
      date: "2025",
      role: "Team Member - Pseudo Coders",
      description: "Collaborated with team 'Pseudo Coders' to secure 1st Rank in the Mind Spark Hackathon by tackling challenging problems and showcasing strong technical skills.",
      achievements: ["1st Rank", "Team Collaboration", "Technical Problem-Solving"],
      icon: Trophy,
      color: "warning",
    },
    {
      type: "Hackathon",
      title: "SUNHACKS-2K25 - International Hackathon",
      location: "Sandip University",
      date: "2025",
      role: "Team Member - StudyGenie",
      description: "Participated in SUNHACKS-2K25, an international hackathon, collaborating on StudyGenie – an AI-powered Study Companion. Contributed to developing features like AI Tutor Support, Quiz & Flashcard System, Study Analytics Dashboard, and Smart File Upload & Study Flow.",
      achievements: ["1st Rank", "Team Collaboration", "Technical Problem-Solving"],
      icon: Trophy,
      color: "warning",
    },

    //workshops
    {
      type: "Workshop",
      title: "3-Day Hands-On Training in Ethical Hacking",
      location: "TechnoHacks Solutions Pvt. Ltd.",
      date: "February 2025",
      role: "Participant",
      description: "Successfully completed a 3-Day Hands-On Training in Ethical Hacking, enhancing cybersecurity skills and exploring practical aspects of ethical hacking.",
      achievements: ["Certificate of Completion", "Enhanced Cybersecurity Skills"],
      icon: ShieldCheck,
      color: "success",
    },
    {
      type: "Workshop",
      title: "Cyber Security Workshop",
      location: "Thetechunique Academy",
      date: "December 2024",
      role: "Participant",
      description: "Attended a 2-hour workshop on Cyber Security conducted by Thetechunique Academy, covering fundamentals of cybersecurity, ethical hacking practices, and real-world security applications.",
      achievements: ["Learned Ethical Hacking Basics", "Received Certificate of Appreciation", "Explored Real-World Security Use Cases"],
      icon: ShieldCheck,
      color: "success",
    },
    {
      type: "Workshop",
      title: "Deloitte Australia - Technology Job Simulation",
      location: "Forage",
      date: "January 2025",
      role: "Participant",
      description: "Participated in the Deloitte Australia Technology Job Simulation workshop, gaining insights into real-world tech job scenarios and enhancing interview skills.",
      achievements: ["Interview Experience", "Technical Knowledge"],
      icon: ShieldCheck,
      color: "success",
    },
    {
      type: "Workshop",
      title: " Deloitte’s Cyber Job Simulation program (via Forage)",
      location: "Forage",
      date: "January 2025",
      role: "Participant",
      description: "Participated in the Deloitte’s Cyber Job Simulation program , gaining insights into real-world tech job scenarios and enhancing interview skills.",
      achievements: ["Interview Experience", "Technical Knowledge"],
      icon: ShieldCheck,
      color: "success",
    },

    //webinars
    {
      type: "Webinar",
      title: "Digital Bharat, Surakshit Bharat",
      location: "Online",
      date: "August 2025",
      role: "Participant",
      description: "Successfully participated in the special webinar 'Digital Bharat, Surakshit Bharat' focused on empowering a cyber-aware nation and strengthening India's digital security landscape.",
      achievements: ["Cyber Awareness", "Digital Security Insights"],
      icon: GlobeLock,
      color: "primary",
    },
    {
      type: "Webinar",
      title: "Online Cybersecurity Meetup",
      location: "Online",
      date: "August 2025",
      role: "Participant",
      description: "Successfully participated in the special webinar 'Digital Bharat, Surakshit Bharat' focused on empowering a cyber-aware nation and strengthening India's digital security landscape.",
      achievements: ["digital safety", "innovation, and tech security"],
      icon: GlobeLock,
      color: "primary",
    },

    //bootcamps
    {
      type: "Bootcamp",
      title: "Cyber Xplore - 14-Day Intensive Bootcamp",
      location: "Online",
      date: "August 2025",
      role: "Participant",
      description: "Successfully completed the 14-day Cyber Xplore Bootcamp, gaining practical experience in Ethical Hacking, Digital Forensics, OSINT, and Web Application Security. This program featured expert-led sessions and panel discussions that expanded my cybersecurity knowledge and problem-solving approach",
      achievements: ["Hands-on Cybersecurity Skills", "Ethical Hacking & OSINT Expertise", "Web App Security Knowledge", "Digital Forensics Practical Insights"],
      icon: Laptop,
      color: "info",
    },
    {
      type: "Bootcamp",
      title: "Global Annual Security Conference SKILL FORGE – 2025",
      location: "Online",
      date: "September 2025",
      role: "Participant",
      description: "Successfully completed the Global Annual Security Conference SKILL FORGE – 2025, gaining insights into the latest trends and challenges in cybersecurity. This conference featured expert speakers and interactive sessions that enhanced my understanding of the cybersecurity landscape.",
      achievements: ["Cybersecurity Trends Awareness", "Networking with Industry Experts", "Enhanced Problem-Solving Skills"],
      icon: Laptop,
      color: "info",
    },

    //competitions
    {
      type: "Competition",
      title: "Knowledge Institute of Technology (via Unstop)",
      location: "Online",
      date: "2025",
      role: "Participant - Represented K K Wagh Institute of Engineering Education and Research",
      description: "Successfully participated in the Online Tech Quiz Competition, enhancing technical knowledge, problem-solving skills, and quick decision-making through an engaging and competitive environment.",
      achievements: ["Quick Decision-Making", "Enhanced Technical Knowledge", "Web App Security Knowledge", "Problem-Solving Skills"],
      icon: Lightbulb,
      color: "secondary",
    },
    
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Hackathon":
        return "bg-primary/20 text-primary border-primary/30";
      case "Workshop":
        return "bg-secondary/20 text-secondary border-secondary/30";
      case "Webinar":
        return "bg-accent/20 text-success border-success/30";
      case "Competition":
        return "bg-primary/20 text-primary border-primary/30";
      case "Bootcamp":
        return "bg-primary/20 text-info border-info/30";  
      default:
        return "bg-primary/20 text-primary border-primary/30";
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case "warning":
        return "bg-primary/20 text-primary";
      case "success":
        return "bg-secondary/20 text-secondary";
      case "info":
        return "bg-accent/20 text-accent";
      case "primary":
        return "bg-accent/20 text-accent";
      case "secondary":
        return "bg-accent/20 text-accent";
      default:
        return "bg-primary/20 text-primary";
    }
  };

  return (
    <section
      id="activities"
      ref={ref}
      className="py-20 relative overflow-hidden scroll-mt-24"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.95))",
      }}
      data-testid="activities-section"
    >
      <div className="absolute inset-0 cyber-grid opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-tech font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            <Calendar className="inline-block w-10 h-10 mr-4" />
            ACTIVITIES & EVENTS
          </h2>
          <p className="text-xl text-muted-foreground">
            Sharing knowledge and building the cybersecurity community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect p-8 rounded-xl hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group hover-tilt"
              data-testid={`activity-card-${index}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getIconColor(activity.color)}`}>
                    <activity.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(activity.type)}`}>
                      {activity.type}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 group-hover:text-primary transition-colors">
                      {activity.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{activity.location}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{activity.date}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-secondary" />
                  <span className="text-secondary font-medium">{activity.role}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {activity.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Key Achievements:</h4>
                <div className="flex flex-wrap gap-2">
                  {activity.achievements.map((achievement, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/30"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-16 text-center"
                >
                  <h3 className="text-2xl font-semibold mb-8 ">CERTIFICATIONS</h3>
                  <div className="flex flex-wrap justify-center gap-6">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={cert}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                        className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                        data-testid={`cert-${cert.toLowerCase()}`}
                      >
                        {cert}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-effect p-8 rounded-xl inline-block">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Looking for a Support or Guide?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              I'm always excited to share knowledge and contribute to the cybersecurity community. 
              Whether it's a Competition, Workshop, or Hackathon, I'd love to be involved.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all hover-tilt"
              data-testid="contact-cta-button"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Get in Touch
            </a>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
}