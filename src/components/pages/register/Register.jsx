import HeroSection from "../../heroSection/HeroSection";
import Inputs from "./inputs/Inputs";

export default function Register() {
  return (
    <>
      <HeroSection heightClass="h-[25vh]" />
      <h2 className="justify-center items-center mt-4 text-2xl font-bold text-center">
        Create an Account
      </h2>
      <Inputs />
    </>
  );
}
