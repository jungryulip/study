import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SQLD Log | SQL 학습 포트폴리오",
  description: "SQLD 자격증을 준비하며 배운 데이터 모델링과 SQL을 기록하는 학습 아카이브",
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
