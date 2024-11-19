import ProgramCard from "@/components/ProgramCard";
import { firstYearData } from "@/utils/AppData";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex gap-5  justify-center max-h-min p-5 flex-wrap overflow-y-scroll">
      {firstYearData.map((majles) => {
        return (
          <Link key={majles.id} href={`/program/${majles.id}`}>
            <ProgramCard
              title={majles.title}
              id={majles.id}
              isChecked={majles.isChecked}
              duration={majles.duration}
            />
          </Link>
        );
      })}
    </section>
  );
}
