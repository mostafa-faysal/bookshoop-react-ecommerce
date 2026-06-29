import HeroSection from "../../heroSection/HeroSection";
import Inputs from "./inputs/Inputs";

export default function Login() {
  return (
    <section className="m-0">
      <HeroSection heightClass="h-[25vh]" />
      <h2
        className="flex justify-center items-center py-4 text-[25px] lg:text-[30px] font-SemiBold

 text-[#D9176C] text-center"
      >
        Welcome Back!
      </h2>
      <Inputs />
    </section>
  );
}
