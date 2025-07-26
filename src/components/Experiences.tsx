import React from "react";
import { Text } from "./Text";
import mvstLogo from "@/assets/images/mvst.png";
import abbLogo from "@/assets/images/abb.png";
import gopuffLogo from "@/assets/images/gopuff.png";
import medyasoftLogo from "@/assets/images/medyasoft.png";
import hesapkurduLogo from "@/assets/images/hesapkurdu.png";
import { ExperienceItem } from "./ExperienceItem";

export const Experiences: React.FC = () => {
  const experiences = [
    {
      title: "Working Student",
      company: "MVST",
      location: "Munich, Germany",
      period: "Nov 2023 - Present",
      description: [
        "Contributed to production-ready client projects across web and mobile platforms in a consulting environment",
        "Delivered new features, UI components, API integrations, and bug fixes with focus on performance and scalability",
        "Collaborated with international teams including product managers, designers, and developers",
        "Maintained and enhanced existing projects to support evolving business requirements",
      ],
      technologies: [
        "Next.js",
        "React",
        "React Native",
        "Flutter",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Storyblok",
        "Strapi",
        "Docker",
      ],
      logo: mvstLogo,
      companyLink: "https://www.mvst.co/",
    },
    {
      title: "Working Student",
      company: "ABB",
      location: "Munich, Germany",
      period: "Apr 2023 - Sep 2023",
      description: [
        "Collaborated with R&D Manager to enhance internal user experience within Polarion",
        "Developed custom JavaScript workflows to automate user account creation and role assignment",
        "Integrated with Active Directory tables for dynamic user management",
        "Created reusable project templates to enhance project management efficiency",
      ],
      technologies: [
        "JavaScript",
        "Polarion",
        "Active Directory",
        "Workflow Automation",
      ],
      logo: abbLogo,
      companyLink: "https://global.abb",
    },
    {
      title: "React Native Contractor",
      company: "StartupHeroes & GoPuff",
      location: "Remote, Istanbul/USA",
      period: "Sep 2021 - Sep 2022",
      description: [
        "Worked in cross-platform mobile frontend development for consumer goods delivery app",
        "Collaborated with international team to deliver high-quality React Native application",
        "Took ownership of complete user flows, components, and page implementations",
        "Conducted thorough code reviews ensuring accuracy and efficiency",
      ],
      technologies: [
        "React Native",
        "TypeScript",
        "GraphQL",
        "Mobile Development",
        "Cross-platform",
      ],
      logo: gopuffLogo,
      companyLink: "https://gopuff.com",
    },
    {
      title: "React Native Developer",
      company: "Medyasoft Inc",
      location: "Ankara, Turkey",
      period: "Mar 2021 - Aug 2021",
      description: [
        "Developed mobile applications for Turkish Red Crescent using React Native",
        "Built components for 'Kizilay Mobil' and 'Kizilay GYS' applications",
        "Presented development progress in regular stakeholder meetings",
        "Contributed to applications benefiting volunteers and humanitarian efforts",
      ],
      technologies: [
        "React Native",
        "Mobile Development",
        "Component Architecture",
      ],
      logo: medyasoftLogo,
      companyLink: "https://medyasoft.com.tr",
    },
    {
      title: "Backend Developer",
      company: "Hesapkurdu.com Inc",
      location: "Remote, Turkey",
      period: "Jul 2020 - Feb 2021",
      description: [
        "Resolved system bugs and implemented SEO enhancements for improved visibility",
        "Enhanced user experience and improved content management system",
        "Developed new controllers and services for better user interactions",
        "Built scheduled job for real-time fuel price monitoring with Redis optimization",
      ],
      technologies: [
        "Backend Development",
        "SEO",
        "Redis",
        "Content Management",
        "Real-time Systems",
      ],
      logo: hesapkurduLogo,
      companyLink: "https://hesapkurdu.com",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-12">
        <Text variant="heading" className="text-text-primary mb-4">
          Professional Experience
        </Text>
        <Text variant="body" className="text-text-secondary">
          My journey in software development across different companies and
          projects
        </Text>
      </div>

      <div className="relative">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            {...exp}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
