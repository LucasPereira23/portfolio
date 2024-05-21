import { ArrowSquareOut  } from "phosphor-react"
import bougie from '../../assets/images/bougie-bottle.png'
import aila from '../../assets/images/aila.png'
import diamond_matress from '../../assets/images/diamond-matress.png'

function ShopifyProjects () {
  return(
    <div id="content-shopify" className="sm-mobile:mb-20 md:mb-36">
      <div data-aos="fade-up"   className="sm:mb-14 md:mb-20">
        <div className="flex items-center mobile:mb-10 sm:mb-16 md:mb-10">
          <a className="text-red-500 mobile:text-lg sm:text-xl">03.</a>
          <span className="flex justify-center min-w-[90px] mr-3 text-white-500 font-semibold mobile:text-lg  sm:text-2xl">Projetos - Shopify</span>    
          <span className="sm-mobile:w-[20%] sm:w-60 md:w-[300px] lg:w-[320px] border-b-[1px] border-white-700/50"></span>
        </div>
        <div className="flex flex-row relative items-center justify-end ">
          <a href="https://mybougiebottle.com/" target="_blank" className="sm-mobile:bg-red-700/70 sm:bg-red-700/70  md:bg-red-500/40 md:hover:bg-red-500/0 transition-all duration-400 md:cursor-pointer absolute xl:top-0 left-0 sm-mobile:h-[100%] sm-mobile:w-[100%] sm:h-[49vw] sm:w-[100%] md:h-[34vw] md:w-[65%] lg:h-[30vw] lg:min-w-[50%] lg:w-[60%] xl:h-[400px]  xl:w-[700px]  rounded-[3px] z-10"></a>
          <div id="link-img-2" className="absolute left-0 sm-mobile:block md:hidden"></div>
          <img className="sm-mobile:hidden md:block absolute xl:top-0 left-0 sm-mobile:opacity-25 sm:opacity-25 md:opacity-100 sm-mobile:h-[100%] sm-mobile:w-[100%] sm:h-[49vw] sm:w-[100%] md:h-[34vw] md:w-[65%] lg:h-[30vw] lg:min-w-[50%] lg:w-[60%] xl:h-[400px]  xl:w-[700px] rounded-[3px] object-cover" src={bougie} alt="" />
          <div className="h-[360px] sm-mobile:w-[100%] sm:w-auto py-10 mobile:px-7 sm:px-7 md:px-0 flex flex-col sm-mobile:items-start sm:items-start md:items-end justify-between ">
            <div className="flex flex-col sm-mobile:items-start sm:items-start  md:items-end z-20">
              <span className="sm-mobile:text-[#dd2f2f] sm:text-[#dd2f2f] md:text-red-500 text-sm pb-1">Projeto Destaque</span>
              <a href="https://mybougiebottle.com/" target="_blank" className="text-2xl sm:font-bold md:font-semi-bold text-white-500 hover:text-red-500 transition-all duration-300 md:mb-4 lg:mb-0">Bougie Bottle</a>
            </div>
            <div className="sm:bg-transparent sm:text-left md:bg-[#40404d] md:text-right text-white-700 flex flex-col justify-between items-end h-[auto] md:w-[50%] lg:w-[50%] xl:w-[46%]  rounded-[4px] py-6 md:px-6 md:mb-4 lg:mb-0 text-sm  md:shadow-lg shadow-gray-700/30 hover:shadow-gray-700/50 transition-all duration-300 z-20">
              <span>Criação e aprimoramento de vários recursos para melhorar a experiência geral do usuário e trazer o melhor da marca e a melhor aparência visual para sua loja.</span>
            </div>
            <div className="text-sm font-light flex flex-wrap items-center justify-between mobile:w-[100%] sm:w-[340px] text-white-700 sm-mobile:mb-2  md:mb-4 lg:mb-0 z-20">
              <span>HTML</span>
              <span className="mx-3">CSS</span>
              <span>JavaScript</span>
              <span className="mx-3">Liquid</span>
              <span>Shopify</span>
            </div>
            <div className="flex text-white-500 z-20">
              <a href="https://mybougiebottle.com/" target="_blank" className="cursor-pointer hover:text-red-500 transition-all duration-300">
                <ArrowSquareOut  size={26}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up"  className="sm:mb-14 md:mb-20 sm-mobile:mt-8 sm:mt-0 md:mt-0">
        <div className="flex flex-row relative items-center justify-start ">
          <a href="https://loveaila.com/" target="_blank" className="sm-mobile:bg-red-700/70 sm:bg-red-700/70  md:bg-red-500/40 md:hover:bg-red-500/0 transition-all duration-400 md:cursor-pointer absolute xl:top-0 right-0 sm-mobile:h-[100%] sm-mobile:w-[100%] sm:h-[49vw] sm:w-[100%] md:h-[34vw] md:w-[65%] lg:h-[30vw] lg:min-w-[50%] lg:w-[60%]  xl:h-[400px]  xl:w-[700px]  rounded-[3px] z-10"></a>
          <div id="link-img" className="absolute left-0 sm-mobile:block md:hidden"></div>
          <img className="sm-mobile:hidden md:block absolute xl:top-0 right-0 sm-mobile:opacity-25 sm:opacity-25 md:opacity-100 sm-mobile:h-[100%] sm-mobile:w-[100%] sm:h-[49vw] sm:w-[100%] md:h-[34vw] md:w-[65%] lg:h-[30vw] lg:min-w-[50%] lg:w-[60%] xl:h-[400px]  xl:w-[700px] rounded-[3px] object-cover" src={aila} alt="" />
          <div className=" h-[360px] mobile:w-[100%] sm:w-[100%] py-10 mobile:px-7 sm:px-7 md:px-0 flex flex-col sm-mobile:items-start sm:items-start md:items-start justify-between ">
            <div className="flex flex-col sm-mobile:items-start sm:items-start  md:items-start z-20">
              <span className="sm-mobile:text-[#dd2f2f] sm:text-[#dd2f2f] md:text-red-500 text-sm pb-1">Projeto Destaque</span>
              <a href="https://loveaila.com/" target="_blank" className="text-2xl sm:font-bold md:font-semi-bold text-white-500 hover:text-red-500 transition-all duration-300 md:mb-4 lg:mb-0">Aila</a>
            </div>
            <div className="sm:bg-transparent sm:text-left md:bg-[#40404d] md:text-left text-white-700 flex flex-col justify-between items-end h-[auto] md:w-[50%] lg:w-[50%] xl:w-[46%]  rounded-[4px] py-6 md:px-6 md:mb-4 lg:mb-0 text-sm  md:shadow-lg shadow-gray-700/30 hover:shadow-gray-700/50 transition-all duration-300 z-20">
              <span>Aila, um esmalte, é uma marca com o propósito de incorporar um design mais suave e limpo para refletir a delicadeza de seus produtos.</span>
            </div>
            <div className="text-sm font-light flex flex-wrap items-center justify-start mobile:w-[100%] sm:w-[280px] text-white-700 md:mb-4 lg:mb-0 z-20">
              <span>HTML</span>
              <span className="mx-3">CSS</span>
              <span>JavaScript</span>
              <span className="mx-3">Liquid</span>
              <span>Shopify</span>
            </div>
            <div className="flex text-white-500 z-20">
              <a href="https://loveaila.com/" target="_blank" className="mr-4 cursor-pointer hover:text-red-500 transition-all duration-300">
                <ArrowSquareOut  size={26}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up"  className="mb-20 sm-mobile:mt-8 sm:mt-0 md:mt-0">
        <div className="flex flex-row relative items-center justify-end ">
          <a href="https://diamondmattress.com/" target="_blank" className="sm-mobile:bg-red-700/70 sm:bg-red-700/70  md:bg-red-500/40 md:hover:bg-red-500/0 transition-all duration-400 md:cursor-pointer absolute xl:top-0 left-0 sm-mobile:h-[100%] sm-mobile:w-[100%] sm:h-[49vw] sm:w-[100%] md:h-[34vw] md:w-[65%] lg:h-[30vw] lg:min-w-[50%] lg:w-[60%] xl:h-[400px]  xl:w-[700px]  rounded-[3px] z-10"></a>
          <div id="link-img-2" className="absolute left-0 sm-mobile:block md:hidden"></div>
          <img className="sm-mobile:hidden md:block absolute xl:top-0 left-0 sm-mobile:opacity-25 sm:opacity-25 md:opacity-100 sm-mobile:h-[100%] sm-mobile:w-[100%] sm:h-[49vw] sm:w-[100%] md:h-[34vw] md:w-[65%] lg:h-[30vw] lg:min-w-[50%] lg:w-[60%] xl:h-[400px]  xl:w-[700px] rounded-[3px] object-cover" src={diamond_matress} alt="" />
          <div className="h-[360px] sm-mobile:w-[100%] sm:w-auto py-10 mobile:px-7 sm:px-7 md:px-0 flex flex-col sm-mobile:items-start sm:items-start md:items-end justify-between ">
            <div className="flex flex-col sm-mobile:items-start sm:items-start  md:items-end z-20">
              <span className="sm-mobile:text-[#dd2f2f] sm:text-[#dd2f2f] md:text-red-500 text-sm pb-1">Projeto Destaque</span>
              <a href="https://diamondmattress.com/" target="_blank" className="text-2xl sm:font-bold md:font-semi-bold text-white-500 hover:text-red-500 transition-all duration-300 md:mb-4 lg:mb-0">Diamond Matress</a>
            </div>
            <div className="sm:bg-transparent sm:text-left md:bg-[#40404d] md:text-right text-white-700 flex flex-col justify-between items-end h-[auto] md:w-[50%] lg:w-[50%] xl:w-[46%]  rounded-[4px] py-6 md:px-6 md:mb-4 lg:mb-0 text-sm  md:shadow-lg shadow-gray-700/30 hover:shadow-gray-700/50 transition-all duration-300 z-20">
              <span>A Diamond Mattress oferece uma extensa coleção de colchões e roupas de cama requintados, combinando tecnologia de ponta com design atemporal para um conforto incomparável.</span>
            </div>
            <div className="text-sm font-light flex flex-wrap items-center justify-between mobile:w-[100%] sm:w-[340px] text-white-700 sm-mobile:mb-2  md:mb-4 lg:mb-0 z-20">
              <span>HTML</span>
              <span className="mx-3">CSS</span>
              <span>JavaScript</span>
              <span className="mx-3">Liquid</span>
              <span>Shopify</span>
            </div>
            <div className="flex text-white-500 z-20">
              <a href="https://diamondmattress.com/" target="_blank" className="cursor-pointer hover:text-red-500 transition-all duration-300">
                <ArrowSquareOut  size={26}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopifyProjects