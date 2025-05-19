import React, { useState, useEffect, useRef } from 'react';
import BurgerIcon from './Burger';
import classNames from 'classnames';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const threshold = 80;

  useEffect(() => {
    document.body.style.overflow = isMenuVisible ? 'hidden' : 'auto';
  }, [isMenuVisible]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < threshold) {
        setIsVisible(true);
      } else {
        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }

      setIsScrolled(currentScrollY > 0);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuVisible(prev => !prev);
  };

  const handleLinkClick = () => {
    setTimeout(() => setIsMenuVisible(false), 150);
  };

  return (
    <header
      className={classNames(
        'fixed top-0 left-0 w-full z-[300] flex flex-row items-center justify-center transition-all duration-500 ease-in-out mq450:py-[12px]',
        {
          '-translate-y-full pointer-events-none': !isVisible,
          'translate-y-0': isVisible,
          'bg-transparent py-[24px] h-[48px]': !isScrolled,
          'bg-[#FFFFFF] py-[16px] h-[40px] z-[100]': isScrolled,
        }
      )}
    >
      <div className="flex flex-row max-w-[1280px] px-[24px] mq450:px-[16px] w-full justify-between items-center">
        {/* Logo */}
        <img
          onClick={() => { window.location.href = "#home"; }}
          src="/teraz-logo.svg"
          className="h-[28px] mq450:h-[24px] cursor-pointer"
          alt="Logo"
        />

        {/* Desktop nav */}
        <div id="nav-desktop" className="font-satoshi-medium font-[400] flex flex-row gap-[40px] items-center mq450:hidden text-[#4040F2] text-[18px]">
          <a href="#problem" className="no-underline visited:text-[unset] text-[#4040F2]">Problem</a>
          <a href="#solution" className="no-underline visited:text-[unset] text-[#4040F2]">Rozwiązanie</a>
          <a href="#forwho" className="no-underline visited:text-[unset] text-[#4040F2]">Dla kogo</a>
          <a href="#plans" className="no-underline visited:text-[unset] text-[#4040F2]">Plany</a>
          <a href="#faq" className="no-underline visited:text-[unset] text-[#4040F2]">FAQ</a>
        </div>
        <div onClick={() => window.open('https://apps.apple.com/kh/app/teraz-cash/id6736385925', '_blank')} className="flex mq450:hidden font-satoshi-medium font-[400] px-[24px] items-center justify-center h-[48px] rounded-full text-[16px] text-white bg-[#4040F2] font-satoshi tracking-[0.05em] no-underline cursor-pointer">
          Pobierz aplikację
        </div>

        {/* Burger menu */}
        <BurgerIcon toggleMenu={toggleMenu} isMenuVisible={isMenuVisible} className="z-[400]" />
      </div>

      {/* Mobile menu */}
      <div id="navbar-mobile"
        className={classNames(
          'fixed top-0 left-0 max-w-full w-full h-screen z-10 flex flex-col bg-white transition-all',
          { '-translate-y-full': !isMenuVisible, 'translate-y-0': isMenuVisible }
        )}
      >
        <div className="flex flex-col items-center text-[#232D46] text-[20px] justify-center gap-12 px-[16px] pt-[80px]">
          <img src="/teraz-logo.svg" className="mq1440:h-[160px] mq450:h-[32px] z-[500]" alt="Logo Dark" />

          {/* Mobile links */}
          <div className="flex flex-col gap-8 items-center w-full font-satoshi-medium font-[400] text-[#4040F2] text-[18px]">
            <a href="#problem" onClick={handleLinkClick} className="no-underline visited:text-[unset] text-[#4040F2]">Problem</a>
            <a href="#solution" onClick={handleLinkClick} className="no-underline visited:text-[unset] text-[#4040F2]">Rozwiązanie</a>
            <a href="#forwho" onClick={handleLinkClick} className="no-underline visited:text-[unset] text-[#4040F2]">Dla kogo</a>
            <a href="#plans" onClick={handleLinkClick} className="no-underline visited:text-[unset] text-[#4040F2]">Plany</a>
            <a href="#faq" onClick={handleLinkClick} className="no-underline visited:text-[unset] text-[#4040F2]">FAQ</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
