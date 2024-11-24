import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "روابط مهمة",
};

function Home() {
  return (
    <>
      <Header />
      <main className="text-lg md:text-xl tracking-wide leading-9 px-4 sm:px-10 lg:px-0 max-w-screen-md mx-auto py-10 ">
        <h1 className="hidden">روابط مهمة</h1>
        <h2 className="text-3xl mb-10 underline underline-offset-4">
          الموقع الرسمي للشيخ
        </h2>
        <a
          href="https://othmanalkamees.com/"
          className="text-yellow-400 underline underline-offset-4 block mb-2"
          target="_blank"
        >
          https://othmanalkamees.com
        </a>

        <a
          href="https://maps.app.goo.gl/kuBEh7koTBRkFKZS8"
          className="text-yellow-400 underline underline-offset-4 block"
          target="_blank"
        >
          مكان الدورة مسجد الياقوت
        </a>

        <hr className="my-10 opacity-50" />
        <h2 className="text-3xl mb-10 underline underline-offset-4">
          روابط البرنامج على اليوتيوب
        </h2>

        <h3 className="mb-2">
          <a
            href="https://youtube.com/playlist?list=PLx3Fh1kiMbrepiLh7zeqoIAqUC2Epazdz&si=QrCXVve9JaFgrgL-"
            className="text-yellow-400 underline underline-offset-4"
            target="_blank"
          >
            برنامج مفاتح الطلب - السنة الأولى
          </a>
        </h3>
        <h3 className="mb-2">
          <a
            href="https://youtube.com/playlist?list=PLECr9Lnm4f4H04YEVpDGx0WMvRVDGgSwB&si=nsE7s9mg351XoSd7"
            className="text-yellow-400 underline underline-offset-4"
            target="_blank"
          >
            برنامج مفاتح الطلب - السنة الثانية
          </a>
        </h3>
        <h3 className="mb-2">
          <a
            href="https://youtube.com/playlist?list=PLx3Fh1kiMbrcq0eEYzIe9KO5azn387VHi&si=5FaM2gTteJ8zNliV"
            className="text-yellow-400 underline underline-offset-4"
            target="_blank"
          >
            برنامج مفاتح الطلب - السنة الثالثة
          </a>
        </h3>

        <hr className="my-10 opacity-50" />

        <h2 className="text-3xl mb-10 underline underline-offset-4">
          حسابات الشيخ على مواقع التواصل:
        </h2>

        <h3 className="mb-2">
          <a
            href="https://www.youtube.com/@othmanalkamees"
            className="text-yellow-400 underline underline-offset-4"
            target="_blank"
          >
            اليوتيوب
          </a>
        </h3>
        <h3 className="mb-2">
          <a
            href="https://www.instagram.com/othmanelkhamees"
            className="text-yellow-400 underline underline-offset-4"
            target="_blank"
          >
            الانستغرام
          </a>
        </h3>
        <h3 className="mb-2">
          <a
            href="https://www.facebook.com/othmanalkamees"
            className="text-yellow-400 underline underline-offset-4"
            target="_blank"
          >
            الفيسبوك
          </a>
        </h3>
        <h3 className="mb-2">
          <a
            href="https://x.com/othmanalkamees"
            className="text-yellow-400 underline underline-offset-4"
            target="_blank"
          >
            تويتر
          </a>
        </h3>
        <h3 className="mb-2">
          <a
            href="https://t.me/othmanalkamees"
            className="text-yellow-400 underline underline-offset-4"
            target="_blank"
          >
            تلغرام
          </a>
        </h3>
      </main>
      <Footer />
    </>
  );
}

export default Home;
