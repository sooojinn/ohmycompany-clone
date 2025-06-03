export default function HeaderMenuIcon({ className }: { className?: string }) {
  return (
    <span
      className={`bg-[url(/assets/icons/layouts.ground.header.toggle.svg)] w-6 h-6 bg-cover inline-block ${className}`}
    ></span>
  );
}
