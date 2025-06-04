import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/organism/Header";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import QueryProvider from "@/components/providers/QueryProvider";

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
        <QueryProvider>
          <Header />
          <main className="container-w m-auto px-3.75">{children}</main>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryProvider>
      </body>
    </html>
  );
}
