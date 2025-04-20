import LazyImage from "./LazyImage";
import Arrow from "./Arrow";
import image from "~/assets/cellfi-eth-global-showcase.webp";

export default function Showcase() {
  return (
    <section className="bg-white py-14 lg:py-28">
      <div className="container px-5 md:px-14 lg:px-28">
        <h2 className="font-semibold text-[32px] md:text-[50px] lg:text-[70px] text-midnightBlue mb-5 lg:mb-14 leading-none transition-all">
          Project Showcase
        </h2>
        <a
          href="https://ethglobal.com/showcase/cellfi-ctrmp"
          className="relative block overflow-hidden"
          target="blank"
        >
          <LazyImage
            src={image}
            width={2372}
            height={812}
            className="w-full h-auto transition-all duration-500 hover:scale-105 ease-in-out"
            alt="CellFi ETH Global - Taipei Showcase"
          />
          <Arrow className="absolute top-5 right-5 md:top-10 md:right-10 w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[45px] lg:h-[45px] text-white" />
        </a>
      </div>
    </section>
  );
}
