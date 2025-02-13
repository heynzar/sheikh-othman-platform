import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { appData } from "@/utils/AppData";
import { redirect } from "next/navigation";
import YouTubePlayer from "@/components/YouTubePlayer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const videoData = appData[Number(id) - 1];

  return {
    title: videoData.title,
    description: "منصة لمتابعة وتعلم سلسلة مفاتح الطلب للشيخ عثمان الخميس.",
    alternates: {
      canonical: `https://sheikh-othman.vercel.app/program/${id}`,
    },
    url: `https://sheikh-othman.vercel.app/program/${id}`,
    openGraph: {
      images: [
        {
          url: `https://sheikh-othman.vercel.app/${id}.png`,
          width: 1200,
          height: 630,
          alt: videoData.title,
        },
      ],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const videoData = appData[Number(id) - 1];

  if (Number(id) < 1 || Number(id) > 39) {
    redirect("/program");
  }

  return (
    <section className="w-full max-h-[calc(100dvh-94px)] sm:max-h-[calc(100dvh-56px)] mt-4 sm:mt-0 p-5 overflow-y-scroll mr-auto">
      <div className="max-w-screen-md w-full mx-auto flex flex-col gap-5 items-center">
        <h1 className="hidden">{videoData.title}</h1>
        <div className="w-full max-h-min bg-neutral-700 rounded-xl  aspect-video shadow-md m-8">
          <div className="relative pb-[56.15%] h-0 overflow-hidden">
            <YouTubePlayer
              videoIndex={videoData.id}
              videoId={videoData.videoLink}
              title={videoData.title}
            />
          </div>
        </div>
        {/* Navigation Buttons */}
        <div className="flex justify-between w-full -mt-5 mb-3">
          <a href={`/program/${Math.max(1, Number(id) - 1)}`}>
            <button className="flex gap-2 items-center button-primary">
              <CircleChevronRight />
              <span>المجلس السابق</span>
            </button>
          </a>

          <a href={`/program/${Math.min(37, Number(id) + 1)}`}>
            <button className="flex gap-2 items-center button-primary">
              <span> المجلس التالي</span>
              <CircleChevronLeft />
            </button>
          </a>
        </div>

        <div className="p-0.5 rounded-[10px] bg-neutral-700 w-full max-w-screen-md">
          <iframe
            src={`${videoData.pdfLink}`}
            width="640"
            height="480"
            allow="autoplay"
            className="w-full h-[760px] rounded-lg outline-none"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
