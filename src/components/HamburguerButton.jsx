import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import curriculo from '../assets/curriculo.pdf';
import resume from '../assets/resume.pdf';
import LanguageSwitcher from './LanguageSwitcher';

function HamburguerButton() {
  const { t, i18n } = useTranslation();
  const [active, setMode] = useState(false);
  const pdf = i18n.language === 'pt' ? curriculo : resume;

  const toggleMode = () => {
    setMode(!active);
  };

  const closeMenu = () => {
    setMode(false);
  };

  useEffect(() => {
    if (active) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [active]);

  const navItems = [
    { number: '01.', to: 'content-about', offset: -150, label: t('nav.about') },
    { number: '02.', to: 'content-work', offset: -95, label: t('nav.react') },
    { number: '03.', to: 'content-shopify', offset: -100, label: t('nav.shopify') },
    { number: '04.', to: 'content-contact', offset: -100, label: t('nav.contact') },
  ];

  const menuPortal = createPortal(
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          active ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />
      <div
        className={`fixed top-0 right-0 w-[75%] h-full bg-[#40404d] z-[70] flex items-center justify-center transition-transform duration-500 ease-in-out ${
          active ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ boxShadow: active ? '-10px 0px 69px 0px rgba(0, 0, 0, 0.59)' : 'none' }}
      >
        <ul className="flex flex-col items-center gap-0">
          {navItems.map((item) => (
            <li key={item.to} className="flex flex-col items-center mb-10">
              <h5 className="text-[#d31d1d] font-bold mb-1">{item.number}</h5>
              <Link
                className="cursor-pointer font-light text-xl text-white-100"
                activeClass="active"
                to={item.to}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={500}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="flex flex-col items-center">
            <a
              href={pdf}
              without="true"
              rel="noopener noreferrer"
              target="_blank"
              className="border-[1px] rounded-[4px] px-[30px] py-[16px] text-white-100 text-xs font-light cursor-pointer hover:bg-white-100/10 transition-all duration-500"
            >
              {t('nav.resume')}
            </a>
          </li>
        </ul>
      </div>
    </>,
    document.body
  );

  return (
    <div className="md:hidden flex items-center gap-0">
      <LanguageSwitcher />
      <div className="w-[50px] shrink-0" />
      {createPortal(
        <div
          className={`md:hidden fixed top-[15px] right-[10px] z-[80] h-[50px] w-[65px] cursor-pointer ${active ? 'icon2 iconActive2' : 'icon2'}`}
          onClick={toggleMode}
        >
          <div className="hamburguer2 hamburguerIcon2"></div>
        </div>,
        document.body
      )}
      {menuPortal}
    </div>
  );
}

export default HamburguerButton;
