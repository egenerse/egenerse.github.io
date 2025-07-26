import { Text } from "./Text";
import ProfileImage from "@/assets/images/pic_ege.jpeg";

export const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "NestJS", "PostgreSQL", "GraphQL", "REST APIs"],
    },
    {
      category: "Tools & Others",
      items: ["Docker", "Git", "Storyblok", "Strapi", "CI/CD"],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Main About Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <img
              src={ProfileImage}
              alt="Ege Nerse - Software Developer"
              className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-2xl shadow-2xl dark:shadow-slate-900/50 transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent dark:from-black/40"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="space-y-6">
          <Text variant="heading" className="mb-6 text-center lg:text-left">
            About Me
          </Text>

          <div className="space-y-4">
            <Text variant="body" className="leading-relaxed">
              I'm a skilled{" "}
              <span className="font-bold">full-stack developer</span> crafting
              web and mobile apps with modern frameworks like{" "}
              <span className="font-bold">
                React, React Native, Next.js, TypeScript, and Node.js
              </span>
              . I deliver{" "}
              <span className="font-bold">
                scalable, user-focused solutions
              </span>{" "}
              by integrating UI, APIs, and backend services.
            </Text>

            <Text variant="body" className="leading-relaxed">
              I excel in{" "}
              <span className="font-bold">collaborative environments</span>,
              working with cross-functional teams to meet business goals. My
              expertise in{" "}
              <span className="font-bold">
                automation, CI/CD pipelines, and monorepo architecture
              </span>{" "}
              ensures efficient, high-quality development workflows.
            </Text>

            <Text variant="body" className="leading-relaxed">
              Passionate about{" "}
              <span className="font-bold">user experience</span>, I drive{" "}
              <span className="font-bold">impactful results</span> through
              innovative solutions and teamwork, consistently exceeding
              expectations.
            </Text>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="space-y-8">
        <Text variant="heading" className="text-center mb-8">
          Technical Skills
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-gray-100 dark:bg-slate-800 rounded-xl p-6 shadow-lg dark:shadow-slate-900/20 border border-gray-200 dark:border-slate-600 transition-all duration-300 hover:shadow-xl dark:hover:shadow-slate-900/30 hover:-translate-y-1"
            >
              <Text
                variant="subheading"
                className="mb-4 text-center text-blue-600 dark:text-blue-400"
              >
                {skillGroup.category}
              </Text>
              <div className="flex flex-wrap gap-2 justify-center">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-blue-100 dark:hover:bg-blue-900/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements/Highlights Section */}
      <div className="mt-16 space-y-8">
        <Text variant="heading" className="text-center mb-8">
          Highlights
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 border border-blue-200 dark:border-slate-600">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8zM5 20a2 2 0 002-2v-2a2 2 0 00-2-2H3a2 2 0 00-2 2v2a2 2 0 002 2h2z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <Text variant="subheading" className="mb-2">
                  Cross-Platform Development
                </Text>
                <Text variant="caption">
                  Built applications for web, mobile, and desktop platforms
                  using React ecosystem
                </Text>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 border border-green-200 dark:border-slate-600">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-500 dark:bg-green-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <Text variant="subheading" className="mb-2">
                  Team Collaboration
                </Text>
                <Text variant="caption">
                  Worked with international teams and stakeholders to deliver
                  impactful solutions
                </Text>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 border border-purple-200 dark:border-slate-600">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-500 dark:bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <Text variant="subheading" className="mb-2">
                  Performance Optimization
                </Text>
                <Text variant="caption">
                  Focused on scalable architecture and efficient development
                  workflows
                </Text>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 border border-orange-200 dark:border-slate-600">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-500 dark:bg-orange-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <Text variant="subheading" className="mb-2">
                  Innovation & Learning
                </Text>
                <Text variant="caption">
                  Constantly exploring new technologies and implementing
                  creative solutions
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
