import {
  SiAndroidstudio,
  SiAppium,
  SiDocker,
  SiGit,
  SiJavascript,
  SiPostman,
  SiPytest,
  SiPython,
  SiSelenium,
  SiXcode,
} from "react-icons/si";
import {
  FaBug,
  FaCode,
  FaDatabase,
  FaFileLines,
  FaListCheck,
  FaPenToSquare,
} from "react-icons/fa6";
import SkillsCard from "../components/SkillsCard";

export default function Skills() {
  const languages = [
    {
      name: "Python",
      icon: <SiPython />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      name: "Java",
      icon: <FaCode />,
    },
    {
      name: "SQL",
      icon: <FaDatabase />,
    },
  ];

  const developerTools = [
    {
      name: "Git",
      icon: <SiGit />,
    },
    {
      name: "Docker",
      icon: <SiDocker />,
    },
    {
      name: "Xcode",
      icon: <SiXcode />,
    },
    {
      name: "Android Studio",
      icon: <SiAndroidstudio />,
    },
  ];

  const qaSkills = [
    {
      name: "Manual Testing",
      icon: <FaListCheck />,
    },
    {
      name: "Test Cases",
      icon: <FaPenToSquare />,
    },
    {
      name: "Test Plans",
      icon: <FaFileLines />,
    },
    {
      name: "Bug Reporting",
      icon: <FaBug />,
    },
  ];

  const testingTools = [
    {
      name: "Appium",
      icon: <SiAppium />,
    },
    {
      name: "Selenium",
      icon: <SiSelenium />,
    },
    {
      name: "Postman",
      icon: <SiPostman />,
    },
    {
      name: "Pytest",
      icon: <SiPytest />,
    },
  ];

  return (
    <div
      id="skills"
      className="min-h-screen flex justify-center items-center py-24"
    >
      <div className="w-full max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-5xl font-extrabold text-blue-300 sm:text-6xl">
            Skills
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <SkillsCard type="Languages" skills={languages} />
          <SkillsCard type="Developer Tools" skills={developerTools} />
          <SkillsCard type="QA Skills" skills={qaSkills} />
          <SkillsCard type="Testing Tools" skills={testingTools} />
        </div>
      </div>
    </div>
  );
}
