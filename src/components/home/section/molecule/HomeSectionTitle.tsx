import Link from "next/link";
import ProjectTypeBtns from "./ProjectTypeBtns";
import ArrowIcon from "@/assets/icons/ArrowIcon";

export default function HomeSectionTitle({
  children,
  projectType,
  onProjectTypeClick,
  href,
}: {
  children: React.ReactNode;
  projectType?: "reward" | "invest";
  onProjectTypeClick?: (
    value: React.SetStateAction<"reward" | "invest">
  ) => void;
  href?: string;
}) {
  return (
    <div className="flex justify-between items-center pl-0.5 mb-5">
      <p className="text-lg lg:text-5.5 font-semibold">{children}</p>
      {projectType && (
        <ProjectTypeBtns
          projectType={projectType}
          onProjectTypeClick={onProjectTypeClick}
        />
      )}
      {href && (
        <Link href={href}>
          <ArrowIcon className="w-6 h-6" />
        </Link>
      )}
    </div>
  );
}
