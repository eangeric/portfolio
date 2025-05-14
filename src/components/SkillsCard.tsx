type SkillsCard = {
  type: string;
  skills: { name: string; icon: React.ReactNode }[];
  className?: string;
};

export default function SkillsCard({ type, skills, className }: SkillsCard) {
  return (
    <div
      className={`flex flex-col items-center gap-8 bg-gray-900 p-8 rounded-lg w-80 ${className}`}
    >
      <h1 className="text-blue-500 text-3xl font-bold">{type}</h1>
      <div className="flex flex-col gap-4">
        {skills.map((skill) => (
          <div className="flex items-center gap-4 text-xl">
            <div className="text-blue-500">{skill.icon}</div>
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
