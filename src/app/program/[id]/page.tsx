import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { firstYearData } from "@/utils/AppData";
import YouTubePlayer from "@/utils/YouTubePlayer";

export default function Page({ params }: { params: { id: string } }) {
  const videoData = firstYearData[Number(params.id) - 1];

  return (
    <section className="w-full h-full p-5 overflow-y-scroll">
      <div className="max-w-screen-md w-full mx-auto flex flex-col gap-5 items-center">
        {/* YouTube Player */}
        <div className="w-full max-h-min bg-neutral-700 rounded-xl aspect-video shadow-md m-8">
          <YouTubePlayer
            videoId={videoData.videoLink}
            thumbnail={`http://localhost:3000/${params.id}.jpg`}
            title={videoData.title}
          />
        </div>
        {/* Navigation Buttons */}
        <div className="flex justify-between w-full">
          <button className="flex gap-2 items-center px-5 py-2 border-2 border-yellow-400 rounded-lg bg-yellow-400 text-black hover:scale-105 active:scale-100 transition-transform">
            <CircleChevronRight />
            <span>المجلس السابق</span>
          </button>
          <button className="flex gap-2 items-center px-5 py-2 border-2 border-yellow-400 rounded-lg bg-yellow-400 text-black hover:scale-105 active:scale-100 transition-transform">
            <span> المجلس التالي</span>
            <CircleChevronLeft />
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="p-0.5 rounded-[10px] bg-neutral-700 w-full max-w-screen-md">
          <iframe
            loading="lazy"
            src={`${videoData.pdfLink}`}
            className="w-full h-[760px] rounded-lg outline-none"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
