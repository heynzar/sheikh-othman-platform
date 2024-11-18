import { TvMinimalPlay } from "lucide-react";

function SideBarCard() {
  return (
    <div className="flex cursor-pointer p-4 border-b border-white/20 gap-4 items-start hover:bg-neutral-700 ">
      <div className="size-6 rounded-lg cursor-pointer bg-red-50"></div>
      <div className="flex flex-col">
        <h2>
          <span>1. </span>
          المنظومة الميمية في الوصايا والآداب العلمية
        </h2>
        <p className="flex items-center gap-2">
          <TvMinimalPlay className="size-4" />
          <span>9:23</span>
        </p>
      </div>
    </div>
  );
}

export default SideBarCard;
