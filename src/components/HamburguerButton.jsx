import { useState, useEffect } from 'react';
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

  return (
    <div className="md:hidden flex items-center gap-3">
      <LanguageSwitcher />
      <div className="relative h-[50px] w-[65px]">
        <div className={active ? 'icon2 iconActive2' : 'icon2'} onClick={toggleMode} style={{ position: 'relative', top: 0, right: 0 }}>
          <div className="hamburguer2 hamburguerIcon2"></div>
        </div>
      </div>

      <div className={`menu-backdrop ${active ? 'active' : ''}`} onClick={closeMenu}></div>

      <div
        className={
          active
            ? 'menu2 menuOpen2 h-full flex items-center justify-center'
            : 'menu2 menuClose2 h-full flex items-center justify-center'
        }
      >
        <div>
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <h5>{item.number}</h5>
                <Link
                  className="cursor-pointer"
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
            <li>
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
      </div>
    </div>
  );
}

export default HamburguerButton;
