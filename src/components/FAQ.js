import FAQList from "./FAQList";

const FAQ = () => {
    return (
        <section className="flex flex-row items-center w-full justify-center mq450:h-auto">
        <div id="faq" className="flex flex-col max-w-[1280px] w-full justify-between px-[24px] gap-[64px] mq450:px-4 h-full py-[80px] items-center mq450:py-[32px] mq450:gap-[32px]">
        <div id="top" className="flex flex-row gap-[64px] justify-center items-end">
            <div id="left" className="flex flex-col w-full gap-[16px] items-center justify-center">
                <div id="title" className='font-satoshi-bold font-[600] text-[18px] leading-[130%] text-[#4040F2] mq450:text-[14px]'>FAQ</div>
                <div id="subtitle" className='font-satoshi-bold font-[600] text-[40px] leading-[130%] text-[#4040F2] mq450:text-[24px]'>Najczęściej zadawane pytania</div>
            </div>
        </div> 
        <div className="w-[900px] mq450:w-full">
        <FAQList />
        </div>
        </div>
      </section>
    );
  };
  
  export default FAQ;
  