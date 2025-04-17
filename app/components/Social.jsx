export default function Social() {
  return (
    <section className="relative bg-cornflowerBlue overflow-hidden">
      <div className="container relative">
        <div className="relative py-[120px] pr-[120px] before:content[''] before:absolute before:top-0 before:bottom-0 before:left-full before:w-[100vw] before:h-[100vh] before:bg-white after:content-[''] after:absolute after:bottom-0 after:left-full after:w-full after:h-[120px] after:bg-delftBlue">
          <h3 className="font-semibold text-[70px] text-white mb-[60px] leading-none">
            Follow Us
          </h3>
          <div className="flex gap-[40px]">
            <img
              src="https://placehold.co/200x200/EEE/31343C"
              className="w-[120px] h-auto"
              alt="X"
            />
            <img
              src="https://placehold.co/200x200/EEE/31343C"
              className="w-[120px] h-auto"
              alt="Github"
            />
            <div className="flex-grow bg-turquoise"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
