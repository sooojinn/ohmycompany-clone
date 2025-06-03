export default function ProjectTypeBtn({
  label,
  value,
  projectType,
}: {
  label: "후원형" | "증권형";
  value: "reward" | "invest";
  projectType: "reward" | "invest";
}) {
  return (
    <span
      className={`px-3 py-1.5 rounded-full cursor-pointer ${
        projectType === value
          ? "text-primary bg-bg-primary"
          : "border border-gray-200"
      }`}
    >
      {label}
    </span>
  );
}
