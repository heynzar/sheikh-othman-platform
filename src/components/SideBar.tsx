"use client";
import Link from "next/link";
import SideBarCard from "./SideBarCard";
import { usePathname } from "next/navigation";
import CheckBtn from "./CheckBtn";
import { useCheckContext } from "@/context/CheckContext";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function SideBar() {
  // Get the current pathname
  const pathname = usePathname();
  const [hide, setHide] = useState(true);

  // Extract the dynamic ID from the URL (e.g., /program/[id])
  const selectedId = Number(pathname.split("/").pop());

  const { dataCheck, setDataCheck } = useCheckContext();

  const toggleCheck = (id: number) => {
    setDataCheck((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <aside>
      {hide && (
        <div
          className="cursor-pointer bg-neutral-800 rounded z-10  absolute right-0 top-15 flex justify-end"
          onClick={() => {
            setHide(!hide);
          }}
        >
          <ChevronsLeft className="size-10" />
        </div>
      )}
      <div
        className={twMerge(
          "z-20  h-full overflow-y-scroll min-w-[320px] shadow-[-10px_0px_20px_rgba(0,0,0,0.2)] bg-neutral-800 ",
          hide ? "hidden" : "absolute"
        )}
      >
        <div
          className="sticky inset-0 bg-neutral-800 border-b hover:bg-neutral-700 border-white/20 cursor-pointer flex justify-end"
          onClick={() => {
            setHide(!hide);
          }}
        >
          <ChevronsRight className="size-10" />
        </div>
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
    </aside>
  );
}

export default SideBar;
