export default function InputQuestions() {
  return (
    <form>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-5 md:flex-row">
          <label className="flex gap-2 items-center px-4 w-full h-12 text-white bg-transparent rounded-lg border transition-all border-white/30 focus-within:border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              autoComplete="off"
              className="bg-transparent outline-none grow placeholder-white/50 focus:bg-transparent"
              placeholder="Name"
            />
          </label>
          <label className="flex gap-2 items-center px-4 w-full h-12 text-white bg-transparent rounded-lg border transition-all border-white/30 focus-within:border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              autoComplete="off"
              className="bg-transparent outline-none grow placeholder-white/50 focus:bg-transparent"
              placeholder="Email"
            />
          </label>
        </div>
        <label className="flex gap-2 items-start p-3 w-full h-48 text-white bg-transparent rounded-lg border transition-all border-white/30 focus-within:border-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="mt-1 w-4 h-4 opacity-70"
          >
            <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
            <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
          </svg>
          <textarea
            autoComplete="off"
            className="w-full h-full bg-transparent outline-none resize-none focus:bg-transparent placeholder-white/50"
            placeholder="Your Message"
          ></textarea>
        </label>
        <button
          type="submit"
          className="block md:px-16 px-5 py-3 w-fit cursor-pointer font-semibold m-auto bg-[#D9176C] rounded-lg text-white"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
