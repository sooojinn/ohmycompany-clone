import ThumbnailImage from "../atom/ThumbnailImage";

export default function NewsCard({
  thumbImageUrl,
  projectName,
  title,
  createDate,
}: any) {
  return (
    <div className="flex w-full items-center">
      <div className="w-1/4 shrink-0">
        <ThumbnailImage imageUrl={thumbImageUrl} />
      </div>
      <div className="px-4 py-2">
        <p className="text-xs text-gray-500 line-clamp-1">{projectName}</p>
        <p className="font-semibold mt-1 max-md:text-sm">{title}</p>
        <p className="text-xs text-gray-500 mt-2">{createDate}</p>
      </div>
    </div>
  );
}
