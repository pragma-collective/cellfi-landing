import Logo from "./Logo";
import CTA from "./CTA";

export default function Header() {
  return (
    <header className="py-[40px] bg-[#21167a] text-white">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo className="w-[165px] h-auto text-white" />
          <CTA />
        </div>
      </div>
    </header>
  );
}
