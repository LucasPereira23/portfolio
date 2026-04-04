import AOS from 'aos';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import curriculo from '../assets/curriculo.pdf';
import resume from '../assets/resume.pdf';
import { useEffect, useState } from 'react';
import HamburguerButton from './HamburguerButton';
import LanguageSwitcher from './LanguageSwitcher';

AOS.init({
  duration: 1000,
  once: true,
});

function NavLink({ number, to, offset, children }) {
  return (
    <li className="list-none text-white-100 py-0 px-5 text-sm font-light">
      <span className="link-font mr-2 text-red-500 font-normal">{number}</span>
      <Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={offset}
        duration={500}
        className="cursor-pointer hover:text-red-600 transition-all duration-300"
      >
        {children}
      </Link>
    </li>
  );
}

function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pdf = i18n.language === 'pt' ? curriculo : resume;

  useEffect(() => {
    const body = document.body;
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (isMenuOpen) {
        return;
      }

      if (currentScroll <= 0) {
        body.classList.remove('scroll-up');
      }

      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  const navItems = [
    { number: '01.', to: 'content-about', offset: -150, label: t('nav.about') },
    { number: '02.', to: 'content-work', offset: -95, label: t('nav.projects') },
    { number: '03.', to: 'content-contact', offset: -100, label: t('nav.contact') },
  ];

  return (
    <div>
      <div id="navbar" className="z-50 fixed w-full top-0 left-0 h-20 py-0 sm-mobile:px-4 mobile:px-10 md:px-10 tablet:px-24 box-border flex justify-between items-center duration-300 bg-gray-700/90 backdrop-blur-sm">
        <a href="https://lucaspereira.vercel.app/" className="border-2 px-4 py-2 text-white-100 rounded-md hover:bg-white-100/10 transition-all duration-300">
          L
        </a>
        <ul className="m-0 p-0 sm-mobile:hidden mobile:hidden sm:hidden md:flex items-center justify-center">
          {navItems.map((item) => (
            <NavLink key={item.to} number={item.number} to={item.to} offset={item.offset}>
              {item.label}
            </NavLink>
          ))}
          <li className="list-none ml-4 flex items-center gap-3">
            <a
              href={pdf}
              without="true"
              rel="noopener noreferrer"
              target="_blank"
              className="border-[1px] rounded-[4px] px-[18px] py-[10px] text-white-100 text-xs font-light cursor-pointer hover:bg-white-100/10 transition-all duration-500"
            >
              {t('nav.resume')}
            </a>
            <LanguageSwitcher />
          </li>
        </ul>
        <HamburguerButton onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
    </div>
  );
}

export default Header;
