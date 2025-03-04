function Intro () {
  return(
    <>

      <div data-aos="fade-up" className="flex flex-col mb-36">
        <span className="text-red-500">Olá, meu nome é</span>
        <h1 className="mt-6 sm-mobile:text-xl mobile:text-4xl sm:text-7xl text-7xl font-bold text-white-500">Lucas Pereira.</h1>
        <h1 className="mobile:mt-3 sm:mt-6 mobile:text-4xl sm:text-7xl font-semibold text-white-700">Desenvolvedor Full-Stack.</h1>
        <span className="mobile:mt-6 sm:mt-10 sm-mobile:h-auto sm:h-20 sm-mobile:w-[100%] mobile:w-[100%]  sm:w-[564px] inline-block text-white-700 font-light">Desenvolvedor full-stack, com experiência em front-end e back-end. Comprometido em entregar soluções de qualidade com foco no que realmente importa para o projeto.</span>
        <a href="https://github.com/LucasPereira23?tab=repositories" target="_blank" className="flex items-center justify-center mt-10 sm-mobile:w-[80%] mobile:w-64 border-[1px] rounded-[4px] px-[22px] py-[16px] text-white-100 text-sm font-light cursor-pointer hover:bg-white-100/10 transition-all duration-500">Confira meus projetos</a>
      </div>
    </>
  )
}

export default Intro