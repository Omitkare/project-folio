import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ExternalLink, Instagram } from "lucide-react";
import { Button } from "./ui/button";

interface SidebarProps {
  name?: string;
  title?: string;
  tagline?: string;
  navLinks?: Array<{ label: string; href: string }>;
  socialLinks?: Array<{ platform: string; href: string }>;
}

const Sidebar = ({
  name = "Omajay Itkare",
  title = "Aspiring Data Scientist & Engineer",
  tagline = "I explore data, build models, and generate insights using Python, Power BI, SQL, and Excel.",
  navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks = [
    { platform: "github", href: "https://github.com" },
    {
      platform: "linkedin",
      href: "https://www.linkedin.com/in/omajay-itkare/",
    },
    { platform: "mail", href: "mailto:omitkare14@gmail.com" },
    { platform: "x", href: "https://x.com/Omajay_itkare" },
    { platform: "instagram", href: "https://www.instagram.com/Omajay_itkare/" },
  ],
}: SidebarProps) => {
  const renderSocialIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <Github className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "mail":
        return <Mail className="h-5 w-5" />;
      case "x":
        return (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case "instagram":
        return <Instagram className="h-5 w-5" />;
      default:
        return <ExternalLink className="h-5 w-5" />;
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-[350px] bg-black text-white p-8 flex flex-col justify-between">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
          <h2 className="text-xl text-[#1e3a8a]">{title}</h2>
          <p className="text-sm text-gray-400 mt-4">{tagline}</p>
        </div>

        <nav className="space-y-4">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm hover:text-[#1e3a8a] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8">
          <Button
            variant="outline"
            className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a]/10"
            asChild
          >
            <a href="#resume">View Résumé</a>
          </Button>
        </div>
      </div>

      <div className="flex space-x-5">
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#1e3a8a] transition-colors duration-200"
            aria-label={link.platform}
          >
            {renderSocialIcon(link.platform)}
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
