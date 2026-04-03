import { FolderSimple, GithubLogo } from 'phosphor-react';

function ProjectCardSmall({ name, description, techs, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="bg-[#40404d] cursor-pointer relative top-0 hover:top-[-10px] transition-all duration-300 flex flex-col mt-5 h-auto min-h-[300px] sm-mobile:w-full mobile:w-full sm:w-[280px] md:w-[292px] lg:w-[366px] xl:w-80 px-7 py-8 rounded-[4px] shadow-lg shadow-gray-700/80"
    >
      <div id="card-h" className="peer absolute top-0 left-0 h-full w-full"></div>
      <div className="flex flex-row justify-between items-center mb-6">
        <span className="text-red-700">
          <FolderSimple size={48} />
        </span>
        <span className="text-white-500 cursor-pointer hover:text-red-500 transition-all duration-300 z-10">
          <GithubLogo size={26} />
        </span>
      </div>
      <span
        htmlFor="card-h"
        className="peer-hover:text-red-500 hover:text-red-500 transition-all duration-300 text-white-500 text-lg font-semibold mb-2 z-10"
      >
        {name}
      </span>
      <span className="text-white-700 font-light text-sm mb-6">{description}</span>
      <div className="text-white-700/60 font-extralight text-xs">
        {techs.map((tech, index) => (
          <span key={tech} className={index < techs.length - 1 ? 'mr-4' : ''}>
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}

export default ProjectCardSmall;
