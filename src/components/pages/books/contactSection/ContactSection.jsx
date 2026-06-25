import ContactInfo from "../../about/contactInfo/ContactInfo";
import ContactIntro from "../../about/contactIntro/ContactIntro";
import InputQuestions from "./inputQuestions/InputQuestions";

export default function ContactSection() {
  return (
    <section className=" bg-[#3B2F4A] w-full ">
      <div className="bg-[url('/aboutBackGround/Background.png')] h-full w-full bg-cover bg-center flex md:flex-row flex-col p-10 md:p-44 ">
        <div className="container flex flex-col gap-10 mx-auto">
          <ContactIntro />
          <InputQuestions />
        </div>
        <ContactInfo />
      </div>
    </section>
  );
}
