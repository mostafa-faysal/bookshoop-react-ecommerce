export default function HeroSection({
  heightClass,
  showSearch,
  showDescription,
}) {
  return (
    <section
      className={`relative w-full bg-cover bg-center bg-no-repeat bg-[url('/heroSection/h-section.png')] ${heightClass}`}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="flex relative z-10 flex-col items-center px-4 pt-8 w-full h-full md:justify-center md:gap-6 md:py-8">
        <div className="flex flex-col flex-1 justify-center items-center md:flex-none">
          {showDescription && (
            <div className="flex flex-col gap-5 justify-center items-center">
              <h2 className="md:text-4xl text-[24px] font-bold text-white">
                Welcome to Bookshop
              </h2>
              <p className="md:text-[24px] text-[16px] text-white text-center font-normal md:w-[60%] w-full font-['Regular']">
                Bookshop is dedicated to connecting readers with books that
                inspire, educate, and entertain. Our carefully curated
                collection includes bestselling novels, academic resources,
                self-development books, and timeless classics. We believe that
                every book has the power to create new ideas, expand
                perspectives, and make learning an enjoyable journey for
                everyone.
              </p>
            </div>
          )}
        </div>
        {showSearch && (
          <div className="mb-[22px] flex w-full max-w-xl items-stretch overflow-hidden rounded-full border-2 border-[#D9176C]  md:w-1/3 md:min-w-[400px]">
            <input
              type="search"
              placeholder="Search for books..."
              className="flex-1 px-5 py-3 w-full text-base text-gray-800 bg-white border-0 outline-none placeholder:text-gray-400 focus:border-0 focus:outline-none focus:ring-0"
            />
            <button
              type="button"
              className="flex shrink-0 items-center justify-center border-0 bg-[#D9176C] px-5 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
