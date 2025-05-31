export default function SliderPagnation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-2 py-1 bg-black/40 text-white text-sm absolute top-8 right-8 z-10 rounded-full">
      {children}
    </div>
  );
}
