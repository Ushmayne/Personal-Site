import type { Metadata } from "next";
import ResumeContent from "./ResumeContent";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume for Usman Naveed — software developer experience, education, skills, and volunteer work. Download the full PDF.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Resume | Usman Naveed",
    description:
      "Software development experience, education, skills, and volunteer work.",
    url: "/resume",
  },
  twitter: {
    title: "Resume | Usman Naveed",
    description:
      "Software development experience, education, skills, and volunteer work.",
  },
};

export default function ResumePage() {
  return <ResumeContent />;
}
