import { useState } from "react";

const faqData = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet velit dui. Donec iaculis ex in efficitur blandit. Pellentesque eget consequat ante, nec ultricies orci.`,
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet velit dui. Donec iaculis ex in efficitur blandit. Pellentesque eget consequat ante, nec ultricies orci.`,
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet velit dui. Donec iaculis ex in efficitur blandit. Pellentesque eget consequat ante, nec ultricies orci.`,
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet velit dui. Donec iaculis ex in efficitur blandit. Pellentesque eget consequat ante, nec ultricies orci.`,
  },
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className="flex justify-between cursor-pointer font-satoshi-medium font-[500] gap-[24px] items-center w-full py-[48px] mq450:py-[32px] text-left bg-transparent font-palanquin text-[24px] no-underline visited:text-[#4040F2] text-[#4040F2] mq450:text-[16px] mq450:leading-[150%] px-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <img
          src="/faq-item.svg"
          alt="Toggle"
          className={`w-[40px] h-[40px] mq450:w-[32px] mq450:h-[32px] transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
        />
      </button>
      <div
        className={`faq-answer-wrapper transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p
          className="faq-answer font-satoshi-medium font-[400] text-[#4040F2] text-[20px] mq450:text-[16px] leading-[150%] pb-[40px] m-0 no-underline visited:text-black"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </div>
  );
}

export default function FAQList() {
  return (
    <div className="flex flex-col w-full">
      {faqData.map((item, index) => (
        <div key={index}>
          <FAQItem question={item.question} answer={item.answer} />
          <div id="line" className="w-full h-[1px] bg-gradient-to-r from-[#4040F2] to-[#DCFF48]"></div>
        </div>
      ))}
    </div>
  );
}
