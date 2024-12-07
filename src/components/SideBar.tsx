"use client";
import Link from "next/link";
import SideBarCard from "./SideBarCard";
import { usePathname } from "next/navigation";
import CheckBtn from "./CheckBtn";
import { useCheckContext } from "@/context/CheckContext";
import { useState, useEffect, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";
import { PanelRight } from "lucide-react";

function SideBar() {
  const [close, setClose] = useState(true);
  const pathname = usePathname();
  const selectedId = Number(pathname.split("/").pop());

  const [track, setTrack] = useState(false);
  const [width, setWidth] = useState(320);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (track) {
        const newWidth = Math.min(
          Math.max(window.innerWidth - e.clientX, 220),
          410
        );
        setWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      if (track) setTrack(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [track]);

  const { dataCheck, setDataCheck } = useCheckContext();

  const toggleCheck = (id: number) => {
    setDataCheck((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <aside className="relative">
      <div className="absolute -top-24 sm:-top-16 right-0 size-9 m-4">
        <div
          onClick={() => setClose(!close)}
          id="open-close-side-bar"
          className="rounded-md bg-neutral-800 size-8 p-1 flex items-center justify-center hover:bg-neutral-700/70 transition-colors cursor-pointer"
        >
          <PanelRight strokeWidth={1} className="size-6" />
        </div>
      </div>
      <div
        style={{
          marginRight: `${close ? 0 : -width - 40}px`,
          transition: "0.5s ease",
        }}
        className="select-none absolute shadow-md md:static md:shadow-none z-50"
      >
        <div
          className={twMerge(
            "flex transition-all duration-500",
            close
              ? "min-w-[300px] sm:max-h-[calc(100dvh-60px)] max-h-[calc(100dvh-92px)] overflow-y-clip  max-w-[410px]"
              : "translate-x-[100%]"
          )}
        >
          <div
            style={{ width: `${width}px` }}
            className={twMerge(
              "relative min-w-[300px] max-w-[410px] overflow-y-scroll overflow-x-clip flex flex-col justify-between text-sm bg-neutral-800 border-l border-white/10"
            )}
          >
            {dataCheck.map((majles) => {
              // Check if the current card matches the selected ID
              const isSelected = majles.id === selectedId;

              return (
                <div
                  key={majles.id}
                  className={`flex items-center  p-4 border-b border-white/20 gap-4  hover:bg-neutral-700 ${
                    isSelected ? "bg-neutral-600" : "bg-transparent"
                  }`}
                >
                  <div className="cursor-pointer">
                    <CheckBtn
                      isChecked={majles.isChecked}
                      onToggle={() => toggleCheck(majles.id)}
                    />
                  </div>

                  <Link href={`/program/${majles.id}`}>
                    <SideBarCard
                      title={majles.title}
                      id={majles.id}
                      duration={majles.duration}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
          <div
            onMouseDown={() => setTrack(true)}
            className="w-1.5  h-screen bg-transparent hover:bg-neutral-600/80 transition-colors cursor-col-resize"
          ></div>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
