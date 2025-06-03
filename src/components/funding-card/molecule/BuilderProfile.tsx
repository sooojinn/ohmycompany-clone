import BuilderImage from "../atom/BuilderImage";
import BuilderName from "../atom/BuilderName";

export default function BuilderProfile({
  imageUrl,
  children,
  className,
}: {
  imageUrl: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 mb-2.5 cursor-pointer ${className}`}
    >
      <BuilderImage imageUrl={imageUrl} />
      <BuilderName>{children}</BuilderName>
    </div>
  );
}
