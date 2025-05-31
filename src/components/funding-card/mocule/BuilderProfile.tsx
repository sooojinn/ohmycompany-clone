import BuilderImage from "../atom/BuilderImage";
import BuilderName from "../atom/BuilderName";

export default function BuilderProfile({
  imageUrl,
  children,
}: {
  imageUrl: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center mb-2.5 cursor-pointer">
      <BuilderImage imageUrl={imageUrl} />
      <BuilderName>{children}</BuilderName>
    </div>
  );
}
