import React from "react";
import { motion } from "framer-motion";
import { Shield, Wifi, Bug, Eye, Cpu, DockIcon, LockKeyhole } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import cybersecurityBg from "@assets/generated_images/Cybersecurity_section_background_image_77b0d44d.png";

export function Cybersecurity() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const expertiseAreas = [
    {
      icon: Wifi,
      title: "Network Security",
      description: "Setting up firewalls and protecting networks from unauthorized access.",
      tools: ["Wireshark", "pfSense", "Nmap"],
      color : "primary",
    },
    {
      icon: Bug,
      title: "Penetration Testing",
      description: "Finding system vulnerabilities and suggesting ways to fix them.",
      tools: ["Metasploit", "Burp Suite", "Kali Linux"],
      color: "primary",
    },
    {
      icon: Eye,
      title: "Threat Detection",
      description: "Monitoring systems to identify unusual activity or potential attacks.",
      tools: ["Splunk", "ELK Stack", "OSSEC"],
      color: "primary",
    },
    {
    icon: Cpu,
    title: "AI & Automation",
    description: "Building AI programs and automating tasks to improve efficiency.",
    tools: ["Python", "CustomTkinter", "aiogram"],
    color: "accent",
  },
  {
    icon: DockIcon,
    title: "Digital Forensics",
    description: "Investigating digital incidents and recovering lost or compromised data.",
    tools: ["FTK", "Autopsy", "Wireshark"],
    color: "accent",
  },
  {
    icon: LockKeyhole,
    title: "Steganography",
    description: "Hiding secret information inside images, audio, or files to protect it.",
    tools: ["Steghide", "OpenPuff", "Image Tools"],
    color: "accent",
  }
  ];

  

  const certifications = ["Why Every Front-End Developer Should Know React JS?", "Placement Prep Program by LetsUpgrade", "Cybersecurity by Tech Mahindra", "Web Development using Visual Studio Code", "Cyber security from Skill India Digital Hub!", "ISO/IEC 27001:2022 Information Security Associate™", "Digital Forensics certification with Security Blue Team.", "Introduction to Penetration Testing course with Security Blue Team ", "Cyber Security Associate Certification Programme by Reliance Foundation", "Cybersecurity Essentials by Mahindra Foundation", "Introduction to Cybersecurity course by Cisco Networking Academy", "Kali Linux for Ethical Hackers", "Introduction to Building with AWS Databases"];

  return (
    <section
      id="cybersecurity"
      ref={ref}
      className="py-20 relative"
      style={{
        backgroundImage: `url(${cybersecurityBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-testid="cybersecurity-section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-tech font-bold mb-4 text-accent">
            <Shield className="inline-block w-10 h-10 mr-4" />
            CYBERSECURITY
          </h2>
          <p className="text-xl text-muted-foreground">Defending against threats in the digital frontier</p>
        </motion.div>

        {/* Terminal Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="terminal-effect rounded-xl p-8 mb-12 font-mono"
          data-testid="terminal-display"
        >
          <div className="flex items-center mb-4">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-accent">alex@security:~$</div>
          </div>
          <div className="text-accent space-y-2">
            <div>&gt; Initializing security protocols...</div>
            <div>&gt; Scanning for vulnerabilities...</div>
            <div>&gt; Implementing defense mechanisms...</div>
            <div className="text-green-400">&gt; System secured successfully ✓</div>
          </div>
        </motion.div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="glass-effect p-6 rounded-xl hover-tilt"
              data-testid={`expertise-${area.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`text-3xl text-${area.color} mb-4`}>
                <area.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
              <p className="text-muted-foreground mb-4">{area.description}</p>
              <div className="flex flex-wrap gap-2">
                {area.tools.map((tool) => (
                  <span
                    key={tool}
                    className={`px-3 py-1 bg-${area.color}/20 text-${area.color} rounded-full text-sm`}
                  >
                    {tool}
                  </span>
                ))}
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
          <h3 className="text-2xl font-semibold mb-8">Certifications</h3>
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
      </div>
    </section>
  );
}
