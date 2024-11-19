import a1 from "@/assets/1.jpg";
import { TvMinimalPlay } from "lucide-react";
import Image from "next/image";

function ProgramCard() {
  return (
    <div className="bg-neutral-800  w-[305px] h-min border cursor-pointer hover:bg-neutral-700 transition-all hover:scale-[103%] border-white/20 p-2.5 rounded-xl font-sans">
      <Image src={a1} alt="a" className="rounded mb-2 w-full" />
      <div className="flex gap-4 items-start ">
        <div className="size-6 rounded-lg mt-2 bg-neutral-100"></div>
        <div>
          <h2 className="text-lg mb-1">
            <span>1. </span>
            شرح كتاب خلاصة تعظيم العلم
          </h2>
          <p className="flex items-center gap-2">
            <TvMinimalPlay className="size-4" />
            <span>9:23</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;
