import Link from "next/link";

const HeaderTwo = () => {
  return (
    <header className="border-b border-neutral-500">
      <nav className="flex flex-col sm:flex-row items-center justify-between  py-4 px-10  max-w-screen-lg mx-auto ">
        <Link href="/">
          <h1 className="hidden mb-4 sm:mb-0 sm:block text-xl hover:text-yellow-400 transition-colors">
            برنامج مفاتح الطلب
          </h1>
        </Link>

        <div className="flex gap-2 items-center">
          <h2>38%</h2>
          <div className="bg-neutral-600 h-2 w-56 rounded-2xl flex justify-end">
            <div className="bg-yellow-400 h-2 w-24 rounded-2xl"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderTwo;
