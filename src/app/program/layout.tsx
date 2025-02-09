import HeaderTwo from "@/components/HeaderTwo";
import SideBar from "@/components/SideBar";
import CheckProvider from "@/context/CheckContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "المجالس",
    template: `برنامج مفاتح الطلب - %s`,
  },
};

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CheckProvider>
        <HeaderTwo />
        <main className="flex max-h-[calc(100dvh-94px)] sm:max-h-[calc(100dvh-56px)]">
          <SideBar />
          {children}
        </main>
      </CheckProvider>
    </>
  );
}

export default layout;
