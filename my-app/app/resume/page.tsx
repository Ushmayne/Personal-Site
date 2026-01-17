

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
      '> Supervised production operations and maintenance within the Body Shop, ensuring equipment reliability and process optimization to meet production targets.',
      '> Utilized data-driven decision-making to monitor equipment performance, troubleshoot system failures, and implement preventive maintenance strategies to minimize downtime.',
      '> Led cross-functional teams in diagnosing and resolving automation and robotics issues, working closely with engineers to maintain seamless production flow.',
      '> Implemented process improvements by analyzing production data and identifying bottlenecks, enhancing efficiency through structured problem-solving.',
      '> Managed workflow scheduling, ensuring optimal resource allocation while maintaining compliance with quality and safety standards.',
      '> Developed and maintained technical documentation, standard operating procedures (SOPs), and reports, improving communication and knowledge sharing.',
      '> Collaborated with cross-functional teams to introduce new technologies and automation solutions, driving continuous improvement initiatives.',
    ],
  },
  {
    title: 'Tech Teacher',
    company: 'Lakeview Montessori School',
    duration: 'Oct 2023 - December 2024',
    description: [
      '> Curriculum Development: Design and implement comprehensive technology education programs that align with state and national standards. Create lesson plans that cover fundamental and advanced technological concepts, including coding, robotics, digital literacy, and software applications.',
      '> Deliver engaging and interactive lessons using a variety of instructional methods. Incorporate hands-on projects, group activities, and real-world applications to facilitate deep understanding and practical skills.',
      '> Develop and administer assessments to evaluate student progress and understanding. Provide constructive feedback and adapt teaching strategies to meet the diverse needs of students.',
      '> Maintain a positive and inclusive classroom environment. Implement classroom management techniques to ensure a safe and productive learning space.',
      '> Work collaboratively with colleagues, administrators, and parents to support student success.Communicate effectively with all stakeholders regarding student progress, program goals, and technological initiatives.',
      '> Guided a LEGO robotics team through local competitions, developing technical and collaborative skills and earning qualification for regional-level competition.',    ],
  },
  {
    title: 'CEO',
    company: 'Huda Nasir Al-Fadak',
    duration: 'Feb 2022 - Feb 2024',
    description: [
      '> Define and execute the company’s vision and long-term growth strategy, aligning operational capabilities with market opportunities.',
      '> Lead efforts to secure new contracts, develop client relationships, negotiate agreements, and expand the company’s project portfolio.',
      '> Conduct regular site visits to active projects to monitor progress, address issues, ensure safety compliance, and maintain quality standards.',
      '> Provide executive oversight of project planning, scheduling, budgeting, and execution to ensure projects are delivered on time and within budget.',
      '> Oversee budgeting, forecasting, cash flow, and cost controls to support profitability and sustainable growth.',
      '> Lead management and field teams, promoting accountability, collaboration, and a strong safety-first culture.',
      '> Ensure adherence to regulatory, contractual, and safety requirements while proactively managing operational and legal risks.',
      '> Serve as the primary point of contact for clients, suppliers, regulators, and partners, representing the company both in the field and at the executive level.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Canadian Tire Corporation',
    duration: 'May 2019 - December 2019',
    description: [
      '> Developed real-time dashboards and internal tooling used by senior leadership to monitor system performance during high-traffic promotional events.',
      '> Collaborated with executive stakeholders to gather requirements and implement production dashboards for Cyber Week, enabling live trend tracking and rapid operational updates.',
      '> Designed and implemented scalable dashboard interfaces using New Relic, prioritizing usability, performance, and reliability.',
      '> Worked closely with the New Relic engineering team during the development of New Relic 2, contributing to feature validation and interface refinement.',
      '> Tested pre-release software builds, identifying defects and providing structured feedback to improve stability and usability prior to production release.',
      '> Participated in debugging and validation of pre-production software, helping ensure readiness for deployment in live environments.',
      '> Built a proof-of-concept automation workflow for ticket generation to support cost-reduction analysis and operational efficiency.',
      '> Improved internal onboarding systems and documentation, reducing ramp-up time for new developers and increasing team productivity.',
      '> Worked in an Agile development environment, performing code reviews to ensure adherence to engineering standards and best practices.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Papp Plastics & Distrtributing Ltd.',
    duration: 'May 2018 - August 2018',
    description: [
      '> Developed scheduling software for high-value industrial equipment, focusing on correctness, scalability, and real-world production constraints.',
      '> Implemented scheduling logic to accurately model machine changeover downtime, improving schedule reliability and reducing planning errors.',
      '> Built dynamic scheduling behavior that automatically adjusted to work orders, production delays, job completion, and material availability.',
      '> Integrated automated handling of civic and national holidays as non-operational days to prevent invalid schedules and edge-case failures.',
      '> Maintained and updated production software across company systems, following best practices for stability, compatibility, and version control.',
    ],
  },
  // Add more jobs here
];

const volunteerWork: VolunteerWork[] = [
  {
    title: 'Mentor',
    organization: 'STEM Hacks McMaster',
    description: [
      '> Mentored junior developers in web development best practices',
      '> Contributed to open-source projects',
      '> Organized coding workshops and seminars',
    ],
  },
  {
    title: 'Philanthropy Chair',
    organization: 'Sigma Chi Kappa Mu Chapter',
    description: [
      '> Raised money for Huntsman Cancer Foundation through various events',
      '> Acquired money for Trevor Project',
    ],
  },
  {
    title: 'Volunteer',
    organization: 'Optimist Club of Windsor',
    description: [
      '> Raised money for the Salvation Army Angel Tree Program',
      '> Worked with TriStar to hold an after school basketball program for underprivileged kids',
      '> Worked with Detroit Red Wings to promote the Angel Tree Program and the Optimist Club of Windsor',
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
      'Specialization in Game Development',
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
  { name: 'NoSQL', proficiency: 'Intermediate' },
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
    <div className="mb-4 border border-cabin-text rounded-lg overflow-hidden bg-gray-900">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-2.5 sm:p-4 text-cabin-text font-semibold transition-colors hover:bg-black/20 text-xs sm:text-sm md:text-base"
      >
        <span className="text-left">{title}</span>
        <ChevronDown
          size={24}
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-900 ease-in-out ${isOpen ? 'max-h-120' : 'max-h-0'}`}>
        <div className="p-2.5 sm:p-4 bg-gray-900 border-t border-cabin-text text-cabin-text text-xs sm:text-sm md:text-base">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <main className="px-2 sm:px-4 md:px-6 lg:px-12 py-4 sm:py-6 md:py-10 min-h-screen md:ml-6">
      <div className="mb-8 md:mb-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-cabin-glow">Resume</h1>
          <a
            href="/UsmanNaveedResume.pdf"
            download="UsmanNaveedResume.pdf"
            className="bg-royal text-cabin-text hover:text-cabin-glow hover:bg-opacity-90 px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg font-semibold transition-all whitespace-nowrap text-sm sm:text-base"
          >
            Download Resume
          </a>
        </div>

        {/* Languages and Dev Tools Section */}
        <section className="mb-6 sm:mb-8">
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-12 lg:flex-row">
            {/* Languages Box */}
            <div className="bg-gray-900 border border-cabin-rain p-3 sm:p-4 rounded-lg w-full lg:flex-1">
              <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-cabin-text mb-2 ml-3 sm:ml-5">Languages</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1.5 sm:gap-2 md:gap-3 lg:gap-6 w-full pl-0 m-0">
                {languages.map((lang) => (
                  <li key={lang.name} className="text-gray-700 flex flex-col items-center group cursor-default ml-0 text-center">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-royal rounded-full mb-1 sm:mb-2 flex-shrink-0"></span>
                    <span className="font-medium font-semibold text-cabin-text text-xs">{lang.name}</span>
                    <span className="text-xs text-cabin-muted font-bold mt-0.5 sm:mt-1">
                      {lang.proficiency}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dev Tools Box */}
            <div className="bg-gray-900 border border-cabin-rain p-3 sm:p-4 rounded-lg w-full lg:flex-1">
              <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-cabin-text mb-2 ml-3 sm:ml-5">Dev Tools</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1.5 sm:gap-2 md:gap-3 lg:gap-6 w-full pl-0 m-0">
                {devTools.map((tool) => (
                  <li key={tool} className="text-gray-700 flex flex-col items-center m-0">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-royal rounded-full mb-1 sm:mb-2 flex-shrink-0"></span>
                    <span className="text-center text-cabin-text font-semibold text-xs">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-cabin-glow mb-3 sm:mb-4">Education</h2>
          {education.map((edu, index) => (
            <CollapsibleSection key={index} title={`${edu.degree} - ${edu.school}`}>
              <div className="space-y-2 sm:space-y-3">
                <div className="text-xs sm:text-sm text-cabin-text font-semibold">{edu.duration}</div>
                {edu.details && edu.details.length > 0 && (
                  <ul className="space-y-1.5 sm:space-y-2">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="text-cabin-text flex items-start">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-royal rounded-full mr-2 sm:mr-3 mt-1 sm:mt-1.5 flex-shrink-0"></span>
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
        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-cabin-glow mb-3 sm:mb-4">Job History</h2>
          {jobs.map((job, index) => (
            <CollapsibleSection key={index} title={`${job.title} at ${job.company}`}>
              <div className="space-y-2 sm:space-y-3 ">
                <div className="text-xs sm:text-sm text-cabin-text font-semibold">{job.duration}</div>
                <ul className="space-y-1.5 sm:space-y-2 ">
                  {job.description.map((desc, idx) => (
                    <li key={idx} className="text-cabin-text flex items-start">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-royal rounded-full mr-2 sm:mr-3 mt-1 sm:mt-1.5 flex-shrink-0"></span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CollapsibleSection>
          ))}
        </section>


        {/* Volunteer Work Section */}
        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-cabin-glow mb-3 sm:mb-4">Volunteer Work</h2>
          {volunteerWork.map((vol, index) => (
            <CollapsibleSection key={index} title={`${vol.title} at ${vol.organization}`}>
              <div className="space-y-2 sm:space-y-3">
                <ul className="space-y-1.5 sm:space-y-2">
                  {vol.description.map((desc, idx) => (
                    <li key={idx} className="text-cabin-text flex items-start">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-royal rounded-full mr-2 sm:mr-3 mt-1 sm:mt-1.5 flex-shrink-0"></span>
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