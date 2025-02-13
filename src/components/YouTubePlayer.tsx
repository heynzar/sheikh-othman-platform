"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { useProgressContext } from "@/context/ProgressContext";
import { useCheckContext } from "@/context/CheckContext";
import Link from "next/link";

declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady?: () => void;
  }
}

function YouTubePlayer({
  videoId,
  videoIndex,
  title,
}: {
  videoId: string;
  videoIndex: number;
  title: string;
}) {
  const playerRef = useRef<YT.Player | null>(null);
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const { progressData, updateProgress } = useProgressContext();
  const { setDataCheck } = useCheckContext();
  const [showConfetti, setShowConfetti] = useState(false);
  const [videoTime, setVideoTime] = useState<number | null>(null);
  const [ytReady, setYtReady] = useState(false);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    } else {
      initPlayer();
    }

    window.onYouTubeIframeAPIReady = () => {
      initPlayer();
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [videoId]);

  useEffect(() => {
    const checkYT = setInterval(() => {
      if (window.YT && window.YT.Player) {
        clearInterval(checkYT);
        setYtReady(true);
      }
    }, 500);

    return () => clearInterval(checkYT);
  }, []);

  useEffect(() => {
    const fetchedTime = Math.trunc(
      progressData[videoIndex - 1]?.currentTime || 0
    );
    setVideoTime(fetchedTime);
  }, [progressData, videoIndex]);

  const initPlayer = useCallback(() => {
    if (!ytReady || videoTime === null || playerRef.current) return;

    playerRef.current = new window.YT.Player(`youtube-player-${videoId}`, {
      videoId,
      playerVars: {
        autoplay: 1,
        rel: 0,
      },
      events: {
        onReady: (event: YT.PlayerEvent) => {
          event.target.seekTo(videoTime, true);
        },
        onStateChange: onPlayerStateChange,
      },
    });
  }, [ytReady, videoTime, videoId]);

  useEffect(() => {
    initPlayer();
  }, [ytReady, videoTime, initPlayer]);

  const onPlayerStateChange = (event: YT.OnStateChangeEvent) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      const duration = playerRef.current?.getDuration();

      if (!duration) return;

      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }

      progressInterval.current = setInterval(() => {
        if (playerRef.current) {
          const currentTime = playerRef.current.getCurrentTime();
          const newProgress = (currentTime / duration) * 100;

          updateProgress(videoIndex, newProgress, currentTime);

          if (newProgress >= 99.9) {
            setDataCheck((prevData) =>
              prevData.map((item) =>
                item.id === videoIndex ? { ...item, isChecked: true } : item
              )
            );
            setShowConfetti(true);
          }
        }
      }, 1000);
    } else {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    }
  };

  return (
    <div className="">
      {showConfetti && (
        <div className="absolute inset-0 h-[calc(100%-56px)] flex flex-col items-center justify-center bg-black/80 z-10 rounded-t-xl text-white text-center p-4">
          <h3 className="text-2xl font-bold">🎉 تهانينا! 🎉</h3>
          {videoIndex === 39 ? (
            <div className="my-4">
              <p className="text-lg">الحمد لله الذي بنعمته تتم الصالحات</p>
              <p className="text-md mt-2">
                لقد أتممت برنامج مفاتح الطلب بفضل من الله وتوفيقه
              </p>
            </div>
          ) : (
            <div className="space-y-4 my-6">
              <p className="text-lg">
                بفضلٍ من الله وتوفيقه، أتممت دراسة{" "}
                <span className="font-semibold">{title}</span>
              </p>

              <p className="text-sm text-gray-300">
                {" "}
                اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا
                يَنْفَعُنِي وَزِدْنِي عِلْمًا{" "}
              </p>
            </div>
          )}
          <div className="mt-6 flex gap-4">
            {!(videoIndex === 39) && (
              <a
                href={`/program/${Math.min(37, Number(videoIndex) + 1)}`}
                className="button-primary !py-2 hover:scale-105 transition-transform"
              >
                واصل المسير في طلب العلم
              </a>
            )}

            <Link
              href="/program"
              className="button-secondary !py-2 hover:scale-105 transition-transform"
            >
              العودة إلى الصفحة الرئيسية
            </Link>
          </div>
        </div>
      )}

      <div
        className="relative w-full overflow-hidden"
        style={{ paddingBottom: "56.25%" }}
      >
        <div
          id={`youtube-player-${videoId}`}
          className="absolute rounded-xl top-0 left-0 w-full h-full border-0"
        />
      </div>
    </div>
  );
}

export default YouTubePlayer;

{
  /* <div dir="ltr" className="absolute z-10 w-full h-2 bg-white bottom-0">
        <div
          className="h-2 bg-yellow-400 transition-all duration-300"
          style={{ width: `${progressData[videoIndex - 1]?.progress || 0}%` }}
        ></div>
      </div> */
}
