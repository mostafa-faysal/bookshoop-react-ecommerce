import HeroSection from "../../heroSection/HeroSection";
import Inputs from "./inputs/Inputs";

export default function Register() {
  return (
    <>
      <HeroSection heightClass="h-[25vh]" />
      <h2
        className="flex justify-center items-center py-4 text-[25px] lg:text-[30px] tex font-SemiBold

 text-[#D9176C] text-center"
      >
        Create an Account
      </h2>

      <Inputs />
    </>
  );
}
