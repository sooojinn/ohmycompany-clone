import Link from "next/link";
import ProjectTypeBtns from "../molecule/ProjectTypeBtns";
import ArrowIcon from "@/assets/icons/ArrowIcon";

export default function HomeSection({
  title,
  children,
  col = 4,
  projectType,
  onProjectTypeClick,
  href,
}: {
  title: string;
  children: React.ReactNode;
  col?: number;
  projectType?: "reward" | "invest";
  onProjectTypeClick?: (
    value: React.SetStateAction<"reward" | "invest">
  ) => void;
  href?: string;
}) {
  return (
    <section>
      <div className="flex justify-between items-center">
        <p className="mb-5 text-[22px] font-semibold">{title}</p>
        {projectType && (
          <ProjectTypeBtns
            projectType={projectType}
            onProjectTypeClick={onProjectTypeClick}
          />
        )}
        {href && (
          <Link href={href}>
            <ArrowIcon width={24} height={24} />
          </Link>
        )}
      </div>
      <div
        style={{ gridTemplateColumns: `repeat(${col}, 1fr)` }}
        className="grid gap-6"
      >
        {children}
      </div>
    </section>
  );
}
