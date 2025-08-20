import {
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import SkillsCard from "../components/SkillsCard";
import { BiLogoPostgresql } from "react-icons/bi";

export default function Skills() {
  const frontend = [
    {
      name: "React",
      icon: <SiReact />,
    },
    { name: "Next.js", icon: <SiNextdotjs /> },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
  ];

  const backend = [
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
    },
    { name: "Express.js", icon: <SiExpress /> },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "PostgreSQL",
      icon: <BiLogoPostgresql />,
    },
  ];

  const devOps = [
    {
      name: "AWS",
      icon: <FaAws />,
    },
    { name: "Nginx", icon: <SiNginx /> },

    {
      name: "Docker",
      icon: <SiDocker />,
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes />,
    },
  ];

  const tools = [
    {
      name: "Git",
      icon: <SiGit />,
    },
    {
      name: "Linux",
      icon: <SiLinux />,
    },
    { name: "Github", icon: <SiGithub /> },
    {
      name: "Postman",
      icon: <SiPostman />,
    },
  ];

  return (
    <div
      id="skills"
      className="min-h-screen flex justify-center items-center mt-32 md:mt-0 "
    >
      <div>
        <h1 className="flex justify-center text-4xl font-bold mb-8 underline underline-offset-6 decoration-blue-500">
          My Skills
        </h1>
        <div className="grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-8">
          <SkillsCard type="Frontend" skills={frontend} />
          <SkillsCard type="Backend" skills={backend} />
          <SkillsCard type="DevOps" skills={devOps} />
          <SkillsCard type="Tools" skills={tools} />
        </div>
      </div>
    </div>
  );
}
