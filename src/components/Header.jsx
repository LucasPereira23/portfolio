import AOS from 'aos';
import HamburguerButton from './HamburguerButton';
import { Link, animateScroll as scroll } from "react-scroll";
import pdf from '../assets/curriculo.pdf' 
import { useEffect, useState } from 'react';

AOS.init({
  duration: 1000,
  once: true,
});


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

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

  return (
    <div data-aos="fade-in">
      <div  id="navbar" className='z-50 fixed w-full top-0 left-0 h-20 py-0 sm-mobile:px-4 mobile:px-10 md:px-24 box-border flex justify-between items-center duration-300 bg-gray-700/90 backdrop-blur-sm'>
      <a href="https://lucaspereira.vercel.app/" className="border-2 px-4 py-2 text-white-100 rounded-md hover:bg-white-100/10 transition-all duration-300">L</a>
      <ul className="m-0 p-0 sm-mobile:hidden mobile:hidden sm:hidden md:flex items-center justify-center">
        <li className="list-none text-white-100 py-0 px-5 text-sm font-light ">
          <a href="" className="mr-2 text-red-500 font-normal">01.</a>
          <Link
            activeClass="active"
            to="content-about"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="cursor-pointer hover:text-red-600 transition-all duration-300 ">Sobre
          </Link>
        </li>
        <li className="list-none text-white-100 py-0 px-5 text-sm font-light ">
          <a href="" className="mr-2 text-red-500 font-normal">02.</a>
          <Link
            activeClass="active"
            to="content-work"
            spy={true}
            smooth={true}
            offset={-95}
            duration={500} className="cursor-pointer hover:text-red-600 transition-all duration-300 ">Projetos
          </Link>
        </li>
        <li className="list-none text-white-100 py-0 px-5 text-sm font-light ">
          <a href="" className="mr-2 text-red-500 font-normal">03.</a>
          <Link
            activeClass="active"
            to="content-contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500} className="cursor-pointer hover:text-red-600 transition-all duration-300 ">Contato
          </Link>
        </li>
        <li className="list-none ml-4">
            <a href={pdf} without="true" rel="noopener noreferrer" target="_blank" className="border-[1px] rounded-[4px] px-[18px] py-[10px] text-white-100 text-xs font-light cursor-pointer hover:bg-white-100/10 transition-all duration-500">Currículo</a>
        </li>
      </ul>
        <HamburguerButton onClick={() => setIsMenuOpen(!isMenuOpen)} />
    </div>

    </div>
    
  )
}

export default Header
