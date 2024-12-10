"use client";
import Link from "next/link";
import { useCheckContext } from "@/context/CheckContext";
import { usePathname } from "next/navigation";

const HeaderTwo = () => {
  const { dataCheck } = useCheckContext();
  const total = dataCheck.length;
  let totlaChecked = 0;

  dataCheck.forEach((element) => {
    if (element.isChecked === true) {
      totlaChecked += 1;
    }
  });

  const result = Math.floor((totlaChecked / total) * 100);
  const pathname = usePathname();

  console.log(pathname);

  return (
    <header className="border-b border-neutral-500 ">
      <nav className="flex flex-col  sm:flex-row items-center justify-between sm:max-h-[55px]  py-4 px-10  max-w-screen-lg mx-auto ">
        <div className="flex justify-between items-center gap-6 mb-2">
          <Link href="/">
            <span className=" mb-4 sm:mr-5 sm:mb-0  text-xl hover:text-yellow-400 transition-colors">
              برنامج مفاتح الطلب
            </span>
          </Link>

          <Link href="/program" className="sm:hidden">
            <button
              className={`${
                pathname === "/program" ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400 transition-colors text-lg`}
            >
              المجالس
            </button>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-10 items-center ">
          <Link href="/program" className="hidden sm:block">
            <button
              className={`${
                pathname === "/program" ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400 transition-colors text-lg`}
            >
              المجالس
            </button>
          </Link>
          <div className="flex gap-2 items-center">
            <span>{result}%</span>
            <div className="bg-neutral-600 h-2 w-56 rounded-2xl flex justify-end">
              <div
                style={{ width: `${result}%` }}
                className="bg-yellow-400  h-2 rounded-2xl transition-all"
              ></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderTwo;
