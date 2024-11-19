import { TvMinimalPlay } from "lucide-react";
import Image from "next/image";
import a1 from "@/assets/1.jpg";

type ProgramCard = {
  id: number;
  title: string;
  duration: string;
  isChecked: boolean;
};

function ProgramCard({ id, title, duration, isChecked }: ProgramCard) {
  return (
    <div className="bg-neutral-800 w-[305px] min-h-max border cursor-pointer hover:bg-neutral-700 transition-all hover:scale-[103%] border-white/20 p-2.5 rounded-xl font-sans">
      <Image
        src={`http://localhost:3000/${id}.jpg`}
        alt="a"
        className="rounded mb-2 w-full"
        width={180}
        height={100}
      />
      <div className="flex gap-4 items-start ">
        <div className="size-6 rounded-lg mt-2 bg-neutral-100"></div>
        <div>
          <h2 className="text-lg mb-1">
            <span>{id}. </span>
            {title}
          </h2>
          <p className="flex items-center gap-2">
            <TvMinimalPlay className="size-4" />
            <span>{duration}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;
