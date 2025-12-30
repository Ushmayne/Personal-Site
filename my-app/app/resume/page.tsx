'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Job {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

interface VolunteerWork {
  title: string;
  organization: string;
  description: string[];
}

interface Education {
  degree: string;
  school: string;
  duration: string;
  details?: string[];
}

interface Language {
  name: string;
  proficiency: string;
}

const jobs: Job[] = [
  {
    title: 'Production and Maintenance Supervisor',
    company: 'Stellantis',
    duration: 'Jan 2025 - Present',
    description: [
      'Developed and maintained web applications using React and TypeScript',
      'Collaborated with cross-functional teams to implement new features',
      'Improved application performance by optimizing database queries',
    ],
  },
  {
    title: 'Tech Teacher',
    company: 'Lakeview Montessori School',
    duration: 'Oct 2023 - December 2024',
    description: [
      'Developed and maintained web applications using React and TypeScript',
      'Collaborated with cross-functional teams to implement new features',
      'Improved application performance by optimizing database queries',
    ],
  },
  {
    title: 'CEO',
    company: 'Huda Nasir Al-Fadak',
    duration: 'Feb 2022 - Feb 2024',
    description: [
      'Developed and maintained web applications using React and TypeScript',
      'Collaborated with cross-functional teams to implement new features',
      'Improved application performance by optimizing database queries',
      'Developed and maintained web applications using React and TypeScript',
      'Collaborated with cross-functional teams to implement new features',
      'Improved application performance by optimizing database queries',
      'Developed and maintained web applications using React and TypeScript',
      'Collaborated with cross-functional teams to implement new features',
      'Improved application performance by optimizing database queries',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Canadian Tire Corporation',
    duration: 'May 2019 - December 2019',
    description: [
      'Developed and maintained web applications using React and TypeScript',
      'Collaborated with cross-functional teams to implement new features',
      'Improved application performance by optimizing database queries',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Papp Plastics & Distrtributing Ltd.',
    duration: 'May 2018 - August 2018',
    description: [
      'Developed and maintained web applications using React and TypeScript',
      'Collaborated with cross-functional teams to implement new features',
      'Improved application performance by optimizing database queries',
    ],
  },
  // Add more jobs here
];

const volunteerWork: VolunteerWork[] = [
  {
    title: 'Mentor',
    organization: 'STEM Hacks McMaster',
    description: [
      'Mentored junior developers in web development best practices',
      'Contributed to open-source projects',
      'Organized coding workshops and seminars',
    ],
  },
  {
    title: 'Mentor',
    organization: 'Tech Community',
    description: [
      'Mentored junior developers in web development best practices',
      'Contributed to open-source projects',
      'Organized coding workshops and seminars',
    ],
  },
  {
    title: 'Mentor',
    organization: 'Tech Community',
    description: [
      'Mentored junior developers in web development best practices',
      'Contributed to open-source projects',
      'Organized coding workshops and seminars',
    ],
  },
  // Add more volunteer work here
];

const education: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science with Honours',
    school: 'University of Windsor',
    duration: 'Graduated with',
    details: [
      'Specialized in Game Development',
    ],
  },
  // Add more education here
];

const languages: Language[] = [
  { name: 'C', proficiency: 'Intermediate' },
  { name: 'C#', proficiency: 'Expert' },
  { name: 'C++', proficiency: 'Intermediate' },
  { name: 'HTML/CSS', proficiency: 'Intermediate' },
  { name: 'Java', proficiency: 'Expert' },
  { name: 'JavaScript', proficiency: 'Intermediate' },
  { name: 'Python', proficiency: 'Intermediate' },
  { name: 'SQL', proficiency: 'Intermediate' },
  { name: 'TypeScript', proficiency: 'Intermediate' },
];

const devTools = [
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'VS Code',
  'Tailwind CSS',
  'Unity',
  'Jira',
  'New Relic',
  'Sumo Logic',
  'MongoDB',

];

function CollapsibleSection({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-300 rounded-lg mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-royal hover:bg-opacity-90 text-cabin-text font-semibold transition-colors"
      >
        <span>{title}</span>
        <ChevronDown
          size={24}
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && <div className="p-4 bg-cabin-text">{children}</div>}
    </div>
  );
}

export default function Resume() {
  return (
    <main className="ml-6 px-12 py-10 min-h-screen">
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-cabin-glow">Resume</h1>
          <a
            href="/M.Usman_resume.pdf"
            download="UsmanResume.pdf"
            className="bg-royal hover:bg-opacity-90 text-cabin-text px-6 py-2 rounded-lg font-semibold transition-all"
          >
            Download Resume
          </a>
        </div>

        {/* Languages and Dev Tools Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-cabin-text mb-4">Languages and Dev Tools</h2>
          <div className="flex gap-12">
            {/* Languages Box */}
            <div className="bg-cabin-rain p-4 rounded-lg flex-1">
              <h3 className="text-xl font-semibold text-cabin-panel mb-2 ml-5">Languages</h3>
              <ul className="grid grid-cols-5 gap-6 w-full pl-0 m-0">
                {languages.map((lang) => (
                  <li key={lang.name} className="text-gray-700 flex flex-col items-center group cursor-default ml-0 text-center min-w-[70px]">
                    <span className="w-2 h-2 bg-royal rounded-full mb-2 flex-shrink-0"></span>
                    <span className="font-medium text-cabin-text">{lang.name}</span>
                    <span className="text-xs text-royal font-bold mt-1">
                      {lang.proficiency}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dev Tools Box */}
            <div className="bg-cabin-rain p-4 rounded-lg flex-1">
              <h3 className="text-xl font-semibold text-cabin-panel mb-2 ml-5">Dev Tools</h3>
              <ul className="grid grid-cols-6 gap-6 w-full pl-0 m-0">
                {devTools.map((tool) => (
                  <li key={tool} className="text-gray-700 flex flex-col items-center m-0 min-w-[70px]">
                    <span className="w-2 h-2 bg-royal rounded-full mb-2 flex-shrink-0"></span>
                    <span className="text-center text-cabin-text">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-cabin-text mb-4">Education</h2>
          {education.map((edu, index) => (
            <CollapsibleSection key={index} title={`${edu.degree} - ${edu.school}`}>
              <div className="space-y-3">
                <div className="text-sm text-gray-600 font-semibold">{edu.duration}</div>
                {edu.details && edu.details.length > 0 && (
                  <ul className="space-y-2">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start">
                        <span className="w-2 h-2 bg-royal rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </CollapsibleSection>
          ))}
        </section>

        {/* Job History Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-cabin-text mb-4">Job History</h2>
          {jobs.map((job, index) => (
            <CollapsibleSection key={index} title={`${job.title} at ${job.company}`}>
              <div className="space-y-3">
                <div className="text-sm text-gray-600 font-semibold">{job.duration}</div>
                <ul className="space-y-2">
                  {job.description.map((desc, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="w-2 h-2 bg-royal rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CollapsibleSection>
          ))}
        </section>


        {/* Volunteer Work Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-cabin-text mb-4">Volunteer Work</h2>
          {volunteerWork.map((vol, index) => (
            <CollapsibleSection key={index} title={`${vol.title} at ${vol.organization}`}>
              <div className="space-y-3">
                <ul className="space-y-2">
                  {vol.description.map((desc, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="w-2 h-2 bg-royal rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CollapsibleSection>
          ))}
        </section>
      </div>
    </main>
  );
}