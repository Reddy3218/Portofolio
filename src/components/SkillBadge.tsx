interface SkillBadgeProps {
  name: string;
}

const SkillBadge = ({ name }: SkillBadgeProps) => {
  return (
    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
      {name}
    </span>
  );
};

export default SkillBadge;