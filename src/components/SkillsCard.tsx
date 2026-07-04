type SkillsCard = {
  type: string;
  skills: { name: string; icon: React.ReactNode }[];
  className?: string;
};

export default function SkillsCard({ type, skills, className }: SkillsCard) {
  return (
    <div
      className={`flex h-full min-h-80 flex-col gap-7 rounded-lg border border-white/10 bg-gray-950/75 p-6 shadow-xl shadow-black/20 backdrop-blur transition-all hover:-translate-y-1 hover:border-blue-400/40 ${className}`}
    >
      <h2 className="text-blue-300 text-2xl font-extrabold">{type}</h2>
      <div className="grid gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex min-h-14 items-center gap-4 rounded-lg border border-white/5 bg-white/5 px-4 py-3 text-lg"
          >
            <div className="shrink-0 text-xl text-blue-400">{skill.icon}</div>
            <div className="font-semibold leading-6">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
