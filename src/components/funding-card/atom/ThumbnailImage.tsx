export default function ThumbnailImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="w-full aspect-[13/10] rounded-2xl relative overflow-hidden bg-gray-100">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110 cursor-pointer"
      ></div>
    </div>
  );
}
