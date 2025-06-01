export default function PaginationToggleButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <span className="text-sm p-2 cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
}
