import { ArrowSquareOut, GithubLogo } from 'phosphor-react';

function ProjectCard({ image, name, description, techs, links, align = 'right', featured }) {
  const isRight = align === 'right';

  return (
    <div className={`flex flex-row relative items-center sm-mobile:mb-5 sm:mb-5 md:mb-20 sm-mobile:mt-0 sm:mt-0 md:mt-0 ${isRight ? 'md:justify-end' : 'md:justify-start'}`}>
      <a
        href={links.live || links.github}
        target="_blank"
        className={`sm-mobile:bg-red-700/70 sm:bg-red-700/70 md:bg-red-500/40 md:hover:bg-red-500/0 transition-all duration-400 md:cursor-pointer absolute xl:top-0 ${isRight ? 'left-0' : 'right-0'} sm-mobile:h-[100%] sm-mobile:w-[100%] sm:h-[49vw] sm:w-[100%] md:h-[34vw] md:w-[65%] lg:h-[30vw] lg:min-w-[50%] lg:w-[60%] xl:h-[400px] xl:w-[700px] rounded-[3px] z-10`}
      ></a>
      <div id={isRight ? 'link-img-2' : 'link-img'} className="absolute left-0 sm-mobile:block md:hidden"></div>
      <img
        className={`sm-mobile:hidden md:block absolute xl:top-0 ${isRight ? 'left-0' : 'right-0'} sm-mobile:opacity-25 sm:opacity-25 md:opacity-100 sm-mobile:h-[100%] sm-mobile:w-[100%] sm:h-[49vw] sm:w-[100%] md:h-[34vw] md:w-[65%] lg:h-[30vw] lg:min-w-[50%] lg:w-[60%] xl:h-[400px] xl:w-[700px] rounded-[3px] object-cover`}
        src={image}
        alt={name}
      />
      <div
        className={`sm-mobile:h-auto sm:h-auto md:h-[360px] ${isRight ? 'sm-mobile:w-[100%] sm:w-auto' : 'mobile:w-[100%] sm:w-[100%]'} py-7 mobile:px-7 sm:px-7 md:px-0 flex flex-col sm-mobile:items-start sm:items-start ${isRight ? 'md:items-end' : 'md:items-start'} justify-between gap-y-6 md:gap-y-0`}
      >
        <div className={`flex flex-col sm-mobile:items-start sm:items-start ${isRight ? 'md:items-end' : 'md:items-start'} z-20`}>
          <span className="sm-mobile:text-[#dd2f2f] sm:text-[#dd2f2f] md:text-red-500 text-sm pb-1">
            {featured}
          </span>
          <a
            href={links.live || links.github}
            target="_blank"
            className="text-2xl sm:font-bold md:font-semi-bold text-white-500 hover:text-red-500 transition-all duration-300 md:mb-4 lg:mb-0"
          >
            {name}
          </a>
        </div>
        <div
          className={`sm:bg-transparent sm:text-left md:bg-[#40404d] ${isRight ? 'md:text-right' : 'md:text-left'} text-white-700 flex flex-col justify-between sm-mobile:items-start sm:items-start ${isRight ? 'md:items-end' : 'md:items-start'} h-[auto] md:w-[50%] lg:w-[50%] xl:w-[46%] rounded-[4px] sm-mobile:py-0 sm:py-0 md:py-6 md:px-6 md:mb-4 lg:mb-0 text-sm md:shadow-lg shadow-gray-700/30 hover:shadow-gray-700/50 transition-all duration-300 z-20`}
        >
          <span>{description}</span>
        </div>
        <div
          className={`text-sm font-light flex flex-wrap items-center gap-y-2 gap-x-3 justify-start ${isRight ? 'md:justify-between' : 'md:justify-start'} mobile:w-[100%] sm:w-[340px] text-white-700 sm-mobile:mb-2 md:mb-4 lg:mb-0 z-20`}
        >
          {techs.map((tech) => (
            <span key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className="flex text-white-500 z-20">
          {links.github && (
            <a href={links.github} target="_blank" className="mr-4 cursor-pointer hover:text-red-500 transition-all duration-300">
              <GithubLogo size={26} />
            </a>
          )}
          {links.live && (
            <a href={links.live} target="_blank" className="cursor-pointer hover:text-red-500 transition-all duration-300">
              <ArrowSquareOut size={26} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
