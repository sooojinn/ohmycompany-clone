export default function HorizontalScrollSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="-mx-3.75">
      <div
        className={`px-3.75 w-full flex gap-4 overflow-x-auto no-scrollbar ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
