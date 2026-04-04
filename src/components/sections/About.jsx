import { useTranslation } from 'react-i18next';
import perfil from '../../assets/images/perfil.jpg';

const skills = [
  ['React', 'Vue.js', 'Java', 'Shopify', 'Python'],
  ['Next.js', 'Docker', 'TypeScript', 'Jest', 'Git'],
];

function About() {
  const { t } = useTranslation();

  return (
    <div data-aos="fade-up" id="content-about" className="flex flex-col w-auto justify-between mb-36">
      <div className="flex items-center mb-10">
        <a className="text-red-500 text-xl">{t('about.number')}</a>
        <span className="flex justify-center min-w-[135px] mr-3 text-white-500 font-semibold text-2xl">
          {t('about.title')}
        </span>
        <span className="w-80 border-b-[1px] border-white-700/50"></span>
      </div>
      <div className="flex sm-mobile:flex-col mobile:flex-col sm:flex-col md:flex-row">
        <div className="flex flex-col mobile:w-[100%] sm:h-auto sm:w-[500px] md:w-[700px] xl: justify-between text-white-700 font-light">
          <span className="mb-8">{t('about.p1')}</span>
          <span>{t('about.p2')}</span>
          <div className="flex sm-mobile:flex-col mobile:flex-row sm:flex-row mobile:text-sm sm:text-base font-thin mt-4 sm-mobile:mb-10 mobile:mb-12 sm:mb-12 md:mb-10">
            {skills.map((column, colIndex) => (
              <ul key={colIndex} className={`flex flex-col ${colIndex === 0 ? 'mr-12' : ''}`}>
                {column.map((skill) => (
                  <li key={skill}>
                    <span className="text-red-500 mr-2">▸</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="flex">
          <div className="flex sm-mobile:w-auto sm:w-[300px] mobile:justify-start sm:justify-start md:justify-start relative sm-mobile:ml-10 mobile:ml-10 sm:ml-12">
            <span
              id="block-img"
              className="z-30 absolute peer bg-red-500/40 hover:bg-transparent transition-all duration-100 left-0 top-0 sm-mobile:h-[55vw] sm-mobile:w-[55vw] mobile:h-[55vw] mobile:w-[55vw] sm:h-[300px] sm:w-[300px] md:h-[28vw] md:w-[80%] lg:h-[300px] lg:w-[300px] lg:max-w-[300px] rounded-md"
            ></span>
            <img
              className="sm-mobile:h-[55vw] sm-mobile:w-[55vw] mobile:h-[55vw] mobile:w-[55vw] sm:h-[300px] sm:w-[300px] md:h-[28vw] md:w-[80%] lg:h-[300px] lg:w-[300px] lg:min-w-[300px] rounded-md z-20 object-cover"
              src={perfil}
              alt=""
            />
            <span
              htmlFor="block-img"
              className="absolute peer-hover:left-3 peer-hover:top-3 transition-all duration-200 left-4 top-4 sm-mobile:h-[55vw] sm-mobile:w-[55vw] mobile:h-[55vw] mobile:w-[55vw] sm:h-[300px] sm:w-[300px] md:h-[28vw] md:w-[80%] lg:h-[300px] lg:w-[300px] lg:max-w-[300px] border-[2px] rounded-md"
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
