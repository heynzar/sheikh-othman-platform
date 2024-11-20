"use client";
import Link from "next/link";
import { useCheckContext } from "@/context/CheckContext";

const HeaderTwo = () => {
  const { dataCheck } = useCheckContext();
  const total = dataCheck.length;
  let totlaChecked = 0;

  dataCheck.forEach((element) => {
    if (element.isChecked === true) {
      totlaChecked += 1;
    }
  });

  let result = Math.floor((totlaChecked / total) * 100);

  return (
    <header className="border-b border-neutral-500">
      <nav className="flex flex-col sm:flex-row items-center justify-between  py-4 px-10  max-w-screen-lg mx-auto ">
        <Link href="/">
          <h1 className="hidden mb-4 sm:mb-0 sm:block text-xl hover:text-yellow-400 transition-colors">
            برنامج مفاتح الطلب
          </h1>
        </Link>

        <div className="flex gap-2 items-center">
          <h2>{result}%</h2>
          <div className="bg-neutral-600 h-2 w-56 rounded-2xl flex justify-end">
            <div
              style={{ width: `${result}%` }}
              className="bg-yellow-400  h-2 rounded-2xl transition-all"
            ></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderTwo;
