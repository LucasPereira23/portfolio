import { useTranslation } from 'react-i18next';
import SectionHeader from '../SectionHeader';
import ProjectCard from '../ProjectCard';
import bougie from '../../assets/images/bougie-bottle.png';
import aila from '../../assets/images/aila.png';
import diamond_matress from '../../assets/images/diamond-matress.png';

function ShopifyProjects() {
  const { t } = useTranslation();

  const projects = [
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
  ];

  return (
    <div id="content-shopify" className="sm-mobile:mb-20 md:mb-36">
      <div data-aos="fade-up">
        <SectionHeader number={t('shopifyProjects.number')} title={t('shopifyProjects.title')} />
        {projects.map((project) => (
          <div key={project.key} data-aos="fade-up">
            <ProjectCard
              image={project.image}
              name={project.name}
              description={project.description}
              techs={project.techs}
              links={project.links}
              align={project.align}
              featured={t('shopifyProjects.featured')}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopifyProjects;
