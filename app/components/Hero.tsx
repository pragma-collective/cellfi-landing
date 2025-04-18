/* eslint-disable jsx-a11y/media-has-caption */
import mediaMp4 from "~/assets/cellfi-media.mp4";
import mediaWebm from "~/assets/cellfi-media.webm";
import poster from "~/assets/cellfi-media-poster.webp";

export default function Hero() {
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
        <video
          className="aspect-[3/2.5] md:aspect-auto object-cover w-full h-auto block rounded-xl md:rounded-r-none 2xl:rounded-xl transition-all"
          poster={poster}
          autoPlay
          loop
          playsInline
          muted
        >
          <source src={mediaWebm} type="video/webm" />
          <source src={mediaMp4} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
