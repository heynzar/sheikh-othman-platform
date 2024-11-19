import CheckBtn from "@/components/CheckBtn";
import { firstYearData } from "@/utils/AppData";
import { TvMinimalPlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex gap-5  justify-center max-h-min p-5 flex-wrap overflow-y-scroll">
      {firstYearData.map((majles) => {
        return (
          <div
            key={majles.id}
            className="bg-neutral-800 w-[305px] min-h-max border cursor-pointer hover:bg-neutral-700 transition-all hover:scale-[103%] border-white/20 p-2.5 rounded-xl font-sans"
          >
            <Link href={`/program/${majles.id}`}>
              <Image
                src={`http://localhost:3000/${majles.id}.jpg`}
                alt="a"
                className="rounded mb-2 w-full"
                width={180}
                height={100}
              />
            </Link>
            <div className="flex flex-row gap-4 items-start ">
              <CheckBtn isChecked={majles.isChecked} />
              <Link href={`/program/${majles.id}`}>
                <div>
                  <h2 className="text-lg mb-1">
                    <span>{majles.id}. </span>
                    {majles.title}
                  </h2>
                  <p className="flex items-center gap-2">
                    <TvMinimalPlay className="size-4" />
                    <span>{majles.duration}</span>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
