import React, { useEffect } from 'react';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';

const MobileMenu = ({ toggleMobileMenu, mobileMenu }) => {
  useEffect(() => {
    const body = document.querySelector('body');
    if (mobileMenu) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }

    return () => {
      body.style.overflow = 'auto';
    };
  }, [mobileMenu]);

  return (
    <div>
      {/* Оверлей */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 ${mobileMenu ? 'block' : 'hidden'}`} onClick={toggleMobileMenu}></div>
      
      {/* Меню */}
      <div className={`fixed top-0 right-0 w-2/3 h-full bg-white z-50 overflow-y-auto transform transition-transform ease-in-out duration-300 ${mobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Зміст вашого меню */}
        <div className="p-4 flex flex-col items-end">
          {/* Кнопка закриття меню */}
          <button onClick={toggleMobileMenu}>Close Menu</button>
          {/* Зміст меню */}
            <div className='flex flex-col items-end'>
                {navLinks.map((link) => (
                    <Link to={link.href} key={link.id} onClick={toggleMobileMenu}>{link.label}</Link>
                ))}
            </div>
          {/* ... */}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;