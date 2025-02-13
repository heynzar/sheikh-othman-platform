"use client";
import CheckBtn from "@/components/CheckBtn";
import { useCheckContext } from "@/context/CheckContext";
import Image from "next/image";
import { TvMinimalPlay } from "lucide-react";
import { useProgressContext } from "@/context/ProgressContext";

function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const format = (num: number): string => num.toString().padStart(2, "0");

  if (hours > 0) {
    return `${format(hours)}:${format(minutes)}:${format(remainingSeconds)}`;
  }

  if (minutes > 0) {
    return `${format(minutes)}:${format(remainingSeconds)}`;
  }

  return `00:${format(remainingSeconds)}`;
}

export default function Home() {
  const { dataCheck, setDataCheck } = useCheckContext();
  const { progressData } = useProgressContext();

  const toggleCheck = (id: number) => {
    setDataCheck((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <section className="flex mt-10 sm:mt-0 gap-5 justify-center max-h-min p-5 flex-wrap overflow-y-scroll transition-all duration-500">
      <h1 className="hidden">المجالس</h1>
      {dataCheck.map((majles) => (
        <div
          key={majles.id}
          className="bg-neutral-800 w-[305px] min-h-max border cursor-pointer hover:bg-neutral-700 transition-all hover:scale-[103%] border-white/20 p-2.5 rounded-xl font-sans"
        >
          <a href={`/program/${majles.id}`}>
            <div className="relative">
              <Image
                src={`https://sheikh-othman.vercel.app/${majles.id}.png`}
                alt={`${majles.title}`}
                className="rounded mb-2 w-full "
                width={180}
                height={100}
              />
              <span className="absolute bg-black/80 bottom-0 m-2 text-sm py-0.5 px-2 rounded-md">
                {majles.duration}
              </span>
              <div dir="ltr" className="absolute w-full h-1 bg-white bottom-0">
                <div
                  className="h-1 bg-yellow-400 transition-all duration-300"
                  style={{
                    width: `${progressData[majles.id - 1]?.progress || 0}%`,
                  }}
                ></div>
              </div>
            </div>
          </a>

          <div className="flex flex-row gap-4 items-start">
            {/* Pass the toggleCheck and isChecked to CheckBtn */}
            <CheckBtn
              isChecked={majles.isChecked}
              onToggle={() => toggleCheck(majles.id)}
            />
            <a href={`/program/${majles.id}`}>
              <div>
                <h2 className="text-lg mb-1">
                  <span>{majles.id}. </span>
                  {majles.title}
                </h2>
                <p className="flex items-center gap-2">
                  <TvMinimalPlay className="size-4" />
                  <span>
                    {formatDuration(
                      Math.trunc(progressData[majles.id - 1]?.currentTime)
                    )}
                  </span>
                </p>
              </div>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
