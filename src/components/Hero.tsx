import Image from "next/image";
import sheikhOthman from "@/assets/sheikh-othman.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 px-4 h-[calc(100dvh-62px)]">
      <Image
        src={sheikhOthman}
        alt="الشيخ الدكتور عثمان الخميس - محاضر برنامج مفاتح الطلب"
        className="size-40 md:size-52 lg:size-72 rounded-full lg:rounded-3xl border-2"
      />
      <section className="flex flex-col items-center text-center gap-4 lg:gap-8">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
          برنامج مفاتح الطلب
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          رحلة طلب العلم الشرعي بعنوان <strong>مفاتح الطلب</strong>، بإشراف
          الشيخ د.عثمان الخميس
        </p>
        <div className="flex gap-4 mt-2 font-bold">
          <Link href="/program">
            <button className="button-primary">ابدأ من هنا</button>
          </Link>
          <Link href="/about">
            <button className="px-5 py-2 border-2 border-yellow-400 text-yellow-400 rounded-lg hover:scale-105 active:scale-100 transition-transform">
              نبذة عن البرنامج
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Hero;
