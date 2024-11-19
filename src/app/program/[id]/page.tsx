import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { firstYearData } from "@/data/main";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <section className="w-full h-full p-5 overflow-y-scroll">
      <div className="max-w-screen-md w-full mx-auto flex flex-col gap-5 items-center">
        <div className="w-full max-h-min bg-neutral-700 rounded-xl  aspect-video shadow-md m-8">
          <div className="relative pb-[56.15%] h-0 overflow-hidden">
            <iframe
              className="absolute rounded-xl top-0 left-0 w-full h-full border-0"
              loading="lazy"
              srcDoc={`<style>
      * {
      padding: 0;
      margin: 0;
      overflow: hidden;
      }
      body, html {
        height: 100%;
      }
      img, svg {
        position: absolute;
        width: 100%;
        top: 0;
        bottom: 0;
        margin: auto;
      }
      svg {
        filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
        transition: all 250ms ease-in-out;
      }
      body:hover svg {
        filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
        transform: scale(1.2);
      }
    </style>
    <a href='https://www.youtube.com/embed/${
      firstYearData[Number(params.id) - 1].videoLink
    }?autoplay=1'>
      <img src='http://localhost:3000/${params.id}.jpg' alt='${
                firstYearData[Number(params.id) - 1].title
              }'>
<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-circle-play'><circle cx='12' cy='12' r='10'/><polygon points='10 8 16 12 10 16 10 8'/></svg></a>
    `}
              src={`https://www.youtube.com/embed/${
                firstYearData[Number(params.id) - 1].videoLink
              }`}
              title="abc"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

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

        <div className="p-0.5 rounded-[10px]  bg-neutral-700 w-full max-w-screen-md ">
          <iframe
            loading="lazy"
            src={`${firstYearData[Number(params.id) - 1].pdfLink}`}
            className="w-full h-[760px] rounded-lg outline-none"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
