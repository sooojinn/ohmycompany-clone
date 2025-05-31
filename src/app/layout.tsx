import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/organism/Header";

export const metadata: Metadata = {
  title: "크라우드 펀딩 오마이컴퍼니",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="w-[1110px] m-auto">{children}</main>
      </body>
    </html>
  );
}
