import HeaderTwo from "@/components/HeaderTwo";
import SideBar from "@/components/SideBar";
import CheckProvider from "@/context/CheckContext";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderTwo />
      <CheckProvider>
        <main className="flex h-[89vh]">
          <SideBar />
          {children}
        </main>
      </CheckProvider>
    </>
  );
}

export default layout;
