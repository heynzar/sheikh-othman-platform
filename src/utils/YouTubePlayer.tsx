"use client";

import { useEffect, useRef, useState } from "react";

function YouTubePlayer({
  videoId,
  thumbnail,
  title,
}: {
  videoId: string;
  thumbnail: string;
  title: string;
}) {
  const playerRef = useRef<any>(null);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Load the YouTube iframe API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Create YouTube player once API is ready
    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player(
        `youtube-player-${videoId}`,
        {
          videoId,
          events: {
            onStateChange: onPlayerStateChange,
          },
        }
      );
    };

    return () => {
      playerRef.current?.destroy();
    };
  }, [videoId]);

  const onPlayerStateChange = (event: any) => {
    if (event.data === (window as any).YT.PlayerState.PLAYING) {
      const duration = playerRef.current.getDuration();
      const interval = setInterval(() => {
        const currentTime = playerRef.current.getCurrentTime();
        const progress = (currentTime / duration) * 100;

        if (progress >= 80) {
          setIsChecked(true);
          clearInterval(interval);
        }
      }, 1000);
    }
  };

  return (
    <div className="relative pb-[56.15%] h-0 overflow-hidden">
      <iframe
        id={`youtube-player-${videoId}`}
        className="absolute rounded-xl top-0 left-0 w-full h-full border-0 outline-none"
        loading="lazy"
        srcDoc={`<style>
          * { padding: 0; margin: 0; overflow: hidden; }
          body, html { height: 100%; }
          img, svg { position: absolute; width: 100%; top: 0; bottom: 0; margin: auto; }
          svg { filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%)); transition: all 250ms ease-in-out; }
          body:hover svg { filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%)); transform: scale(1.2); }
        </style>
        <a href='https://www.youtube.com/embed/${videoId}?autoplay=1'>
          <img src='${thumbnail}' alt='${title}'>
          <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-circle-play'>
            <circle cx='12' cy='12' r='10'/>
            <polygon points='10 8 16 12 10 16 10 8'/>
          </svg>
        </a>`}
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default YouTubePlayer;
