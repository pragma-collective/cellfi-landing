import Logo from "./Logo";
import CTA from "./CTA";

export default function Header() {
  return (
    <header className="py-[20px] md:py-[40px] bg-[#21167a] text-white">
      <div className="container px-5 md:px-14 lg:px-28">
        <div className="flex items-center justify-between">
          <Logo className="w-[120px] md:w-[165px] h-auto text-white" />
          <CTA />
        </div>
      </div>
    </header>
  );
}
