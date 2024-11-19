import { TvMinimalPlay } from "lucide-react";

type ProgramCard = {
  id: number;
  title: string;
  duration: string;
  isChecked: boolean;
};

function SideBarCard({ id, title, duration, isChecked }: ProgramCard) {
  return (
    <div className="flex cursor-pointer p-4 border-b border-white/20 gap-4 items-start hover:bg-neutral-700 ">
      <div className="size-6 rounded-lg cursor-pointer bg-neutral-100"></div>
      <div className="flex flex-col">
        <h2>
          <span>{id}. </span>
          {title}
        </h2>
        <p className="flex items-center gap-2">
          <TvMinimalPlay className="size-4" />
          <span>{duration}</span>
        </p>
      </div>
    </div>
  );
}

export default SideBarCard;
