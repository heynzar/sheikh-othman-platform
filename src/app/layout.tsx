import type { Metadata } from "next";
import { Amiri } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  subsets: ["arabic"],
  variable: "--amiri",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "تطبيق متابعة برنامج مفاتح الطلب",
  description: "رحلة طلب العلم الشرعي بعنوان مفاتح الطلب، للشيخ د.عثمان الخميس",
  openGraph: {
    title: "تطبيق متابعة برنامج مفاتح الطلب",
    description:
      "رحلة طلب العلم الشرعي بعنوان مفاتح الطلب، للشيخ د.عثمان الخميس.",
    url: "https://sheikh-othman.vercel.app/",
    type: "website",
    images: [
      {
        url: "/1.png",
        width: 1200,
        height: 630,
        alt: "تطبيق متابعة برنامج مفاتح الطلب",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تطبيق متابعة برنامج مفاتح الطلب",
    description:
      "رحلة طلب العلم الشرعي بعنوان مفاتح الطلب، للشيخ د.عثمان الخميس.",
    images: ["/1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${amiri.className} antialiased`}>{children}</body>
    </html>
  );
}
