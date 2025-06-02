import Image from "next/image";
import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/">
      <Image
        src="/assets/icons/common.logo.svg"
        width={0}
        height={0}
        className={className}
        alt="ohmycompany"
      />
    </Link>
  );
}
