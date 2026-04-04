import { useTranslation } from 'react-i18next';
import SectionHeader from '../SectionHeader';
import ProjectCard from '../ProjectCard';
import matanativa from '../../assets/images/mata_nativa.png';
import pokesearch from '../../assets/images/pokesearch.png';
import capi from '../../assets/images/capi.png';

function ReactProjects() {
  const { t } = useTranslation();

  const projects = [
    {
      key: 'capi',
      image: capi,
      name: t('reactProjects.capi.name'),
      description: t('reactProjects.capi.description'),
      techs: ['React', 'Next.js', 'TypeScript', 'Jest', 'Docker'],
      links: { live: 'https://capi.ambiental.media/' },
      align: 'right',
    },
    {
      key: 'matanativa',
      image: matanativa,
      name: t('reactProjects.matanativa.name'),
      description: t('reactProjects.matanativa.description'),
      techs: ['React', 'Next.js', 'TypeScript'],
      links: { live: 'https://matanativa.art/en/' },
      align: 'left',
    },
    {
      key: 'pokesearch',
      image: pokesearch,
      name: t('reactProjects.pokesearch.name'),
      description: t('reactProjects.pokesearch.description'),
      techs: ['React', 'Next.js', 'TypeScript', 'TailWindCSS'],
      links: {
        github: 'https://github.com/LucasPereira23/pokesearch-v2',
        live: 'https://pokesearch-lucaspereira23.vercel.app/',
      },
      align: 'right',
    },
  ];

  return (
    <div id="content-work" className="sm-mobile:mb-20 md:mb-36">
      <div data-aos="fade-up">
        <SectionHeader number={t('reactProjects.number')} title={t('reactProjects.title')} />
        {projects.map((project) => (
          <div key={project.key} data-aos="fade-up">
            <ProjectCard
              image={project.image}
              name={project.name}
              description={project.description}
              techs={project.techs}
              links={project.links}
              align={project.align}
              featured={t('reactProjects.featured')}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReactProjects;
