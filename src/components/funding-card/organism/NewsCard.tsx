import ThumbnailImage from "../atom/ThumbnailImage";

export default function NewsCard({
  thumbImageUrl,
  projectName,
  title,
  createDate,
}: any) {
  return (
    <div className="flex">
      <div className="min-w-[136px]">
        <ThumbnailImage imageUrl={thumbImageUrl} />
      </div>
      <div className="px-4 py-2">
        <p className="text-xs text-gray-500">{projectName}</p>
        <p className="font-semibold mt-1">{title}</p>
        <p className="text-xs text-gray-500 mt-2">{createDate}</p>
      </div>
    </div>
  );
}
