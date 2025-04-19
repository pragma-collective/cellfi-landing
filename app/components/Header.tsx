import Logo from "./Logo";
import CTA from "./CTA";
import xLogo from "~/assets/x-logo.svg";
import githubLogo from "~/assets/github-logo.svg";

export default function Header() {
  return (
    <header className="py-[20px] md:py-[40px] bg-[#21167a] text-white">
      <div className="container px-5 md:px-14 lg:px-28">
        <div className="flex items-center justify-between">
          <Logo className="w-[120px] md:w-[165px] h-auto text-white" />
          <div className="flex items-center gap-[30px]">
            <a
              href="https://x.com/cellfi_eth"
              className="hidden md:inline-block hover:scale-125 transition-all"
              target="blank"
            >
              <img
                src={xLogo}
                className="w-[24px] h-auto grayscale invert"
                alt="X"
              />
            </a>
            <a
              href="https://github.com/pragma-collective/cell-fi/"
              className="hidden md:inline-block hover:scale-125 transition-all"
              target="blank"
            >
              <img
                src={githubLogo}
                className="w-[26px] h-auto grayscale invert"
                alt="Github"
              />
            </a>
            <CTA />
          </div>
        </div>
      </div>
    </header>
  );
}
