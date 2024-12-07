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
  alternates: {
    canonical: "https://sheikh-othman.vercel.app/",
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
      <head>
        <meta
          name="google-site-verification"
          content="tYLAj2kgtjbTbW3NdtbsDNet6hC_nVjWh5Kjsz0RGSo"
        />
      </head>
      <body
        className={`${amiri.className} antialiased max-h-screen overflow-clip`}
      >
        {children}
      </body>
    </html>
  );
}
