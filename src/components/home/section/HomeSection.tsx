export default function HomeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-[68px]">
      <p className="mb-5 text-[22px] font-semibold">{title}</p>
      {children}
    </section>
  );
}
