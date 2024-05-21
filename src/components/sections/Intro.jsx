function Intro () {
  return(
    <>

      <div data-aos="fade-up" className="flex flex-col mb-36">
        <span className="text-red-500">Olá, meu nome é</span>
        <h1 className="mt-6 sm-mobile:text-xl mobile:text-4xl sm:text-7xl text-7xl font-bold text-white-500">Lucas Pereira.</h1>
        <h1 className="mobile:mt-3 sm:mt-6 mobile:text-4xl sm:text-7xl font-semibold text-white-700">Programador Web.</h1>
        <span className="mobile:mt-6 sm:mt-10 sm-mobile:h-auto sm:h-20 sm-mobile:w-[100%] mobile:w-[100%]  sm:w-[564px] inline-block text-white-700 font-light">Sou um programador web, especializado principalmente no Front-End, com formação em Análise e Desenvolvimento de Sistemas.</span>
        <a href="https://github.com/LucasPereira23?tab=repositories" target="_blank" className="flex items-center justify-center mt-10 sm-mobile:w-[80%] mobile:w-64 border-[1px] rounded-[4px] px-[22px] py-[16px] text-white-100 text-sm font-light cursor-pointer hover:bg-white-100/10 transition-all duration-500">Confira meus projetos</a>
      </div>
    </>
  )
}

export default Intro