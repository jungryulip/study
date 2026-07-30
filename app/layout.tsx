import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "코드하루 | SQL & Java 학습 기록",
  description: "Oracle SQL, SQLD와 Java를 공부하며 배운 것을 날짜별로 기록하는 개발 블로그",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
