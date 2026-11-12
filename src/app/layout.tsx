import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "마이링크 | MyLink",
  description: "김민식의 마이링크 프로필 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
