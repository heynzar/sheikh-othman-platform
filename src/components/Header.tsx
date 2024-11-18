import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b border-neutral-500">
      <nav className="flex flex-col sm:flex-row items-center justify-between  py-6 px-10  max-w-screen-lg mx-auto ">
        <Link href="/">
          <h1 className="hidden mb-4 sm:block text-xl hover:text-yellow-400 transition-colors">
            برنامج مفاتح الطلب
          </h1>
        </Link>

        <ul className="flex gap-6">
          <Link href="/about">
            <li className="hover:text-yellow-400 transition-colors text-lg">
              البرنامج
            </li>
          </Link>
          <Link href="/about-sheikh">
            <li className="hover:text-yellow-400 transition-colors text-lg">
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
