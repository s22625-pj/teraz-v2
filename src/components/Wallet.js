import React, { useRef, useEffect } from "react";

const Wallet = () => {
  const imgRefs = useRef([]);

  useEffect(() => {
    const items = imgRefs.current;

    const handleMouseEnter = (hoveredIndex) => {
      items.forEach((img, index) => {
        img.classList.remove("w-1/3", "w-[43.333333%]", "w-[28.333333%]");
        if (index === hoveredIndex) {
          img.classList.add("w-[43.333333%]");
        } else {
          img.classList.add("w-[28.333333%]");
        }
      });
    };

    const handleMouseLeave = () => {
      items.forEach((img) => {
        img.classList.remove("w-[43.333333%]", "w-[28.333333%]");
        img.classList.add("w-1/3");
      });
    };

    const enterHandlers = items.map((_, index) => () => handleMouseEnter(index));

    items.forEach((img, index) => {
      img.addEventListener("mouseenter", enterHandlers[index]);
      img.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      items.forEach((img, index) => {
        img.removeEventListener("mouseenter", enterHandlers[index]);
        img.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div id="wallet" className="flex flex-row mq450:flex-col w-full gap-[64px] mq450:gap-[48px] py-[32px] items-center justify-center h-[450px] mq450:h-auto mq450:py-[16px]">
      <div id="img" className="flex w-1/2 mq450:w-full overflow-hidden items-center">
        {['/wallet-1.webp', '/wallet-2.webp', '/wallet-3.webp'].map((src, index) => (
          <img
            key={index}
            ref={(el) => (imgRefs.current[index] = el)}
            src={src}
            alt="wallet"
            className="object-cover h-full transition-all duration-300 w-1/3"
          />
        ))}
      </div>
      <div id="text" className="flex flex-col mq450:w-full w-1/2 gap-[24px]">
        <div className="font-satoshi-bold font-[600] text-[28px] leading-[130%] text-[#4040F2]">
          Przechowuj środki bezpiecznie
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-[#4040F2] to-[#DCFF48]" />
        <div className="font-satoshi-bold font-[600] text-[20px] leading-[130%] text-[#4040F2]">
          Nie potrzebujesz banku, żeby przechowywać pieniądze
        </div>
        <div className="font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2]">
          Środki przechowywane w cyfrowym dolarze na Twoim prywatnym portfelu są w 100% pod Twoją kontrolą. Bez ryzyka zajęcia konta. Bez przymusowej weryfikacji. Bez śledzenia każdego Twojego ruchu.
        </div>
        <div className="flex flex-row gap-[16px] font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] items-center">
          <img src="/t-icon.svg" alt="" />Intuicyjna obsługa
        </div>
        <div className="flex flex-row gap-[16px] font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] items-center">
          <img src="/t-icon.svg" alt="" />Działa na całym świecie
        </div>
        <div className="flex flex-row gap-[16px] font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] items-center">
          <img src="/t-icon.svg" alt="" />Zbudowane z myślą o prywatności
        </div>
      </div>
    </div>
  );
};

export default Wallet;
