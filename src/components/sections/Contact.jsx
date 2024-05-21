function Contact () {
  return(
    <div id="content-contact" data-aos="fade-up" className=" flex flex-col justify-center items-center mb-36">
      <div  className="sm:w-[100%] md:w-[600px] flex-col flex justify-center items-center">
        <div  className="flex flex-row text-red-500">
          <h5 className="mr-2 mb-5">04.</h5>
          <span className="">Contato</span>
        </div>
        <span className="flex items-center justify-center text-center mobile:text-4xl sm-mobile:text-3xl sm:text-5xl font-semibold text-white-700 mb-6">Entre em Contato</span>
        <span className="flex justify-center items-center text-center text-white-700/50 font-light mb-14">Você pode entrar em contato comigo por e-mail :)</span>
        <a href="mailto:lucas_231200@hotmail.com" target="_blank" className="border-[1px] rounded-[4px] px-[28px] py-[16px] text-white-100 text-sm font-light cursor-pointer hover:bg-white-100/10 transition-all duration-500">Fale comigo</a>
      </div>
    </div>
  )
}

export default Contact