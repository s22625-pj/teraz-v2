import React, { useRef, useEffect } from "react";

const Card = () => {
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
    <div id="card" className="flex flex-row mq450:flex-col w-full gap-[64px] mq450:gap-[48px] py-[32px] mq450:py-[16px] items-center justify-center h-[450px] mq450:h-auto">
      <div id="text" className="flex flex-col w-1/2 mq450:w-full gap-[24px] mq450:order-2">
        <div className="font-satoshi-bold font-[600] text-[28px] leading-[130%] text-[#4040F2]">
          Korzystaj z kasy przez kartę
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-[#4040F2] to-[#DCFF48]" />
        <div className="font-satoshi-bold font-[600] text-[20px] leading-[130%] text-[#4040F2]">
          Płać jak zawsze – nawet jeśli „Twoje konto” to wallet
        </div>
        <div className="font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2]">
          Stwórz wirtualną kartę i wydawaj środki z portfela Teraz.cash gdziekolwiek chcesz – w sklepie, online, za granicą. Po prostu.
        </div>
        <div className="flex flex-row gap-[16px] font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] items-center">
          <img src="/t-icon.svg" alt="" />Darmowa karta wirtualna
        </div>
        <div className="flex flex-row gap-[16px] font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] items-center">
          <img src="/t-icon.svg" alt="" />Działa z Apple Pay / Google Pay
        </div>
        <div className="flex flex-row gap-[16px] font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] items-center">
          <img src="/t-icon.svg" alt="" />Wypłacaj środki z karty w wybranych bankomatach
        </div>
      </div>
      <div id="img" className="flex w-1/2 overflow-hidden mq450:w-full items-center mq450:order-1">
        {['/card-1.svg', '/card-2.svg', '/card-3.svg'].map((src, index) => (
          <img
            key={index}
            ref={(el) => (imgRefs.current[index] = el)}
            src={src}
            alt="card"
            className="object-cover h-full transition-all duration-300 w-1/3"
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
