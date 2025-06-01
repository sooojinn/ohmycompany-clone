export default function FundingTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="min-h-[3rem] cursor-pointer">{children}</p>;
}
