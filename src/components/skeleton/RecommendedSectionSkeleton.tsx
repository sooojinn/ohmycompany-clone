import CardSkeleton from "./CardSkeleton";
import HomeSectionTitleSkeleton from "./HomeSectionTitleSkeleton";

export default function RecommendedSectionSkeleton() {
  return (
    <div>
      <HomeSectionTitleSkeleton />
      <div className="w-full flex gap-6 max-lg:flex-col">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}
