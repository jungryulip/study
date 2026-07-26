import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SQL하루 | Oracle SQL 학습 기록",
  description: "Oracle SQL과 SQLD를 공부하며 배운 것을 날짜별로 기록하는 개발 블로그",
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
