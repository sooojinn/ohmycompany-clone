export default function BuilderImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="w-7 h-7 rounded-full bg-cover bg-center bg-gray-100"
    ></div>
  );
}
