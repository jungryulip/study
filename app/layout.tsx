import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "코드하루 | 풀스택 개발 학습 기록",
  description: "SQL, Java, Spring Boot, 웹 프론트엔드, Python·AI와 프로젝트 경험을 날짜별로 기록하는 개발 블로그",
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
