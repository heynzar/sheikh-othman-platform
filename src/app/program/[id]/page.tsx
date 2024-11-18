export default function Page() {
  return (
    <section className="w-full h-full p-5 overflow-y-scroll">
      <div className="max-w-screen-md w-full mx-auto flex flex-col gap-10 items-center">
        <div className="w-full max-h-min bg-neutral-700 rounded-xl  aspect-video shadow-md m-8">
          <div className="relative pb-[56.15%] h-0 overflow-hidden">
            <iframe
              className="absolute rounded-xl top-0 left-0 w-full h-full border-0"
              loading="lazy"
              srcDoc="<style>
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
    <a href='https://www.youtube.com/embed/FbUMNqRK7nM?autoplay=1'>
      <img src='https://img.youtube.com/vi/FbUMNqRK7nM/sddefault.jpg' alt='abc'>
      <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#facc15' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>
    </a>
    "
              src="https://www.youtube.com/embed/FbUMNqRK7nM"
              title="abc"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="flex justify-between w-full">
          <button className="px-5 py-2 border-2 border-yellow-400 rounded-lg bg-yellow-400 text-black hover:scale-105 active:scale-100 transition-transform">
            المجلس السابق
          </button>
          <button className="px-5 py-2 border-2 border-yellow-400 rounded-lg bg-yellow-400 text-black hover:scale-105 active:scale-100 transition-transform">
            المجلس التالي
          </button>
        </div>

        <div className="p-0.5 rounded-[10px]  bg-neutral-700 w-full max-w-screen-md ">
          <iframe
            loading="lazy"
            src="https://turathkw.com/content/pdf/88e731267a9adbf7dd4aa19270abca94.pdf"
            className="w-full h-[760px] rounded-lg outline-none"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
