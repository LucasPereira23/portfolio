import Aos from "aos";
import { FolderSimple, GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react"
import ignite from '../assets/images/ignite-wpp.png'
import perfil from '../assets/images/perfil.jpg'
import nlw from '../assets/images/nlw.jpeg'

Aos.init({
  duration: 1000,
  once: true,
});

function Section () {
  return (
    <div  className="2xl:max-w-[1536px] sm-mobile:px-2 mobile:px-6 sm:px-12 md:px-28 lg:px-36 xl:px-44 ">
      <div data-aos="fade-in" className=" sm:w-auto flex items-center justify-center pt-28">
        <div className=" fixed left-10 bottom-0 sm-mobile:hidden mobile:hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex flex-col items-center justify-center">
          <a href="https://github.com/LucasPereira23" target="_blank" className="relative top-0 mb-6 text-white-500 cursor-pointer hover:text-red-500 hover:transition-all duration-300 hover:duration-300 hover:top-[-2px]">
            <GithubLogo size={28} />
          </a>
          <a href="https://www.instagram.com/lucaspereira727/" target="_blank" className="relative top-0 mb-6 text-white-500 cursor-pointer hover:text-red-500 hover:transition-all duration-300 hover:duration-300  hover:top-[-2px]">
            <InstagramLogo size={28} />
          </a>
          <a href="https://www.linkedin.com/in/lucas-pereira-alves-5164aa20a/" target="_blank" className="relative top-0 mb-8 text-white-500 cursor-pointer hover:text-red-500 hover:transition-all duration-300 hover:duration-300  hover:top-[-2px]">
            <LinkedinLogo size={28} />
          </a>
          <span className="h-[90px] border-l-[1px] border-white-500"></span> 
        </div>
        <div className="fixed right-10 bottom-0 w-10 sm-mobile:hidden mobile:hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex  flex-col items-center justify-between">
          <span className="origin-center rotate-90 mb-32 "><a href="mailto:lucas_231200@hotmail.com" target="_blank" className="relative left-0 text-white-500 text-sm cursor-pointer hover:text-red-500 hover:transition-all duration-300 hover:duration-300 hover:left-[-2px]">lucas_231200@hotmail.com</a></span> 
          <span className="h-[90px] border-l-[1px] border-white-500"></span>
        </div>
        <div>
          <span className="text-5xl font-bold"></span>
        </div>
      </div>
      <div data-aos="fade-up" className="flex flex-col mb-36">
        <span className="text-red-500">Olá, meu nome é</span>
        <h1 className="mt-6 sm-mobile:text-xl mobile:text-4xl sm:text-7xl text-7xl font-bold text-white-500">Lucas Pereira.</h1>
        <h1 className="mobile:mt-3 sm:mt-6 mobile:text-4xl sm:text-7xl font-semibold text-white-700">Programador Web.</h1>
        <span className="mobile:mt-6 sm:mt-10 sm-mobile:h-auto sm:h-20 sm-mobile:w-[100%] mobile:w-[100%]  sm:w-[564px] inline-block text-white-700 font-light">Sou um programador web, especializado principalmente no Front-End, com formação em Análise e Desenvolvimento de Sistemas.</span>
        <a href="https://github.com/LucasPereira23?tab=repositories" target="_blank" className="flex items-center justify-center mt-10 sm-mobile:w-[80%] mobile:w-64 border-[1px] rounded-[4px] px-[22px] py-[16px] text-white-100 text-sm font-light cursor-pointer hover:bg-white-100/10 transition-all duration-500">Confira meus projetos</a>
      </div>
      <div data-aos="fade-up" id="content-about" className="flex flex-col w-auto justify-between mb-36 mobile:pl-0 sm:pl-12">
        <div className="flex items-center mb-10">
          <a className="text-red-500 text-xl">01.</a>
          <span className="flex justify-center min-w-[135px] mr-3 text-white-500 font-semibold text-2xl">Sobre mim</span>
          <span className="w-80 border-b-[1px] border-white-700/50"></span>
        </div>
        <div className="flex sm-mobile:flex-col mobile:flex-col sm:flex-col md:flex-row">
          <div className="flex flex-col mobile:w-[100%] sm:h-auto sm:w-[500px] md:w-[550px] xl: justify-between text-white-700 font-light">
            <span className="mb-8">
              Olá, sou Lucas Pereira e minha paixão é o desenvolvimento. Sou formado em Análise e Desenvolvimento de Sistemas e, desde o início, minha jornada na programação despertou uma vontade constante de aprender e evoluir. Embora meu principal foco seja o Front-End, tenho buscado expandir minha expertise também no Back-End
            </span>
            <span>
              Encontrei na área de desenvolvimento o meu verdadeiro interesse e tenho me dedicado intensamente. Aproveito cada momento livre para fazer cursos e desenvolver sites por conta própria, sempre em busca de aprimoramento constante.
            </span>
            <div className="flex sm-mobile:flex-col mobile:flex-row sm:flex-row mobile:text-sm sm:text-base font-thin mt-4 sm-mobile:mb-10 mobile:mb-12 sm:mb-12 md:mb-10">
              <ul className="flex flex-col mr-12">
                <li>
                  <span className="text-red-500 mr-2">▸</span>
                  <span>HTML</span>
                </li>
                <li>
                  <span className="text-red-500 mr-2">▸</span>
                  <span>CSS</span>
                </li>
                <li>
                  <span className="text-red-500 mr-2">▸</span>
                  <span>JavaScript</span>
                </li>
                <li>
                  <span className="text-red-500 mr-2">▸</span>
                  <span>Shopify</span>
                </li>
              </ul>
              <ul className="flex flex-col">
                <li>
                  <span className="text-red-500 mr-2">▸</span>
                  <span>React</span>
                </li>
                <li>
                  <span className="text-red-500 mr-2">▸</span>
                  <span>Node.js</span>
                </li>
                <li>
                  <span className="text-red-500 mr-2">▸</span>
                  <span>Liquid</span>
                </li>
                <li>
                  <span className="text-red-500 mr-2">▸</span>
                  <span>Git</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex " >
            <div className="flex sm-mobile:w-auto sm:w-[300px] mobile:justify-start sm:justify-start md:justify-start relative sm-mobile:ml-10 mobile:ml-10 sm:ml-12 ">
              <span id="block-img" className="z-30 absolute peer bg-red-500/40 hover:bg-transparent transition-all duration-100 left-0 top-0 sm-mobile:h-[55vw] sm-mobile:w-[55vw] mobile:h-[55vw] mobile:w-[55vw]  sm:h-[300px] sm:w-[300px] md:h-[28vw] md:w-[80%] lg:h-[300px] lg:w-[300px] lg:max-w-[300px] rounded-md"></span>
              <img className=" sm-mobile:h-[55vw] sm-mobile:w-[55vw] mobile:h-[55vw] mobile:w-[55vw] sm:h-[300px] sm:w-[300px] md:h-[28vw] md:w-[80%] lg:h-[300px] lg:w-[300px] lg:min-w-[300px] rounded-md z-20 object-cover" src={perfil} alt="" />
              <span htmlFor="block-img" className="absolute peer-hover:left-3 peer-hover:top-3 transition-all duration-200 left-4 top-4 sm-mobile:h-[55vw] sm-mobile:w-[55vw] mobile:h-[55vw] mobile:w-[55vw] sm:h-[300px] sm:w-[300px] md:h-[28vw] md:w-[80%] lg:h-[300px] lg:w-[300px] lg:max-w-[300px] border-[2px] rounded-md "></span>
            </div>
          </div>
        </div>
      </div>
      <div id="content-work" className="sm-mobile:mb-20 md:mb-36">
        <div data-aos="fade-up"   className="sm:mb-14 md:mb-20">
          <div className="flex items-center mobile:mb-10 sm:mb-16 md:mb-10">
            <a className="text-red-500 mobile:text-lg sm:text-xl">02.</a>
            <span className="flex justify-center min-w-[90px] mr-3 text-white-500 font-semibold mobile:text-lg  sm:text-2xl">Principais Projetos</span>    
            <span className="sm-mobile:w-[20%] sm:w-60 md:w-[300px] lg:w-[320px] border-b-[1px] border-white-700/50"></span>
          </div>
          <div className="flex flex-row relative items-center justify-end ">
            <a href="https://github.com/LucasPereira23/ignite-lab-react" target="_blank" className="sm-mobile:bg-red-700/70 sm:bg-red-700/70  md:bg-red-500/40 md:hover:bg-red-500/0 transition-all duration-400 md:cursor-pointer absolute xl:top-0 left-0 sm-mobile:h-[100%] sm-mobile:w-[100%] sm:h-[49vw] sm:w-[100%] md:h-[34vw] md:w-[65%] lg:h-[30vw] lg:min-w-[50%] lg:w-[60%] xl:h-[400px]  xl:w-[700px]  rounded-[3px] z-10"></a>
            <div id="link-img-2" className="absolute left-0 sm-mobile:block md:hidden"></div>
            <img className="sm-mobile:hidden md:block absolute xl:top-0 left-0 sm-mobile:opacity-25 sm:opacity-25 md:opacity-100 sm-mobile:h-[100%] sm-mobile:w-[100%] sm:h-[49vw] sm:w-[100%] md:h-[34vw] md:w-[65%] lg:h-[30vw] lg:min-w-[50%] lg:w-[60%] xl:h-[400px]  xl:w-[700px] rounded-[3px] object-cover" src={ignite} alt="" />
            <div className="h-[360px] sm-mobile:w-[100%] sm:w-auto py-10 mobile:px-7 sm:px-7 md:px-0 flex flex-col sm-mobile:items-start sm:items-start md:items-end justify-between ">
              <div className="flex flex-col sm-mobile:items-start sm:items-start  md:items-end z-20">
                <span className="sm-mobile:text-[#dd2f2f] sm:text-[#dd2f2f] md:text-red-500 text-sm pb-1">Projeto Destaque</span>
                <a href="https://github.com/LucasPereira23/ignite-lab-react" target="_blank" className="text-2xl sm:font-bold md:font-semi-bold text-white-500 hover:text-red-500 transition-all duration-300 md:mb-4 lg:mb-0">Ignite Lab-React</a>
              </div>
              <div className="sm:bg-transparent sm:text-left md:bg-[#40404d] md:text-right text-white-700 flex flex-col justify-between items-end h-[auto] md:w-[50%] lg:w-[50%] xl:w-[46%]  rounded-[4px] py-6 md:px-6 md:mb-4 lg:mb-0 text-sm  md:shadow-lg shadow-gray-700/30 hover:shadow-gray-700/50 transition-all duration-300 z-20">
                <span>Aplicação desenvolvida durante o evento Ignite Lab da Rocketseat. Sua funcionalidade principal consiste em apresentar e estruturar as aulas compartilhadas pelos professores da plataforma para os alunos.</span>
              </div>
              <div className="text-sm font-light flex flex-wrap items-center justify-between mobile:w-[100%] sm:w-[340px] text-white-700 sm-mobile:mb-2  md:mb-4 lg:mb-0 z-20">
                <span>HTML</span>
                <span className="mx-3">React</span>
                <span>TypeScript</span>
                <span className="mx-3">Tail Wind</span>
                <span>GraphCMS</span>
              </div>
              <div className="flex text-white-500 z-20">
                <a href="https://github.com/LucasPereira23/ignite-lab-react" target="_blank" className="mr-4 cursor-pointer hover:text-red-500 transition-all duration-300">
                  <GithubLogo size={26}/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up"  className="mb-24 sm-mobile:mt-8 sm:mt-0 md:mt-0">
          <div className="flex flex-row relative items-center justify-start ">
            <a href="https://github.com/LucasPereira23/NLW" target="_blank" className="sm-mobile:bg-red-700/70 sm:bg-red-700/70  md:bg-red-500/40 md:hover:bg-red-500/0 transition-all duration-400 md:cursor-pointer absolute xl:top-0 right-0 sm-mobile:h-[100%] sm-mobile:w-[100%] sm:h-[49vw] sm:w-[100%] md:h-[34vw] md:w-[65%] lg:h-[30vw] lg:min-w-[50%] lg:w-[60%]  xl:h-[400px]  xl:w-[700px]  rounded-[3px] z-10"></a>
            <div id="link-img" className="absolute left-0 sm-mobile:block md:hidden"></div>
            <img className="sm-mobile:hidden md:block absolute xl:top-0 right-0 sm-mobile:opacity-25 sm:opacity-25 md:opacity-100 sm-mobile:h-[100%] sm-mobile:w-[100%] sm:h-[49vw] sm:w-[100%] md:h-[34vw] md:w-[65%] lg:h-[30vw] lg:min-w-[50%] lg:w-[60%] xl:h-[400px]  xl:w-[700px] rounded-[3px] object-cover" src={nlw} alt="" />
            <div className=" h-[360px] mobile:w-[100%] sm:w-[100%] py-10 mobile:px-7 sm:px-7 md:px-0 flex flex-col sm-mobile:items-start sm:items-start md:items-start justify-between ">
              <div className="flex flex-col sm-mobile:items-start sm:items-start  md:items-start z-20">
                <span className="sm-mobile:text-[#dd2f2f] sm:text-[#dd2f2f] md:text-red-500 text-sm pb-1">Projeto Destaque</span>
                <a href="https://github.com/LucasPereira23/NLW" target="_blank" className="text-2xl sm:font-bold md:font-semi-bold text-white-500 hover:text-red-500 transition-all duration-300 md:mb-4 lg:mb-0">Next Level Week</a>
              </div>
              <div className="sm:bg-transparent sm:text-left md:bg-[#40404d] md:text-left text-white-700 flex flex-col justify-between items-end h-[auto] md:w-[50%] lg:w-[50%] xl:w-[46%]  rounded-[4px] py-6 md:px-6 md:mb-4 lg:mb-0 text-sm  md:shadow-lg shadow-gray-700/30 hover:shadow-gray-700/50 transition-all duration-300 z-20">
                <span>A aplicação possui a capacidade realizar a postagem de comentários em um fórum publicado por um usuário.
                </span>
              </div>
              <div className="text-sm font-light flex flex-wrap items-center justify-start mobile:w-[100%] sm:w-[250px] text-white-700 md:mb-4 lg:mb-0 z-20">
                <span>HTML</span>
                <span className="mx-3">CSS</span>
                <span className="mr-3">JavaScript</span>
                <span>SQLite</span>
              </div>
              <div className="flex text-white-500 z-20">
                <a href="https://github.com/LucasPereira23/NLW" target="_blank" className="mr-4 cursor-pointer hover:text-red-500 transition-all duration-300">
                  <GithubLogo size={26}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center sm-mobile:mb-28 md:mb-36">
        <div className="flex flex-col justify-center items-center mb-8">
          <h1 className="mt-6 text-3xl font-semibold text-white-700 mb-3">Todos os Projetos</h1>
          <a href="" className="text-red-500">Veja os arquivos</a>
        </div>
        <div  data-aos="fade-up" className="mobile:min-w-[290px] mobile:max-w-[450px] sm:max-w-[575px] sm:w-[575px] md:w-[600px] md:max-w-[600px] lg:w-[750px] lg:max-w-[750px] xl:w-[1000px] xl:max-w-[1000px] flex flex-wrap items-center justify-between">
          <a href="https://github.com/LucasPereira23/NLW" target="_blank"  className="peer bg-[#40404d] cursor-pointer relative top-0 hover:top-[-10px] transition-all duration-300 flex flex-col mt-5 h-auto min-h-[300px] sm:w-[280px] md:w-[292px] lg:w-[366px] xl:w-80 px-7 py-8 rounded-[4px] shadow-lg shadow-gray-700/80">
            <div id="card-h"  className="peer absolute top-0 left-0 h-full w-full "></div>
            <div className="flex flex-row justify-between items-center mb-6">
              <span className="text-red-700">
                <FolderSimple size={48} />
              </span>
              <span className="text-white-500 cursor-pointer hover:text-red-500 transition-all duration-300 z-10">
                <GithubLogo size={26} />
              </span>
            </div>
            <span htmlFor="card-h" className="peer-hover:text-red-500 hover:text-red-500 transition-all duration-300 text-white-500 text-lg font-semibold mb-2 z-10">Fórum - Next Level Week</span>
            <span className="text-white-700 font-light text-sm mb-6">Aplicação voltada para a realização de comentários em um fórum postado pelo usuário</span>
            <div className="text-white-700/60 font-extralight text-xs">
              <span className="mr-4">HTML</span>
              <span className="mr-4">CSS</span>
              <span>JavaScript</span>
            </div>
          </a>
          <a href="https://github.com/LucasPereira23/ignite-lab-react" target="_blank" className="bg-[#40404d] cursor-pointer relative top-0 hover:top-[-10px] transition-all duration-300 flex flex-col mt-5 h-auto min-h-[300px] sm:w-[280px] md:w-[292px] lg:w-[366px] xl:w-80 px-7 py-8 rounded-[4px] shadow-lg shadow-gray-700/80">
            <div id="card-h"  className="peer absolute top-0 left-0 h-full w-full "></div>
            <div className="flex flex-row justify-between items-center mb-6">
              <span className="text-red-700">
                <FolderSimple size={48} />
              </span>
              <span className="text-white-500 cursor-pointer hover:text-red-500 transition-all duration-300 z-10">
                <GithubLogo size={26} />
              </span>
            </div>
            <span htmlFor="card-h" className="peer-hover:text-red-500 hover:text-red-500 transition-all duration-300 text-white-500 text-lg font-semibold mb-2 z-10">Videoaulas - Ignite Lab</span>
            <span className="text-white-700 font-light text-sm mb-6">Aplicação com banco de dados para a visualização de videoaulas postadas pelos professores</span>
            <div className="text-white-700/60 font-extralight text-xs">
              <span className="mr-4">React</span>
              <span className="mr-4">TypeScript</span>
              <span>GraphCMS</span>
            </div>
          </a>
          <a href="https://github.com/LucasPereira23/pokedex-application" target="_blank" className="bg-[#40404d] cursor-pointer relative top-0 hover:top-[-10px] transition-all duration-300 flex flex-col mt-5 min-h-[300px] h-auto sm:w-[280px] md:w-[292px] lg:w-[366px] xl:w-80 px-7 py-8 rounded-[4px] shadow-lg shadow-gray-700/80">
            <div id="card-h"  className="peer absolute top-0 left-0 h-full w-full "></div>
            <div className="flex flex-row justify-between items-center mb-6">
              <span className="text-red-700">
                <FolderSimple size={48} />
              </span>
              <span className="text-white-500 cursor-pointer hover:text-red-500 transition-all duration-300 z-10">
                <GithubLogo size={26} />
              </span>
            </div>
            <span htmlFor="card-h" className="peer-hover:text-red-500 hover:text-red-500 transition-all duration-300 text-white-500 text-lg font-semibold mb-2 z-10">PokeSearch - Aplicação Pokedex</span>
            <span className="text-white-700 font-light text-sm mb-6">Pokédex para que os usuários possam ver informações de todos os Pokémon existentes</span>
            <div className="text-white-700/60 font-extralight text-xs">
              <span className="mr-4">React</span>
              <span className="mr-4">TypeScript</span>
              <span>TailWind</span>
            </div>
          </a>
          <a href="https://github.com/LucasPereira23/portfolio" target="_blank" className="bg-[#40404d] cursor-pointer relative top-0 hover:top-[-10px] transition-all duration-300 flex flex-col mt-5 min-h-[300px] h-auto sm:w-[280px] md:w-[292px] lg:w-[366px] xl:w-80 px-7 py-8 rounded-[4px] shadow-lg shadow-gray-700/80">
            <div id="card-h"  className="z-10 peer absolute top-0 left-0 h-full w-full "></div>
            <div className="flex flex-row justify-between items-center mb-6">
              <span className="text-red-700">
                <FolderSimple size={48} />
              </span>
              <span className="text-white-500 cursor-pointer hover:text-red-500 transition-all duration-300 z-10">
                <GithubLogo size={26} />
              </span>
            </div>
            <span htmlFor="card-h" className="peer-hover:text-red-500 hover:text-red-500 transition-all duration-300 text-white-500 text-lg font-semibold mb-2 z-10">Portfolio pessoal - Lucas Pereira</span>
            <span className="text-white-700 font-light text-sm mb-6">Meu Portfolio pessoal para apresentação dos projetos já realizados</span>
            <div className="text-white-700/60 font-extralight text-xs">
              <span className="mr-4">React</span>
              <span className="mr-4">JavaScript</span>
              <span>TailWind</span>
            </div>
          </a>
        </div>
      </div>
      <div id="content-contact" data-aos="fade-up" className=" flex flex-col justify-center items-center mb-36">
        <div  className="sm:w-[100%] md:w-[600px] flex-col flex justify-center items-center">
          <div  className="flex flex-row text-red-500">
            <h5 className="mr-2 mb-5">03.</h5>
            <span className="">Contato</span>
          </div>
          <span className="flex items-center justify-center text-center mobile:text-4xl sm-mobile:text-3xl sm:text-5xl font-semibold text-white-700 mb-6">Entre em Contato</span>
          <span className="flex justify-center items-center text-center text-white-700/50 font-light mb-14">Você pode entrar em contato comigo por e-mail :)</span>
          <a href="mailto:lucas_231200@hotmail.com" target="_blank" className="border-[1px] rounded-[4px] px-[28px] py-[16px] text-white-100 text-sm font-light cursor-pointer hover:bg-white-100/10 transition-all duration-500">Fale comigo</a>
        </div>
      </div>
    </div>
  )
}
export default Section