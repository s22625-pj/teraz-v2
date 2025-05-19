import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (hash) => {
    // Przejście do strony głównej + hash
    navigate(`/#${hash}`);

    // Ręczny scroll (upewnij się, że sekcja istnieje)
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    }, 100);
  };

  return (
    <section className="flex flex-row items-center w-full justify-center mq450:h-auto">
    <div id="container" className="flex flex-col max-w-[1280px] w-full justify-between px-[24px] gap-[40px] mq450:px-4 h-full py-[80px] mq450:pb-[32px] mq450:pt-[56px]">
    <div id='top' className='flex w-full flex-row mq450:flex-col justify-between mq450:gap-[32px]'>
    <div id='left' className='flex flex-col gap-[24px] w-full items-start'>
    <img src='footer-logo.svg' className='h-[32px]' />
    <div id='title' className='font-satoshi-medium font-[400] text-[24px] leading-[150%] text-[#4040F2]'>Twoje finanse, Twoje zasady!</div>
    <div id='icons' className='flex flex-row gap-[8px]'>
        <img src='x-icon-2.svg' className='w-[32px] h-[32px]' />
        <img src='li-icon.svg' className='w-[32px] h-[32px]' />
    </div>
    <div id='column' className='flex flex-col gap-[16px] w-full'>
    <div id='subtitle' className='font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2]'>Blockbridge sp. z o. o.</div>
    <div id='subtitle' className='font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2]'>Święty Marcin 29 / 8, 61-806 Poznań, Polska</div>
    </div>
    </div>
    <div className='hidden mq450:flex w-full h-[1px] bg-[#4040F2]'></div>

    <div id='right' className='flex flex-row mq450:flex-col gap-[64px] mq450:gap-[32px]'>
    <div id='column' className='flex flex-col gap-[20px] w-[196px]'>
    <div id='title' className='font-satoshi-medium font-[500] text-[24px] leading-[150%] text-[#4040F2]'>Nawigacja</div>
    <div id='subtitle' className='font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2]'>Problem</div>
    <div id='subtitle' className='font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2]'>Rozwiązanie</div>
    <div id='subtitle' className='font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2]'>Dla kogo</div>
    <div id='subtitle' className='font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2]'>Plany</div>
    <div id='subtitle' className='font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2]'>FAQ</div>
    </div>
    <div id='column' className='flex flex-col gap-[20px] w-[256px]'>
    <div id='title' className='font-satoshi-medium font-[500] text-[24px] leading-[150%] text-[#4040F2]'>Regulaminy</div>
    <a href='/pp' id='subtitle' className='font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] cursor-pointer'>Polityka prywatności</a>
    <a href='/regulamin' id='subtitle' className='font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] cursor-pointer'>Regulamin świadczenia usług</a>
    <a href='/aml' id='subtitle' className='font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2] cursor-pointer'>Informacja o polityce AML</a>
    </div>
    </div>
    </div>
    <div className='flex flex-col gap-[32px]'>
    <div className='flex w-full h-[1px] bg-[#4040F2]'></div>
    <div id='subtitle' className='font-satoshi-medium font-[400] text-[18px] leading-[150%] text-[#4040F2]'>© 2025 teraz.cash. All rights reserved.</div>
    </div>
    </div>
  </section>
  );
};

export default Footer;
