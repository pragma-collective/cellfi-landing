/* eslint-disable jsx-a11y/media-has-caption */
import media from "/public/cellfi-media.mp4";

export default function Hero() {
  return (
    <section
      data-section="hero"
      className="relative text-white bg-[#21167a] before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:w-full before:h-[120px] before:bg-white"
    >
      <div className="container pt-[120px] pb-[90px]">
        <h1 className="font-semibold text-[70px] leading-tight">
          SMS-based peer-to-peer payments using{" "}
          <br className="max-[1375px]:hidden" />
          USDC digital currency - no internet required.
        </h1>
      </div>
      <div className="media-wrapper relative">
        <video className="w-full h-auto block" autoPlay loop playsInline muted>
          <source src={media} type="video/mp4"></source>
        </video>
      </div>
    </section>
  );
}
