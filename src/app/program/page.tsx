import ProgramCard from "@/components/ProgramCard";

export default function Home() {
  return (
    <section className="flex gap-5  justify-center max-h-min p-5 flex-wrap overflow-y-scroll">
      <ProgramCard />
      <ProgramCard />
      <ProgramCard />
      <ProgramCard />
      <ProgramCard />
      <ProgramCard />
    </section>
  );
}
