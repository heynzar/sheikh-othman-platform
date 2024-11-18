import Link from "next/link";
import SideBarCard from "./SideBarCard";

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

function SideBar() {
  return (
    <div className="h-full overflow-y-scroll min-w-[320px] bg-neutral-800">
      {data.map((a) => {
        return (
          <Link href={`/program/${a.id}`}>
            <SideBarCard />
          </Link>
        );
      })}
    </div>
  );
}

export default SideBar;
