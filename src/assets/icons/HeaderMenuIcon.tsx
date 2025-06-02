import Image from "next/image";

export default function HeaderMenuIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/assets/icons/layouts.ground.header.toggle.svg"
      className={`w-6 h-6 ${className}`}
      alt="메뉴"
    />
  );
}
