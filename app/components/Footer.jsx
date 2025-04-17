import Logo from "./Logo";

export default function Footer() {
  return (
    <section className="bg-delftBlue text-coolGray py-[40px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo className="w-[120px] h-auto" />
          <p className="font-semibold text-[14px]">
            Copyright 2025 CellFi. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
