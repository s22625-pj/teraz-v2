const Problem = () => {
    return (
        <section className="flex flex-row items-center w-full justify-center mq450:h-auto">
        <div id="problem" className="flex flex-col max-w-[1280px] w-full justify-between px-[24px] gap-[64px] mq450:px-4  mq450:gap-[32px] h-full py-[80px] mq450:py-[32px]">
        <div id="top" className="flex flex-row mq450:flex-col gap-[64px] mq450:gap-[24px] justify-center items-end">
            <div id="left" className="flex flex-col w-full gap-[16px]">
                <div id="title" className='font-satoshi-bold font-[600] text-[18px] leading-[130%] text-[#4040F2] mq450:text-[14px]'>PROBLEM</div>
                <div id="subtitle" className='font-satoshi-bold font-[600] text-[40px] leading-[130%] text-[#4040F2] mq450:text-[24px]'>Twoje konto w banku <br />to nie Twoja twierdza</div>
            </div>
            <div id="right" className="w-full">
            <div id='text' className='font-satoshi-medium text-right mq450:text-left font-[400] text-[18px] leading-[150%] text-[#4040F2]'>Bank, skarbówka – wszyscy mają do niego klucze. A Ty?</div>
            </div>
        </div>
        <div id="table" className="flex w-full mq450:flex-col mq450:hidden">
            <div id="column" className="flex flex-col w-full">
            <div id="line" className="flex font-satoshi-bold font-[600] text-[16px] leading-[130%] text-[#4040F2] uppercase h-[80px] px-[16px] items-center" style={{ borderBottom: '1px solid #DCDCDC' }}>Aspekt</div>
            <div id="line" className="flex font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] h-[80px] px-[16px] items-center" style={{ borderBottom: '1px solid #DCDCDC' }}>Blokady środków</div>
            <div id="line" className="flex font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] h-[80px] px-[16px] items-center" style={{ borderBottom: '1px solid #DCDCDC' }}>Dostępność</div>
            <div id="line" className="flex font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] h-[80px] px-[16px] items-center" style={{ borderBottom: '1px solid #DCDCDC' }}>Anonimowość</div>
            <div id="line" className="flex font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] h-[80px] px-[16px] items-center" style={{ borderBottom: '1px solid #DCDCDC' }}>Przyjmowanie płatności</div>
            <div id="line" className="flex font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] h-[80px] px-[16px] items-center">Karta płatnicza</div>
            </div>
            <div id="column" className="flex flex-col w-full bg-[#DCFF48]" style={{borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px' }}>
            <div id="line" className="flex font-satoshi-bold font-[600] text-[16px] leading-[130%] text-[#4040F2] uppercase h-[80px] px-[16px] justify-center items-center" style={{ borderBottom: '1px solid #FFFFFF' }}>Tradycyjny bank / Neobank</div>
            <div id="line" className="flex font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] h-[80px] px-[16px] items-center gap-[12px]" style={{ borderBottom: '1px solid #FFFFFF' }}><img src="/x-icon.svg" />Na żądanie urzędu</div>
            <div id="line" className="flex font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] h-[80px] px-[16px] items-center gap-[12px]" style={{ borderBottom: '1px solid #FFFFFF' }}><img src="/x-icon.svg" />Zależna od banku / awari</div>
            <div id="line" className="flex font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] h-[80px] px-[16px] items-center gap-[12px]" style={{ borderBottom: '1px solid #FFFFFF' }}><img src="/x-icon.svg" />Brak – pełne weryfikacja, udostępnianie danych </div>
            <div id="line" className="flex font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] h-[80px] px-[16px] items-center gap-[12px]" style={{ borderBottom: '1px solid #FFFFFF' }}><img src="/x-icon.svg" />Z biurokracją i prowizjami</div>
            <div id="line" className="flex font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] h-[80px] px-[16px] items-center gap-[12px]"><img src="/check-icon.svg" />Tak</div>
            </div>
            <div id="column" className="flex flex-col w-full bg-[#4040F2]" style={{borderTopRightRadius: '16px', borderBottomRightRadius: '16px' }}>
            <div id="line" className="flex font-satoshi-bold font-[600] text-[16px] leading-[130%] text-[#4040F2] uppercase h-[80px] px-[16px] justify-center items-center" style={{ borderBottom: '1px solid #FFFFFF' }}><img src="/teraz-table-logo.svg" /></div>
            <div id="line" className="flex font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#FFFFFF] h-[80px] px-[16px] items-center gap-[12px]" style={{ borderBottom: '1px solid #FFFFFF' }}><img src="/check-white-icon.svg"/>Tylko Ty masz dostęp</div>
            <div id="line" className="flex font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#FFFFFF] h-[80px] px-[16px] items-center gap-[12px]" style={{ borderBottom: '1px solid #FFFFFF' }}><img src="/check-white-icon.svg" />Zawsze, bez pośredników</div>
            <div id="line" className="flex font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#FFFFFF] h-[80px] px-[16px] items-center gap-[12px]" style={{ borderBottom: '1px solid #FFFFFF' }}><img src="/check-white-icon.svg" />Wysoka – Ty decydujesz, co ujawniasz</div>
            <div id="line" className="flex font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#FFFFFF] h-[80px] px-[16px] items-center gap-[12px]" style={{ borderBottom: '1px solid #FFFFFF' }}><img src="/check-white-icon.svg" />Link / QR – bez kombinacji</div>
            <div id="line" className="flex font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#FFFFFF] h-[80px] px-[16px] items-center gap-[12px]"><img src="/check-white-icon.svg" />Tak</div>
            </div>
        </div>
               {/* Mobile Table */}
               <div id="table-mobile" className="hidden mq450:flex flex-col gap-[24px]">
          {[
            {
              title: "Blokady środków",
              bank: "Na żądanie urzędu",
              teraz: "Tylko Ty masz dostęp",
            },
            {
              title: "Dostępność",
              bank: "Zależna od banku / awarii",
              teraz: "Zawsze, bez pośredników",
            },
            {
              title: "Anonimowość",
              bank: "Brak — pełne weryfikacja, udostępnianie danych",
              teraz: "Wysoka — Ty decydujesz, co ujawniasz",
            },
            {
              title: "Przyjmowanie płatności",
              bank: "Z biurokracją i prowizjami",
              teraz: "Link / QR — bez kombinacji",
            },
            {
              title: "Karta płatnicza",
              bank: "Tak",
              teraz: "Tak",
            }
          ].map((item, index) => (
            <div key={index} className="flex flex-col rounded-[12px] border border-[#DCDCDC]">
              <div className="flex h-[72px] text-[16px] gap-2 items-center font-satoshi-medium font-[500]  text-[#4040F2] px-3" style={{borderTopLeftRadius: '16px', borderTopRightRadius: '16px',borderTop: '1px solid #DCDCDC',borderLeft: '1px solid #DCDCDC',borderRight: '1px solid #DCDCDC',borderBottom: '1px solid #DCDCDC' }}>
                {item.title}
              </div>
              <div className="flex h-[72px] items-center text-[16px] gap-2 font-satoshi-medium font-[400] text-[#4040F2] bg-[#DCFF48] px-3">
                <span className="font-satoshi-medium font-[500]">Tradycyjny bank:</span> {item.bank}
              </div>
              <div className="flex h-[72px] items-center gap-2 text-[16px] font-satoshi-medium font-[400] text-white bg-[#4040F2] px-3" style={{borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}>
                <span className="font-satoshi-medium font-[500]">Teraz.cash:</span> {item.teraz}
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    );
  };
  
  export default Problem;
  