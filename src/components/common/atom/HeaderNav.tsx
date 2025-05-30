import Link from "next/link";

export default function HeaderNav({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href} className="text-lg">
      {children}
    </Link>
  );
}
