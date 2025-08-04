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
  title: "명퇴자들이 현실적으로 월 500만원 버는 방법",
  description: "명퇴자들이 현실적으로 월 500만원 버는 방법 - 유품정리와 폐기물처리로 안정적 수익 창출 교육해드립니다",
  keywords: ["신독환경", "낙찰", "집정리", "이사정리", "청소", "무료견적", "명퇴자", "월500만원"],
  authors: [{ name: "신독환경" }],
  viewport: "width=device-width, initial-scale=1",
  
  // Open Graph 메타데이터
  openGraph: {
    title: "명퇴자들이 현실적으로 월 500만원 버는 방법",
    description: "명퇴자들이 현실적으로 월 500만원 버는 방법 - 유품정리와 폐기물처리로 안정적 수익 창출 교육해드립니다",
    type: "website",
    locale: "ko_KR",
    siteName: "신독환경",
    images: [
      {
        url: "/image/before.jpg",
        width: 1200,
        height: 630,
        alt: "명퇴자들이 현실적으로 월 500만원 버는 방법",
      },
    ],
  },
  
  // Twitter Card 메타데이터
  twitter: {
    card: "summary_large_image",
    title: "명퇴자들이 현실적으로 월 500만원 버는 방법",
    description: "명퇴자들이 현실적으로 월 500만원 버는 방법 - 유품정리와 폐기물처리로 안정적 수익 창출 교육해드립니다",
    images: ["/image/before.jpg"],
  },
  
  // 추가 메타데이터
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sdretriree.vercel.app",
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
