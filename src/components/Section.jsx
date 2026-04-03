import Aos from 'aos';
import { useTranslation } from 'react-i18next';
import SocialLinks from './SocialLinks';
import About from './sections/About';
import ReactProjects from './sections/React-projects';
import ShopifyProjects from './sections/Shopify-projects';
import GitProjects from './sections/Git-projects';
import Contact from './sections/Contact';
import Intro from './sections/Intro';

Aos.init({
  duration: 1000,
  once: true,
});

function Section() {
  const { t } = useTranslation();

  return (
    <div className="2xl:max-w-[1536px] sm-mobile:px-2 mobile:px-6 sm:px-12 md:px-28 lg:px-36 xl:px-44">
      <div data-aos="fade-in" className="sm:w-auto flex items-center justify-center pt-28">
        <div className="fixed left-10 bottom-0 sm-mobile:hidden mobile:hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex flex-col items-center justify-center">
          <SocialLinks />
          <span className="h-[90px] border-l-[1px] border-white-500"></span>
        </div>
        <div className="fixed right-10 bottom-0 w-10 sm-mobile:hidden mobile:hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex flex-col items-center justify-between">
          <span className="origin-center rotate-90 mb-32">
            <a
              href="mailto:lucas_231200@hotmail.com"
              target="_blank"
              className="relative left-0 text-white-500 text-sm cursor-pointer hover:text-red-500 hover:transition-all duration-300 hover:duration-300 hover:left-[-2px]"
            >
              lucas_231200@hotmail.com
            </a>
          </span>
          <span className="h-[90px] border-l-[1px] border-white-500"></span>
        </div>
        <div>
          <span className="text-5xl font-bold"></span>
        </div>
      </div>

      <Intro />
      <About />
      <ReactProjects />
      <ShopifyProjects />
      <GitProjects />
      <Contact />
    </div>
  );
}

export default Section;
