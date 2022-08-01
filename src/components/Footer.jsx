import Aos from "aos";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

Aos.init({
    duration: 1000,
    once: true,
  });

function Footer () {

    return (
        <div data-aos="fade-up" className="sm-mobile:px-8 px-44">
            <div className="flex flex-col justify-center items-center">
                <div className="md:hidden w-[35%] text-white-700 flex items-center justify-between mb-6">
                    <a className="hover:text-red-500 transition-all duration-300" href="https://github.com/LucasPereira23" target="_blank"><GithubLogo size={26}/></a>
                    <a className="hover:text-red-500 transition-all duration-300" href="https://www.instagram.com/lucaspereira727/" target="_blank"><InstagramLogo size={26} /></a>
                    <a className="hover:text-red-500 transition-all duration-300" href="https://www.linkedin.com/in/lucas-pereira-alves-5164aa20a/" target="_blank"><LinkedinLogo size={26} /></a>    
                </div>
                <h5 className="mb-6 text-white-700/50 font-light cursor-default text-sm hover:text-red-500 transition-all duration-300">Built by Lucas Pereira</h5>
            </div>
        </div>

        
    )
}

export default Footer