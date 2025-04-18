import Logo from "./Logo";

export default function Footer() {
  return (
    <section className="bg-delftBlue text-coolGray py-5 md:py-10">
      <div className="container px-5 md:px-14 lg:px-28">
        <div className="flex items-center justify-between">
          <Logo className="w-[80px] md:w-[120px] h-auto" />
          <p className="font-medium text-[12px] md:text-[14px]">
            Copyright 2025 CellFi. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
