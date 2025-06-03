export default function BuilderName({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`text-xs ${className}`}>{children}</span>;
}
