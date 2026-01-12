import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "서든어택 | 서든어택디스코드 | 서든어택라운지 | SP거래소 | 서든어택자랭",
  description: "서든어택 커뮤니티, 서든어택디스코드, 서든어택라운지, SP거래소, 서든어택자랭, 서든클랜구하기, 서든친목, 서든라디오 정보를 제공합니다.",
  keywords: [
    "서든어택",
    "서든어택디스코드",
    "서든어택라운지",
    "sp거래소",
    "서든어택자랭",
    "서든클랜구하기",
    "서든친목",
    "서든라디오",
    "서든어택 커뮤니티",
    "서든어택 정보",
  ],
  openGraph: {
    title: "서든어택 | 서든어택디스코드 | 서든어택라운지 | SP거래소",
    description: "서든어택 커뮤니티, 서든어택디스코드, 서든어택라운지, SP거래소, 서든어택자랭 정보 제공",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
