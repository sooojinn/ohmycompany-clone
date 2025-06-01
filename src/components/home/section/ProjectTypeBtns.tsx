import ProjectTypeBtn from "./ProjectTypeBtn";

export default function ProjectTypeBtns({
  projectType,
  onProjectTypeClick,
}: {
  projectType: "reward" | "invest";
  onProjectTypeClick?: (
    value: React.SetStateAction<"reward" | "invest">
  ) => void;
}) {
  return (
    <div className="text-xs flex gap-2">
      <span onClick={() => onProjectTypeClick?.("reward")}>
        <ProjectTypeBtn
          label="후원형"
          value="reward"
          projectType={projectType}
        />
      </span>
      <span onClick={() => onProjectTypeClick?.("invest")}>
        <ProjectTypeBtn
          label="증권형"
          value="invest"
          projectType={projectType}
        />
      </span>
    </div>
  );
}
