import { useTranslation } from 'react-i18next';
import ProjectCardSmall from '../ProjectCardSmall';

const projects = [
  {
    key: 'rocketq',
    href: 'https://github.com/LucasPereira23/NLW',
    techs: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    key: 'igniteLab',
    href: 'https://github.com/LucasPereira23/ignite-lab-react',
    techs: ['React', 'TypeScript', 'GraphCMS'],
  },
  {
    key: 'pokedex',
    href: 'https://github.com/LucasPereira23/pokedex-application',
    techs: ['React', 'TypeScript', 'TailWindCSS'],
  },
  {
    key: 'portfolio',
    href: 'https://github.com/LucasPereira23/portfolio',
    techs: ['React', 'JavaScript', 'TailWindCSS'],
  },
  {
    key: 'pokesearchV2',
    href: 'https://github.com/LucasPereira23/pokesearch-v2',
    techs: ['React', 'Next.js', 'TypeScript'],
  },
];

function GitProjects() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center sm-mobile:mb-28 md:mb-36">
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="mt-6 text-3xl font-semibold text-white-700 mb-3">
          {t('gitProjects.title')}
        </h1>
        <a href="" className="text-red-500">
          {t('gitProjects.viewFiles')}
        </a>
      </div>
      <div
        data-aos="fade-up"
        className="mobile:min-w-[290px] mobile:max-w-[100%] sm:max-w-[575px] sm:w-[575px] md:w-[600px] md:max-w-[600px] lg:w-[750px] lg:max-w-[750px] xl:w-[1000px] xl:max-w-[1000px] flex flex-wrap items-center justify-between"
      >
        {projects.map((project) => (
          <ProjectCardSmall
            key={project.key}
            name={t(`gitProjects.${project.key}.name`)}
            description={t(`gitProjects.${project.key}.description`)}
            techs={project.techs}
            href={project.href}
          />
        ))}
        <div className="opacity-0 bg-[#40404d] relative top-0 hover:top-[-10px] transition-all duration-300 flex flex-col h-0 sm:w-[280px] md:w-[292px] lg:w-[366px] xl:w-80 rounded-[4px] shadow-lg shadow-gray-700/80"></div>
      </div>
    </div>
  );
}

export default GitProjects;
