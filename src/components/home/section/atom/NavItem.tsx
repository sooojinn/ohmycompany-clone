import Link from "next/link";
import NavIconWrapper from "./NavIconWrapper";

export default function NavItem({
  category,
  children,
  href,
}: {
  category: string;
  children: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <NavIconWrapper category={category} />
      <p className="text-sm text-center font-medium pt-2">{children}</p>
    </Link>
  );
}
