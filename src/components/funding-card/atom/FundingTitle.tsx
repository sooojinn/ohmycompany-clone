export default function FundingTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`min-h-12 line-clamp-2 cursor-pointer ${className}`}>
      {children}
    </p>
  );
}
