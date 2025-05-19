// src/components/Request.js
import React, { useRef, useEffect } from "react";

const Request = () => {
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
    <div id="request" className="flex flex-row mq450:flex-col w-full gap-[64px] mq450:gap-[48px] py-[32px] mq450:py-[16px] items-center justify-center h-[450px] mq450:h-auto">
      <div id="img" className="flex w-1/2 mq450:w-full overflow-hidden items-center">
        {['/request-1.svg', '/request-2.svg', '/request-3.svg'].map((src, index) => (
          <img
            key={index}
            ref={(el) => (imgRefs.current[index] = el)}
            src={src}
            alt="request"
            className="object-cover h-full transition-all duration-300 w-1/3"
          />
        ))}
      </div>
      <div id="text" className="flex flex-col w-1/2 mq450:w-full gap-[24px]">
        <div className="font-satoshi-bold font-[600] text-[28px] leading-[130%] text-[#4040F2] mq450:text-[24px]">
          Przyjmuj kasę jak chcesz
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-[#4040F2] to-[#DCFF48]" />
        <div className="font-satoshi-bold font-[600] text-[20px] leading-[130%] text-[#4040F2] mq450:text-[18px]">
          Link do płatności, QR, karta – to działa.
        </div>
        <div className="font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2]">
          Sprzedajesz coś? Przyjmujesz płatność? Chcesz, żeby klient zapłacił szybko i wygodnie? Wygeneruj link i kod QR. Gotowe. Pieniądze trafiają prosto do Ciebie, a nie do Twojego banku.
        </div>
        <div className="flex flex-row gap-[16px] font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] items-center">
          <img src="/t-icon.svg" alt="" />Obsługujemy różne metody płatności
        </div>
        <div className="flex flex-row gap-[16px] font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] items-center">
          <img src="/t-icon.svg" alt="" />Bez opóźnień, bez księgowania, bez blokad
        </div>
      </div>
    </div>
  );
};

export default Request;