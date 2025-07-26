import { Text } from "./Text";

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  logo: string;
  isLast?: boolean;
  companyLink?: string;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  period,
  description,
  technologies,
  logo,
  isLast = false,
  companyLink = "#",
}) => {
  return (
    <div className="relative flex items-start space-x-6 pb-12">
      {/* Timeline Line */}
      {!isLast && <div className="absolute left-6 top-16 w-0.5 h-full "></div>}

      {/* Timeline Dot with Logo */}
      <a href={companyLink} target="_blank" rel="noopener noreferrer">
        <div className="relative flex-shrink-0 ">
          <div className="w-12 h-12 md:w-24 md:h-24 bg-gray-300 border-2 border-primary rounded-full flex items-center justify-center shadow-lg">
            <img
              src={logo}
              alt={company}
              className="w-8 h-8 object-contain md:w-16 md:h-16"
            />
          </div>
        </div>
      </a>

      {/* Content */}
      <div className="flex-1 dark:bg-slate-800 bg-gray-300/10 border border-black dark:border-gray-600/70 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="space-y-4">
          {/* Header */}
          <div>
            <Text
              variant="subheading"
              className="text-text-primary font-bold mb-1"
            >
              {title}
            </Text>
            <Text variant="body" className="text-primary font-semibold">
              {company} • {location}
            </Text>
            <Text variant="caption" className="text-text-muted">
              {period}
            </Text>
          </div>

          {/* Description */}
          <div className="space-y-2">
            {description.map((item, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <Text variant="caption">{item}</Text>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div>
            <Text variant="caption" className=" font-semibold mb-2">
              Technologies & Tools:
            </Text>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 dark:bg-slate-900 bg-gray-400/20 dark:text-slate-400 text-xs font-medium rounded-full border border-slate-500 transition-colors duration-200 hover:bg-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
