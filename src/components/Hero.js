import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const setHeight = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
      setIsMobile(window.innerWidth <= 450);
    };

    setHeight();
    window.addEventListener('resize', setHeight);
    return () => window.removeEventListener('resize', setHeight);
  }, []);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => {
      document.body.style.overflow = prev ? 'auto' : 'hidden';
      return !prev;
    });
  };

  return (
    <section
      className="flex flex-row items-center w-full justify-center mq450:h-auto"
      style={{ height: 'auto' }}
      id="home"
    >
      <div id="container" className="flex flex-col max-w-[1280px] w-full justify-between px-[24px] mq450:px-4 h-full">
        <div className='flex w-full h-full pt-[96px] pb-[32px] mq450:pb-[16px] mq450:pt-[72px]'>
        <div id='content' className='flex flex-row mq450:flex-col w-full pt-[64px] mq450:pt-[16px] gap-[24px]'>
        <div className='flex flex-col w-full gap-[40px] mq450:gap-[32px] justify-center' id='left'>
        <div id='title' className='font-satoshi-bold font-[600] text-[64px] leading-[110%] text-[#4040F2] mq450:text-[40px]'>Teraz.cash - <br />Twoje finanse,<br /> Twoje zasady!</div>
        <div id='title' className='font-satoshi-medium font-[400] text-[20px] leading-[150%] text-[#4040F2] mq450:text-[18px]'>Zadbaj o swoje pieniądze tak, jak chcesz – bez pośredników, bez blokad, bez stresu. Teraz.cash to aplikacja, która daje Ci pełną kontrolę – prywatnie, prosto i bezpiecznie</div>
       <div id='badges' className='flex flex-row gap-[16px]'>
        <img src='/appstore.svg' className='h-[64px] mq450:h-[56px]'/>
        <img src='/googleplay.svg' className='h-[64px] mq450:h-[56px]'/>
       </div>
        </div>
        <div className='flex w-full justify-center items-center' id='right'>
          <img
            src='/hero-img.webp'
            className='w-full'
          />
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
