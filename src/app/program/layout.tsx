import HeaderTwo from "@/components/HeaderTwo";
import SideBar from "@/components/SideBar";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderTwo />
      <main className="flex h-[89vh]">
        <SideBar />
        {children}
      </main>
    </>
  );
}

export default layout;
