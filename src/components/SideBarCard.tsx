import { TvMinimalPlay } from "lucide-react";

type ProgramCard = {
  id: number;
  title: string;
  duration: string;
  isChecked: boolean;
};

function SideBarCard({ id, title, duration, isChecked }: ProgramCard) {
  return (
    <div className="flex flex-col w-[240px] cursor-pointer">
      <h2>
        <span>{id}. </span>
        {title}
      </h2>
      <p className="flex items-center gap-2">
        <TvMinimalPlay className="size-4" />
        <span>{duration}</span>
      </p>
    </div>
  );
}

export default SideBarCard;
