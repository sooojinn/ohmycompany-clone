import HeartBtn from "../atom/HeartBtn";
import ThumbnailImage from "../atom/ThumbnailImage";

export default function Thumbnail({
  imageUrl,
  hideHeartBtn,
  className,
}: {
  imageUrl: string;
  hideHeartBtn?: boolean;
  className?: string;
}) {
  return (
    <div className="relative">
      <ThumbnailImage imageUrl={imageUrl} className={className} />
      {hideHeartBtn || (
        <div className="absolute top-2 right-2">
          <HeartBtn />
        </div>
      )}
    </div>
  );
}
