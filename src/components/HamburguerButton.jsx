import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll"; 
import pdf from '../assets/curriculo.pdf'

function HamburguerButton (){
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active)
  }

  return (
    <div className="md:hidden h-[100vh] absolute top-0 right-0">
      <div className={active ? 'icon2 iconActive2' : 'icon2'} onClick={ToggleMode}>
        <div  className='hamburguer2 hamburguerIcon2'></div>
      </div>
      <div className={active ? 'menu2 menuOpen2 h-full flex items-center justify-center' : 'menu2 menuClose2 h-full flex items-center justify-center'}>
        <div>
          <ul>
            <li>
              <h5>01.</h5>
              <Link className="cursor-pointer"
                activeClass="active"
                to="content-about"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}>
              Sobre
              </Link>
            </li>
            <li>
              <h5>02.</h5>
              <Link className="cursor-pointer"
                activeClass="active"
                to="content-work"
                spy={true}
                smooth={true}
                offset={-95}
                duration={500}>
              React
              </Link>
            </li>
            <li>
              <h5>03.</h5>
              <Link className="cursor-pointer"
                activeClass="active"
                to="content-shopify"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
              Shopify
              </Link>
            </li>
            <li>
              <h5>04.</h5>
              <Link className="cursor-pointer"
                activeClass="active"
                to="content-contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
              Contato
              </Link>
            </li>
            <li className="">
              <a href={pdf} without="true" rel="noopener noreferrer" target="_blank"  className="border-[1px] rounded-[4px] px-[30px] py-[16px] text-white-100 text-xs font-light cursor-pointer hover:bg-white-100/10 transition-all duration-500">Currículo</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HamburguerButton