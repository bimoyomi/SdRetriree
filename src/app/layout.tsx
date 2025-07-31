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
  title: "신독환경 | 낙찰받은 집 정리 전문",
  description: "낙찰받은 집의 남겨진 가구, 가전제품, 쓰레기까지 하루 만에 말끔히 정리해드립니다. 무료 견적 상담 가능합니다.",
  keywords: ["신독환경", "낙찰", "집정리", "이사정리", "청소", "무료견적"],
  authors: [{ name: "신독환경" }],
  viewport: "width=device-width, initial-scale=1",
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
