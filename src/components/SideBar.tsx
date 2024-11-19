"use client";
import Link from "next/link";
import SideBarCard from "./SideBarCard";
import { firstYearData } from "@/utils/AppData";
import { usePathname } from "next/navigation";
import CheckBtn from "./CheckBtn";

function SideBar() {
  // Get the current pathname
  const pathname = usePathname();

  // Extract the dynamic ID from the URL (e.g., /program/[id])
  const selectedId = Number(pathname.split("/").pop());

  return (
    <div className="h-full overflow-y-scroll min-w-[320px] bg-neutral-800">
      {firstYearData.map((majles) => {
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
              <CheckBtn isChecked={majles.isChecked} />
            </div>

            <Link href={`/program/${majles.id}`}>
              <SideBarCard
                title={majles.title}
                id={majles.id}
                isChecked={majles.isChecked}
                duration={majles.duration}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default SideBar;
