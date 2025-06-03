export default function CardPanelLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`pt-3 px-2 ${className}`}>{children}</div>;
}
