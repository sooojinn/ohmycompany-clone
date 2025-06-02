import Image from "next/image";
import Link from "next/link";

export default function Logo({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return (
    <Link href="/">
      <Image
        src="https://www.ohmycompany.com/assets/img/common.logo.svg"
        width={width}
        height={height}
        alt="ohmycompany"
      />
    </Link>
  );
}
