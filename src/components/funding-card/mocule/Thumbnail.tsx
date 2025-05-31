import HeartBtn from "../atom/HeartBtn";
import ThumbnailImage from "../atom/ThumbnailImage";

export default function Thumbnail({
  imageUrl,
  hideHeartBtn,
}: {
  imageUrl: string;
  hideHeartBtn?: boolean;
}) {
  return (
    <div className="relative">
      <ThumbnailImage imageUrl={imageUrl} />
      {hideHeartBtn || (
        <div className="absolute top-2 right-2">
          <HeartBtn />
        </div>
      )}
    </div>
  );
}
