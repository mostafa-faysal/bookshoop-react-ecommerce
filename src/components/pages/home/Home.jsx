import HeroSection from "../../heroSection/HeroSection";
import { useState, useEffect } from "react";
import BestSeller from "./bestSeller/BestSeller";
import FlashSale from "./flashSale/FlashSale";
import Recomended from "./recomended/Recomended";
import AlertToLogin from "../../ui/alertToLogin/AlertToLogin";
import useAuthStore from "../../../store/useAuthStore";
import Features from "../features/Features";

export default function Home() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    if (!token) {
      setIsAlertOpen(true);
    } else {
      setIsAlertOpen(false);
    }
  }, [token]);

  return (
    <>
      {isAlertOpen && <AlertToLogin onClose={() => setIsAlertOpen(false)} />}
      <div className="overflow-x-hidden">
        <HeroSection
          heightClass="h-[60vh]"
          showSearch={true}
          showDescription={false}
        />
        <Features />
        <BestSeller />
        <Recomended />
        <FlashSale />
      </div>
    </>
  );
}
