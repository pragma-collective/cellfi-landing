import xLogo from "~/assets/x-logo.svg";
import githubLogo from "~/assets/github-logo.svg";
import Arrow from "./Arrow";

export default function Social() {
  return (
    <section className="md:bg-cornflowerBlue 2xl:bg-transparent relative overflow-hidden before:content-[''] before:absolute before:bg-delftBlue before:bottom-0 before:left-0 before:right-0 before:h-1/2 md:before:content-[none]">
      <div className="container relative px-5 md:px-14 lg:px-28">
        <div className="bg-cornflowerBlue relative md:pl-0 py-5 md:py-14 lg:py-28 md:before:content-[''] md:before:absolute md:before:top-0 md:before:bottom-0 md:before:left-full md:before:w-full md:before:bg-white md:after:content-[''] md:after:absolute md:after:bottom-0 md:after:left-full md:after:w-full md:after:h-14 lg:after:h-28 md:after:bg-delftBlue 2xl:before:content-[''] 2xl:before:absolute 2xl:before:bottom-0 2xl:before:left-auto 2xl:before:top-auto 2xl:before:right-full 2xl:before:w-full 2xl:before:h-28 2xl:before:bg-delftBlue 2xl:px-28 md:pr-14 lg:pr-28 px-5">
          <div className="flex items-start justify-between">
            <h2 className="font-semibold text-[32px] md:text-[50px] lg:text-[70px] text-white  mb-5 lg:mb-14 leading-none transition-all">
              Follow Us
            </h2>
            <Arrow className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[45px] lg:h-[45px] text-white" />
          </div>
          <div className="flex gap-5 md:gap-[40px]">
            <a
              href="https://x.com/cellfi_eth"
              className="bg-white flex items-center justify-center w-14 md:w-28 aspect-square flex-shrink-0 flex-grow-0"
              target="blank"
            >
              <img src={xLogo} className="w-9 md:w-14 h-auto" alt="X" />
            </a>
            <a
              href="https://github.com/pragma-collective/cell-fi/"
              className="bg-white flex items-center justify-center w-14 md:w-28 aspect-square flex-shrink-0 flex-grow-0"
              target="blank"
            >
              <img
                src={githubLogo}
                className="w-9 md:w-14 h-auto"
                alt="Github"
              />
            </a>
            <div className="flex-grow bg-turquoise"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
