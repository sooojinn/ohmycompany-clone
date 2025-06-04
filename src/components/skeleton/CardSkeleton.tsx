export default function CardSkeleton() {
  return (
    <div className="flex-1 max-lg:flex max-lg:items-center max-lg:gap-4">
      <div className="flex items-center gap-2 mb-2.5 max-lg:hidden">
        <div className="w-7 h-7 rounded-full skeleton"></div>
        <div className="w-20 h-4 skeleton"></div>
      </div>
      <div className="w-full aspect-[4/3] rounded-2xl max-lg:w-32 max-lg:shrink-0 skeleton"></div>
      <div className="w-full lg:pt-3 lg:px-2">
        <div className="w-30 h-4.5 mb-1 skeleton lg:hidden"></div>
        <div className="w-full h-5 mb-5 skeleton"></div>
      </div>
    </div>
  );
}
