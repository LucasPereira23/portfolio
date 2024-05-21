import { FolderSimple, GithubLogo } from "phosphor-react"

function GitProjects () {
  return(
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
          <span htmlFor="card-h" className="peer-hover:text-red-500 hover:text-red-500 transition-all duration-300 text-white-500 text-lg font-semibold mb-2 z-10">Fórum - Rocket.q</span>
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
            <span>TailWindCSS</span>
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
            <span>TailWindCSS</span>
          </div>
        </a>

        <a href="https://github.com/LucasPereira23/pokesearch-v2" target="_blank" className="bg-[#40404d] cursor-pointer relative top-0 hover:top-[-10px] transition-all duration-300 flex flex-col mt-5 min-h-[300px] h-auto sm:w-[280px] md:w-[292px] lg:w-[366px] xl:w-80 px-7 py-8 rounded-[4px] shadow-lg shadow-gray-700/80">
          <div id="card-h"  className="z-10 peer absolute top-0 left-0 h-full w-full"></div>
          <div className="flex flex-row justify-between items-center mb-6">
            <span className="text-red-700">
              <FolderSimple size={48} />
            </span>
            <span className="text-white-500 cursor-pointer hover:text-red-500 transition-all duration-300 z-10">
              <GithubLogo size={26} />
            </span>
          </div>
          <span htmlFor="card-h" className="peer-hover:text-red-500 hover:text-red-500 transition-all duration-300 text-white-500 text-lg font-semibold mb-2 z-10">PokeSearch V2 - Aplicação Pokedex</span>
          <span className="text-white-700 font-light text-sm mb-6">Segunda versão da PokeSearch com novas tecnologias e features para ver mais detalhes dos pokémons</span>

          <div className="text-white-700/60 font-extralight text-xs">
            <span className="mr-4">React</span>
            <span className="mr-4">Next.js</span>
            <span className="mr-4">TypeScript</span>
          </div>
        </a>
        <div className="opacity-0 bg-[#40404d] relative top-0 hover:top-[-10px] transition-all duration-300 flex flex-col h-0 sm:w-[280px] md:w-[292px] lg:w-[366px] xl:w-80  rounded-[4px] shadow-lg shadow-gray-700/80">
        </div>
      </div>
    </div>
  )
}

export default GitProjects