import Request from '../components/Request'
import Withdraw from '../components/Withdraw'
import Card from './Card';
import Wallet from './Wallet';

const Solution = () => {
    return (
        <section className="flex flex-row items-center w-full justify-center mq450:h-auto">
        <div id="solution" className="flex flex-col max-w-[1280px] w-full justify-between px-[24px] gap-[64px] mq450:gap-[32px] mq450:px-4 h-full py-[80px] mq450:py-[32px]">
        <div id="top" className="flex flex-row mq450:flex-col gap-[64px] mq450:gap-[24px] justify-center items-center">
            <div id="left" className="flex flex-col w-full gap-[16px]">
                <div id="title" className='font-satoshi-bold font-[600] text-[18px] leading-[130%] text-[#4040F2] mq450:text-[14px]'>ROZWIĄZANIE</div>
                <div id="subtitle" className='font-satoshi-bold font-[600] text-[40px] leading-[130%] text-[#4040F2] mq450:text-[24px]'>Teraz.cash to Twój cyfrowy sejf</div>
            </div>
            <div id="right" className="w-full">
            <div id='text' className='font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2]'>Self-custodial wallet, który pozwala Ci zarządzać środkami w sposób dyskretny i bezpieczny. <b>Bez potrzeby znajomości kryptowalut. Bez pośredników. Bez ograniczeń.</b></div>
            </div>
        </div>
        <Request />
        <Withdraw />
        <Wallet />
        <Card />
        </div>
      </section>
    );
  };
  
  export default Solution;
  