const data = [
  {
    title: "Quality Selection",
    description:
      "We carefully choose our collection to ensure readers have access to bestselling titles, educational resources, and inspiring stories. Every book is selected with quality and reader value in mind.",
  },
  {
    title: "Exceptional Service",
    description:
      "Customer satisfaction is at the heart of everything we do. From easy browsing to secure ordering and responsive support, we are committed to providing an excellent shopping experience.",
  },
  {
    title: "Easy Access",
    description:
      "Our platform is designed to help readers find the books they need quickly and effortlessly. Browse categories, search for titles, and enjoy a smooth shopping experience from anywhere.",
  },
];
export default function OurMation() {
  return (
    <section className="flex flex-col gap-7 items-center my-10 md:gap-14 md:my-20">
      <h2 className="text-[#222222] lg:text-3xl text-[25px] font-bold">
        Our Mation
      </h2>

      <div className="container flex flex-col gap-6 justify-center m-auto md:flex-row">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[90%] shadow-sm m-auto card bg-base-100 card-sm md:w-1/4"
          >
            <div className="card-body">
              <h2 className="card-title text-[#222222] md:text-xl text-[18px] font-bold">
                {item.title}
              </h2>
              <p className="text-[#22222280] md:text-[16px] text-[14px] font-[Regular]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
