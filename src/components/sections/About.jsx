import perfil from '../../assets/images/perfil.jpg'

function About () {
  return(
    <div data-aos="fade-up" id="content-about" className="flex flex-col w-auto justify-between mb-36 mobile:pl-0 sm:pl-12">
      <div className="flex items-center mb-10">
        <a className="text-red-500 text-xl">01.</a>
        <span className="flex justify-center min-w-[135px] mr-3 text-white-500 font-semibold text-2xl">Sobre mim</span>
        <span className="w-80 border-b-[1px] border-white-700/50"></span>
      </div>
      <div className="flex sm-mobile:flex-col mobile:flex-col sm:flex-col md:flex-row">
        <div className="flex flex-col mobile:w-[100%] sm:h-auto sm:w-[500px] md:w-[550px] xl: justify-between text-white-700 font-light">
          <span className="mb-8">
            Olá, sou Lucas Pereira, e minha paixão é o desenvolvimento. Tenho formação em Análise e Desenvolvimento de Sistemas e, desde o início da minha jornada na programação, fui movido por um desejo constante de aprender e evoluir. Abracei completamente o desenvolvimento Full-Stack, aprimorando minhas habilidades tanto na criação de interfaces de usuário quanto no desenvolvimento e otimização de sistemas Back-End.
          </span>
          <span>
            Atualmente, trabalho como Desenvolvedor Full-Stack, atuando em projetos que exigem uma abordagem completa, desde a criação de experiências de usuário fluidas até a implementação de lógicas de sistema eficientes e escaláveis. Estou sempre em busca de explorar novas tecnologias, aprimorar minha capacidade de resolução de problemas e desenvolver soluções inovadoras que gerem impacto.
          </span>
          <div className="flex sm-mobile:flex-col mobile:flex-row sm:flex-row mobile:text-sm sm:text-base font-thin mt-4 sm-mobile:mb-10 mobile:mb-12 sm:mb-12 md:mb-10">
            <ul className="flex flex-col mr-12">
              <li>
                <span className="text-red-500 mr-2">▸</span>
                <span>React</span>
              </li>
              <li>
                <span className="text-red-500 mr-2">▸</span>
                <span>Vue.js</span>
              </li>
              <li>
                <span className="text-red-500 mr-2">▸</span>
                <span>Java</span>
              </li>
              <li>
                <span className="text-red-500 mr-2">▸</span>
                <span>Shopify</span>
              </li>
              <li>
                <span className="text-red-500 mr-2">▸</span>
                <span>Python</span>
              </li>
            </ul>
            <ul className="flex flex-col">
              <li>
                  <span className="text-red-500 mr-2">▸</span>
                  <span>Next.js</span>
                </li>
              <li>
                <span className="text-red-500 mr-2">▸</span>
                <span>Docker</span>
              </li>
              <li>
                <span className="text-red-500 mr-2">▸</span>
                <span>TypeScript</span>
              </li>
              <li>
                <span className="text-red-500 mr-2">▸</span>
                <span>Jest</span>
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
  )
}

export default About