import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../SectionHeader';
import ProjectCard from '../ProjectCard';
import capi from '../../assets/images/capi.png';
import matanativa from '../../assets/images/mata_nativa.png';
import pokesearch from '../../assets/images/pokesearch.png';
import bougie from '../../assets/images/bougie-bottle.png';
import aila from '../../assets/images/aila.png';
import diamond_matress from '../../assets/images/diamond-matress.png';
import cypris from '../../assets/images/cypris.png';
import alliance from '../../assets/images/alliance_solution.png';
import brighton from '../../assets/images/buildwithbrighton.png';

function Projects() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('react');

  const projectsByType = {
    react: [
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
    ],
    shopify: [
      {
        key: 'bougie',
        image: bougie,
        name: t('shopifyProjects.bougie.name'),
        description: t('shopifyProjects.bougie.description'),
        techs: ['HTML', 'CSS', 'JavaScript', 'Liquid', 'Shopify'],
        links: { live: 'https://mybougiebottle.com/' },
        align: 'right',
      },
      {
        key: 'aila',
        image: aila,
        name: t('shopifyProjects.aila.name'),
        description: t('shopifyProjects.aila.description'),
        techs: ['HTML', 'CSS', 'JavaScript', 'Liquid', 'Shopify'],
        links: { live: 'https://loveaila.com/' },
        align: 'left',
      },
      {
        key: 'diamond',
        image: diamond_matress,
        name: t('shopifyProjects.diamond.name'),
        description: t('shopifyProjects.diamond.description'),
        techs: ['HTML', 'CSS', 'JavaScript', 'Liquid', 'Shopify'],
        links: { live: 'https://diamondmattress.com/' },
        align: 'right',
      },
    ],
    webflow: [
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
    ],
  };

  const tabs = [
    { key: 'react', label: 'React' },
    { key: 'shopify', label: 'Shopify' },
    { key: 'webflow', label: 'Webflow' },
  ];

  return (
    <div id="content-work" className="sm-mobile:mb-20 md:mb-36">
      <div data-aos="fade-up">
        <SectionHeader number={t('projects.number')} title={t('projects.title')} />
        <div className="flex gap-8 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`text-sm pb-1 border-b-2 transition-all duration-300 cursor-pointer ${
                activeTab === tab.key
                  ? 'text-red-500 border-red-500 font-normal'
                  : 'text-white-500 border-transparent font-light hover:text-red-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {projectsByType[activeTab].map((project) => (
          <div key={project.key} data-aos="fade-up">
            <ProjectCard
              image={project.image}
              name={project.name}
              description={project.description}
              techs={project.techs}
              links={project.links}
              align={project.align}
              featured={t('projects.featured')}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
