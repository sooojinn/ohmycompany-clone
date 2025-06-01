import ProjectTypeBtns from "./ProjectTypeBtns";

export default function HomeSection({
  title,
  children,
  projectType,
  onProjectTypeClick,
}: {
  title: string;
  children: React.ReactNode;
  projectType?: "reward" | "invest";
  onProjectTypeClick?: (
    value: React.SetStateAction<"reward" | "invest">
  ) => void;
}) {
  return (
    <section className="mb-[68px]">
      <div className="flex justify-between items-center">
        <p className="mb-5 text-[22px] font-semibold">{title}</p>
        {projectType && (
          <ProjectTypeBtns
            projectType={projectType}
            onProjectTypeClick={onProjectTypeClick}
          />
        )}
      </div>
      {children}
    </section>
  );
}
