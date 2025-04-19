/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef } from "react";
import mediaMp4 from "~/assets/cellfi-media.mp4";
import mediaWebm from "~/assets/cellfi-media.webm";
import poster from "~/assets/cellfi-media-poster.webp";
import caption from "~/assets/cellfi-media-caption.vtt";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const handleLoad = () => {
      const video = videoRef.current;
      if (video) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.warn("Autoplay failed:", error);
          });
        }
      }
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  return (
    <section
      data-section="hero"
      className="relative text-white bg-[#21167a] before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:w-full before:h-1/3 md:before:h-14 lg:before:h-28 before:bg-white"
    >
      <div className="container px-5 md:px-14 lg:px-28 py-8 lg:pt-14 lg:pb-14">
        <h1 className="font-semibold text-[32px] md:text-[50px] lg:text-[70px] leading-tight transition-all">
          SMS-based peer-to-peer payments using{" "}
          <br className="max-[1375px]:hidden" />
          USDC digital currency - no internet required.
        </h1>
      </div>
      <div className="media-wrapper relative md:mr-0 px-5 md:pr-0 md:pl-14 lg:pl-28 xl:pl-0 2xl:px-28 transition-all xl:ml-28 2xl:mx-auto">
        <div
          className="bg-cornflowerBlue rounded-xl md:rounded-r-none 2xl:rounded-xl overflow-hidden bg-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${poster})` }}
        >
          <video
            ref={videoRef}
            width="1920"
            height="1080"
            className="aspect-[3/2.5] md:aspect-auto object-cover w-full h-auto block transition-all"
            poster={poster}
            preload="none"
            autoPlay
            loop
            playsInline
            muted
          >
            <source src={mediaWebm} type="video/webm" />
            <source src={mediaMp4} type="video/mp4" />
            <track src={caption} kind="captions" srcLang="en" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
