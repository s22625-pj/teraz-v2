const Plans = () => {
    return (
        <section className="flex flex-row items-center w-full justify-center mq450:h-auto">
        <div id="plans" className="flex flex-col max-w-[1280px] w-full justify-between px-[24px] gap-[64px] mq450:px-4 h-full py-[80px] mq450:py-[32px] mq450:gap-[32px]">
        <div id="top" className="flex flex-row gap-[64px] justify-center items-end">
            <div id="left" className="flex flex-col w-full gap-[16px] items-center justify-center">
                <div id="title" className='font-satoshi-bold font-[600] text-[18px] leading-[130%] text-[#4040F2] mq450:text-[14px]'>PLANY</div>
                <div id="subtitle" className='font-satoshi-bold font-[600] text-[40px] leading-[130%] text-[#4040F2] mq450:text-[24px]'>Wybierz Plan Idealny dla Ciebie</div>
            </div>
        </div>
        <div id="table" className="flex w-full gap-[24px] mq450:flex-col">

            <div id="card" className="flex flex-col items-center w-full">
            <div id="card-title" className="flex z-[100] font-satoshi-bold font-[500] text-[14px] uppercase leading-[130%] text-[#4040F2] px-[32px] h-[38px] bg-[#FFFFFF] rounded-full items-center justify-center -mb-[19px]" style={{ boxShadow: 'inset 0 0 0 1px #E2E3EB'}}>DARMOWA karta</div>
            <div id="column" className="flex flex-col w-full">
            <div id="top" className="flex px-[80px] pt-[40px] pb-[24px] bg-[#F9FAFB]" style={{ boxShadow: 'inset 0 0 0 1px #E2E3EB',borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
                <img src="/teraz-card.webp" className="h-full w-full" />
            </div>
            <div className="flex p-[24px] flex-col gap-[12px]" style={{borderLeft: '1px solid #E2E3EB',borderRight: '1px solid #E2E3EB'}}>
            <div className="flex flex-col gap-[8px]">
             <div className="font-satoshi-bold font-[500] text-[20px] leading-[130%] text-[#4040F2]">Karta Bronze</div>
             <div className="font-satoshi-bold font-[550] text-[24px] leading-[130%] text-[#4040F2]">Darmowa karta</div>
             </div>
             <div className="font-satoshi-medium font-[400] text-[18px] leading-[100%] text-[#4040F2]">Nielimitowana ilość</div>
            </div>
            <div className="flex p-[24px] mq450:p- flex-col gap-[12px]" style={{borderLeft: '1px solid #E2E3EB',borderRight: '1px solid #E2E3EB',borderBottom: '1px solid #E2E3EB',borderTop: '1px solid #E2E3EB',borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px'}}>
             <div className="flex flex-col font-satoshi-medium font-[400] text-[18px] leading-[130%] tracking-tight text-[#4040F2] gap-[20px]">
            <div className="flex flex-row gap-[12px]"><img src="/check-icon.svg" className="w-[24px]"/>Wypłaty gotówki: 4%</div>
            <div className="flex flex-row gap-[12px]"><img src="/check-icon.svg" className="w-[24px]"/>Przelewy / BLIK: 3.25%</div>
            <div className="flex flex-row gap-[12px]"><img src="/check-icon.svg" className="w-[24px]"/>Płatności zagraniczne i Apple Pay: 4.25%</div>
            <div className="flex flex-row gap-[12px]"><img src="/check-icon.svg" className="w-[24px]"/>Prosta weryfikacja (poza UE)</div>
                </div>
            </div>
            </div>
            </div>

            <div id="card" className="flex flex-col items-center w-full">
            <div id="card-title" className="flex z-[100] font-satoshi-bold font-[500] text-[14px] uppercase leading-[130%] text-[#4040F2] px-[32px] h-[38px] bg-[#DCFF48] rounded-full items-center justify-center -mb-[19px]">najcześciej wybierana</div>
            <div id="column" className="flex flex-col w-full">
            <div id="top" className="flex px-[80px] pt-[40px] pb-[24px] bg-[#F9FAFB]" style={{ boxShadow: 'inset 0 0 0 1px #E2E3EB',borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
                <img src="/silver-card.webp" className="h-full w-full" />
            </div>
            <div className="flex p-[24px] flex-col gap-[12px]" style={{borderLeft: '1px solid #E2E3EB',borderRight: '1px solid #E2E3EB'}}>
            <div className="flex flex-col gap-[8px]">
             <div className="font-satoshi-bold font-[500] text-[20px] leading-[130%] text-[#4040F2]">Karta Premium</div>
             <div className="flex flex-row items-center gap-[4px]"><div className="font-satoshi-bold font-[550] text-[24px] leading-[130%] text-[#4040F2]">99 USDC</div><div className="font-satoshi-medium font-[400] text-[18px] leading-[130%] text-[#4040F2]">/ miesięcznie</div></div>
             </div>
             <div className="font-satoshi-medium font-[400] text-[18px] leading-[100%] text-[#4040F2]">Limitowana pula</div>
            </div>
            <div className="flex p-[24px] flex-col gap-[12px]" style={{borderLeft: '1px solid #E2E3EB',borderRight: '1px solid #E2E3EB',borderBottom: '1px solid #E2E3EB',borderTop: '1px solid #E2E3EB',borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px'}}>
             <div className="flex flex-col font-satoshi-medium font-[400] text-[18px] leading-[130%] tracking-tight text-[#4040F2] gap-[20px]">
            <div className="flex flex-row gap-[12px]"><img src="/check-icon.svg" className="w-[24px]"/>Wypłaty gotówki: 2.75%</div>
            <div className="flex flex-row gap-[12px]"><img src="/check-icon.svg" className="w-[24px]"/>Przelewy / BLIK: 2.25%</div>
            <div className="flex flex-row gap-[12px]"><img src="/check-icon.svg" className="w-[24px]"/>Płatności zagraniczne i Apple Pay: 3.25%</div>
            <div className="flex flex-row gap-[12px]"><img src="/check-icon.svg" className="w-[24px]"/>Prywatność i minimum formalności</div>
                </div>
            </div>
            </div>
            </div>

            <div id="card" className="flex flex-col items-center w-full">
            <div id="card-title" className="flex z-[100] font-satoshi-bold font-[500] text-[14px] uppercase leading-[130%] text-white px-[32px] h-[38px] bg-[#4040F2] rounded-full items-center justify-center -mb-[19px]" >pełna prywatność</div>
            <div id="column" className="flex flex-col w-full">
            <div id="top" className="flex px-[80px] pt-[40px] pb-[24px] bg-[#F9FAFB]" style={{ boxShadow: 'inset 0 0 0 1px #E2E3EB',borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
                <img src="/gold-card.webp" className="h-full w-full" />
            </div>
            <div className="flex p-[24px] flex-col gap-[12px]" style={{borderLeft: '1px solid #E2E3EB',borderRight: '1px solid #E2E3EB'}}>
            <div className="flex flex-col gap-[8px]">
             <div className="font-satoshi-bold font-[500] text-[20px] leading-[130%] text-[#4040F2]">Karta VIP (Gold)</div>
             <div className="flex flex-row items-center gap-[4px]"><div className="font-satoshi-bold font-[550] text-[24px] leading-[130%] text-[#4040F2]">500 USDC</div><div className="font-satoshi-medium font-[400] text-[18px] leading-[130%] text-[#4040F2]">/ miesięcznie</div></div>
             </div>
             <div className="font-satoshi-medium font-[400] text-[18px] leading-[100%] text-[#4040F2]">Limitowana pula</div>
            </div>
            <div className="flex p-[24px] flex-col gap-[12px]" style={{borderLeft: '1px solid #E2E3EB',borderRight: '1px solid #E2E3EB',borderBottom: '1px solid #E2E3EB',borderTop: '1px solid #E2E3EB',borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px'}}>
             <div className="flex flex-col font-satoshi-medium font-[400] text-[18px] leading-[130%] tracking-tight text-[#4040F2] gap-[20px]">
            <div className="flex flex-row gap-[12px]"><img src="/check-icon.svg" className="w-[24px]"/>Wypłaty gotówki: 2%</div>
            <div className="flex flex-row gap-[12px]"><img src="/check-icon.svg" className="w-[24px]"/>Przelewy / BLIK: 1.75%</div>
            <div className="flex flex-row gap-[12px]"><img src="/check-icon.svg" className="w-[24px]"/>Płatności zagraniczne i Apple Pay: 2.75%</div>
            <div className="flex flex-row gap-[12px]"><img src="/check-icon.svg" className="w-[24px]"/>Pełna prywatność transakcji</div>
                </div>
            </div>
            </div>
            </div>

        </div>
        </div>
      </section>
    );
  };
  
  export default Plans;
  