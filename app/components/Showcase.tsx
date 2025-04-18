import Arrow from "./Arrow";
import image from "~/assets/cellfi-eth-global-showcase.webp";

export default function Showcase() {
  return (
    <section className="bg-white py-14 lg:py-28">
      <div className="container px-5 md:px-14 lg:px-28">
        <h3 className="font-semibold text-[32px] md:text-[50px] lg:text-[70px] text-turquoise mb-5 lg:mb-14 leading-none transition-all">
          Project Showcase
        </h3>
        <a
          href="https://ethglobal.com/showcase/cellfi-ctrmp"
          className="relative block"
          target="blank"
        >
          <Arrow className="absolute top-5 right-5 md:top-10 md:right-10 w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[45px] lg:h-[45px] text-white" />
          <img
            src={image}
            className="w-full h-auto"
            alt="CellFi ETH Global - Taipei Showcase"
          />
        </a>
      </div>
    </section>
  );
}
