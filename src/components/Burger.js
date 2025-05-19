import classNames from 'classnames';
import React from 'react';

function BurgerIcon({ isMenuVisible, toggleMenu }) {
  return (
    <button
      onClick={toggleMenu}
      className="relative group bg-transparent z-[400] cursor-pointer hidden mq450:block"
    >
      <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
        <div
          className={classNames(
            'h-[2px] w-7 transform transition-all duration-300 origin-left',
            {
              'bg-[#4040F2]': true,
              'rotate-[42deg]': isMenuVisible,
            }
          )}
        ></div>
        <div
          className={classNames(
            'h-[2px] w-3 transform transition-all duration-300',
            {
              'bg-[#4040F2]': true, 
              '-translate-x-10': isMenuVisible, 
            }
          )}
        ></div>
        <div
          className={classNames(
            'h-[2px] w-7 transform transition-all duration-300 origin-left',
            {
              'bg-[#4040F2]': true, 
              '-rotate-[42deg]': isMenuVisible, 
            }
          )}
        ></div>
      </div>
    </button>
  );
}

export default BurgerIcon;
