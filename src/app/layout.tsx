import type { Metadata } from "next";
import { Amiri } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  subsets: ["arabic"],
  variable: "--amiri",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "برنامج مفاتح الطلب",
    template: `برنامج مفاتح الطلب - %s`,
  },

  description: "منصة لمتابعة وتعلم سلسلة مفاتح الطلب للشيخ عثمان الخميس",
  keywords: [
    "عثمان الخميس",
    "دروس العلم الشرعي",
    "تطبيق إسلامي",
    "طلب العلم",
    "منصة تعليمية إسلامية",
    "برنامج مفاتح الطلب",
  ],
  publisher: "Nzar",
  openGraph: {
    title: "برنامج مفاتح الطلب",
    description: "منصة لمتابعة وتعلم سلسلة مفاتح الطلب للشيخ عثمان الخميس.",
    url: "https://sheikh-othman.vercel.app/",
    type: "website",
    images: [
      {
        url: "/1.png",
        width: 1200,
        height: 630,
        alt: "برنامج مفاتح الطلب",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "برنامج مفاتح الطلب",
    description: "منصة لمتابعة وتعلم سلسلة مفاتح الطلب للشيخ عثمان الخميس.",
    images: ["/1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${amiri.className} antialiased`}>{children}</body>
    </html>
  );
}
