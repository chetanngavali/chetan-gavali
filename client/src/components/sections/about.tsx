import React from "react";
import { motion } from "framer-motion";
import { Shield, Code, Camera, Palette, Brain, Users } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import profileImage from "@/assets/profilephoto.png";

export function About() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const skills = [
    { icon: Shield, label: "SECURITY", color: "text-primary" },
    { icon: Code, label: "DEVELOPMENT", color: "text-secondary" },
    { icon: Camera, label: "PHOTOGRAPHY", color: "text-accent" },
    { icon: Palette, label: "DESIGN", color: "text-primary" },
    { icon: Brain, label: "STRATEGY", color: "text-secondary" },
    { icon: Users, label: "LEADERSHIP", color: "text-accent" },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-card" data-testid="about-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={profileImage}
              alt="Chetan Gavali Professional Photo"
              className="w-full max-w-md mx-auto rounded-2xl neon-border hover-tilt"
              data-testid="profile-image"
            />

            {/* Floating Tech Icons */}
            <div className="absolute -top-4 -right-4 p-3 bg-primary rounded-xl animate-float">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="absolute -bottom-4 -left-4 p-3 bg-secondary rounded-xl animate-float" style={{ animationDelay: "1s" }}>
              <Camera className="w-6 h-6 text-secondary-foreground" />
            </div>
            <div className="absolute top-1/2 -right-8 p-3 bg-accent rounded-xl animate-float" style={{ animationDelay: "2s" }}>
              <Palette className="w-6 h-6 text-accent-foreground" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-tech font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ABOUT ME
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                I am a B.Tech Computer Engineering student passionate about technology, cybersecurity, and front-end development. With a strong interest in building modern digital systems, I enjoy exploring innovative approaches that make technology more reliable and secure.
              </p>
              <p>
                My goal is to create efficient and user-friendly digital solutions that combine security with creativity. Through continuous learning and problem-solving, I strive to contribute to the development of impactful applications that improve user experience and ensure data safety.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-4 glass-effect rounded-lg text-center hover-tilt"
                  data-testid={`skill-${skill.label.toLowerCase()}`}
                >
                  <skill.icon className={`${skill.color} w-8 h-8 mx-auto mb-2`} />
                  <div className="font-semibold">{skill.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
