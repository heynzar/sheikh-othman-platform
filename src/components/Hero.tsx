import Image from "next/image";
import sheikhOthman from "@/assets/sheikh-othman.png";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="flex flex-col px-4 lg:flex-row gap-5 lg:gap-10 justify-center items-center h-[80dvh]">
      <Image
        src={sheikhOthman}
        alt="الشيخ د.عثمان الخميس"
        className="size-52 lg:size-72 rounded-full lg:rounded-3xl border-2"
      />
      <div className="flex flex-col items-center gap-5 lg:gap-10">
        <h1 className="text-4xl md:text-6xl lg:text-8xl">برنامج مفاتح الطلب</h1>
        <p className="text-xl md:text-2xl text-center">
          رحلة طلب العلم الشرعي بعنوان مفاتح الطلب، للشيخ د.عثمان الخميس
        </p>

        <div className="flex gap-4 mt-2 font-bold">
          <Link href="/program">
            <button className="button-primary">إبدأ من هنا</button>
          </Link>
          <Link href="/about">
            <button className="px-5 py-2 border-2 border-yellow-400 text-yellow-400 rounded-lg  hover:scale-105 active:scale-100 transition-transform">
              نبذة عن البرنامج
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Hero;
