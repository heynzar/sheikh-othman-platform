import { TvMinimalPlay } from "lucide-react";

type ProgramCard = {
  id: number;
  title: string;
  duration: string;
  progress: number;
};

function SideBarCard({ id, title, duration, progress }: ProgramCard) {
  return (
    <div className="flex flex-col w-[240px] cursor-pointer">
      <h2>
        <span>{id}. </span>
        {title}
      </h2>
      <p className="flex items-center gap-2">
        <TvMinimalPlay className="size-4" />
        <span>
          {duration} - {Math.trunc(progress)}%
        </span>
      </p>
    </div>
  );
}

export default SideBarCard;
