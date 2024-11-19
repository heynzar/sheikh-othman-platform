"use client";
import Link from "next/link";
import SideBarCard from "./SideBarCard";
import { firstYearData } from "@/utils/AppData";
import { usePathname } from "next/navigation";

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
          <Link key={majles.id} href={`/program/${majles.id}`}>
            <div
              className={`${isSelected ? "bg-neutral-600" : "bg-transparent"}`}
            >
              <SideBarCard
                title={majles.title}
                id={majles.id}
                isChecked={majles.isChecked}
                duration={majles.duration}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SideBar;
