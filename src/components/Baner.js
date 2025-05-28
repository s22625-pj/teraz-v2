const Baner = () => {
    return (
        <section className="flex flex-row items-center w-full justify-center mq450:h-auto">
        <div id="container" className="flex flex-row max-w-[1280px] w-full justify-between px-[24px] gap-[40px] mq450:px-4 h-full py-[80px] mq450:py-[32px]">
        <div id='content' className='flex flex-row mq450:flex-col w-full py-[32px] px-[128px] mq450:py-[24px] mq450:px-[24px] gap-[24px] bg-baner rounded-[24px]'>
        <div className='flex flex-col w-2/5 mq450:w-full gap-[32px] justify-center' id='left'>
            <div className="flex flex-col gap-[16px]">
        <div id='title' className='font-satoshi-bold font-[500] text-[44px] leading-[120%] mq450:text-[24px] text-white'>Przyszłość<br />branży Fintech<br /> jest tu i Teraz.</div>
        <div id='title' className='font-satoshi-medium font-[400] text-[24px] leading-[150%] text-white mq450:text-[18px]'>Twoje finanse w jednej aplikacji.</div>
        </div>
       <div id='badges' className='flex flex-row gap-[16px]'>
        <img src='/appstore.svg' className='h-[56px] mq450:h-[44px]'/>
        <img src='/googleplay.svg' className='h-[56px] mq450:h-[44px]'/>
       </div>
        </div>
        <div className='flex w-3/5 mq450:w-full justify-center items-center' id='right'>
          <img
            src='/baner-img.webp'
            className='w-full'
          />
        </div>
        </div>
        </div>
      </section>
    );
  };
  
  export default Baner;
  