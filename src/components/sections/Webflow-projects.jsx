import { useTranslation } from 'react-i18next';
import SectionHeader from '../SectionHeader';
import ProjectCard from '../ProjectCard';
import cypris from '../../assets/images/cypris.png';
import alliance from '../../assets/images/alliance_solution.png';
import brighton from '../../assets/images/buildwithbrighton.png';

function WebflowProjects() {
  const { t } = useTranslation();

  const projects = [
    {
      key: 'cypris',
      image: cypris,
      name: t('webflowProjects.cypris.name'),
      description: t('webflowProjects.cypris.description'),
      techs: ['HTML', 'CSS', 'JavaScript', 'Webflow'],
      links: { live: 'https://www.cypris.ai/' },
      align: 'right',
    },
    {
      key: 'alliance',
      image: alliance,
      name: t('webflowProjects.alliance.name'),
      description: t('webflowProjects.alliance.description'),
      techs: ['HTML', 'CSS', 'JavaScript', 'Webflow'],
      links: { live: 'https://www.alliancesg.com/' },
      align: 'left',
    },
    {
      key: 'brighton',
      image: brighton,
      name: t('webflowProjects.brighton.name'),
      description: t('webflowProjects.brighton.description'),
      techs: ['HTML', 'CSS', 'JavaScript', 'Webflow'],
      links: { live: 'https://www.buildwithbrighton.com/' },
      align: 'right',
    },
  ];

  return (
    <div id="content-webflow" className="sm-mobile:mb-20 md:mb-36">
      <div data-aos="fade-up">
        <SectionHeader number={t('webflowProjects.number')} title={t('webflowProjects.title')} />
        {projects.map((project) => (
          <div key={project.key} data-aos="fade-up">
            <ProjectCard
              image={project.image}
              name={project.name}
              description={project.description}
              techs={project.techs}
              links={project.links}
              align={project.align}
              featured={t('webflowProjects.featured')}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebflowProjects;
