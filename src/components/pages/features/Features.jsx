export default function Features() {
  const featuresData = [
    {
      icon: "/features/car.png",
      title: "Fast & Reliable Shipping",
      description:
        "Get your favorite books delivered quickly and safely. We work with trusted shipping partners to ensure your orders arrive on time and in excellent condition.",
    },
    {
      icon: "/features/credit-card-buyer 1.png",
      title: "Secure Payment",
      description:
        "Shop with confidence using our secure payment system. All transactions are protected to keep your personal and payment information safe.",
    },
    {
      icon: "/features/restock 1.png",
      title: "Easy Returns",
      description:
        "Not satisfied with your purchase? Our simple return process makes it easy to request a return and receive assistance whenever needed.",
    },
    {
      icon: "/features/user-headset 1.png",
      title: "24/7 Customer Support",
      description:
        "Our support team is available around the clock to answer your questions, assist with orders, and provide the help you need at any time.",
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-4 py-20 font-sans md:mx-15 features">
      {featuresData.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col col-span-12 items-center p-4 m-3 md:items-start md:m-0 md:col-span-6 lg:col-span-3 feature"
        >
          <div className="flex justify-start icon">
            <img src={feature.icon} alt={feature.title} />
          </div>
          <h3 className="my-2 text-lg font-bold title">{feature.title}</h3>
          <p className="text-[16px] font-normal text-center md:text-left text-[#22222280] ">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
