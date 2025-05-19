const B2B = () => {
    return (
        <section className="flex flex-row items-center w-full justify-center mq450:h-auto">
        <div id="container" className="flex flex-row mq450:flex-col max-w-[1280px] w-full justify-between px-[24px] gap-[64px] mq450:px-4 h-full py-[80px] mq450:py-[32px] mq450:gap-[32px]">
        <div id="top" className="flex flex-col gap-[24px] justify-center items-start w-3/5 mq450:w-full">
            <div id="left" className="flex flex-col w-full gap-[16px]">
                <div id="title" className='font-satoshi-bold font-[600] text-[18px] leading-[130%] text-[#4040F2] mq450:text-[14px]'>WSPÓŁPRACA B2B</div>
                <div id="subtitle" className='font-satoshi-bold font-[600] text-[40px] leading-[130%] text-[#4040F2] mq450:text-[24px]'>Masz firmę? Zintegruj Teraz.cash</div>
            </div>
            <div id="right" className="w-full">
            <div id='text' className='font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2]'>Zintegruj Teraz.cash z Twoim systemem, przyjmuj płatności na porfel i korzystaj z prywatnego rozliczania.</div>
            </div>
            <div onClick={() => window.open('https://calendly.com/hello-teraz/30min', '_blank')} className="flex font-satoshi-medium font-[400] px-[24px] items-center justify-center h-[48px] rounded-full text-[16px] text-[#4040F2] bg-[#DCFF48] font-satoshi tracking-[0.05em] no-underline cursor-pointer">
            Skontaktuj się
          </div>
        </div>
        <img src="/b2b.png" className="w-2/5 mq450:w-full" />
        </div>
      </section>
    );
  };
  
  export default B2B;
  