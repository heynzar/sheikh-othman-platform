"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="border-b border-neutral-500 ">
      <nav className="flex flex-col max-h-[60px] py-4 sm:flex-row items-center justify-between  px-10  max-w-screen-lg mx-auto ">
        <Link href="/">
          <p className="hidden  sm:block text-xl hover:text-yellow-400 transition-colors">
            برنامج مفاتح الطلب
          </p>
        </Link>

        <ul className="flex gap-6">
          <li>
            <Link href="/about">
              <p
                className={`${
                  pathname === "/about" ? "text-yellow-400" : "text-white"
                } hover:text-yellow-400 transition-colors text-lg`}
              >
                عن البرنامج
              </p>
            </Link>
          </li>

          <li>
            <Link href="/sheikh-othman-al-kamees">
              <p
                className={`${
                  pathname === "/sheikh-othman-al-kamees"
                    ? "text-yellow-400"
                    : "text-white"
                } hover:text-yellow-400 transition-colors text-lg`}
              >
                عن الشيخ
              </p>
            </Link>
          </li>

          <li>
            <Link href="/resources">
              <p
                className={`${
                  pathname === "/resources" ? "text-yellow-400" : "text-white"
                } hover:text-yellow-400 transition-colors text-lg`}
              >
                روابط مهمة
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
