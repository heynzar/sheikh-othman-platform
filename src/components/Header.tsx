"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="border-b border-neutral-500 ">
      <nav className="flex flex-col max-h-[60px] py-4 sm:flex-row items-center justify-between  px-10  max-w-screen-lg mx-auto ">
        <Link href="/">
          <h1 className="hidden  sm:block text-xl hover:text-yellow-400 transition-colors">
            برنامج مفاتح الطلب
          </h1>
        </Link>

        <ul className="flex gap-6">
          <Link href="/about">
            <li
              className={`${
                pathname === "/about" ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400 transition-colors text-lg`}
            >
              عن البرنامج
            </li>
          </Link>
          <Link href="/sheikh-othman-al-kamees">
            <li
              className={`${
                pathname === "/sheikh-othman-al-kamees"
                  ? "text-yellow-400"
                  : "text-white"
              } hover:text-yellow-400 transition-colors text-lg`}
            >
              عن الشيخ
            </li>
          </Link>
          <li className="hover:text-yellow-400 transition-colors text-lg">
            <a href="https://othmanalkamees.com/" target="_blank">
              الموقع الرسمي
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
