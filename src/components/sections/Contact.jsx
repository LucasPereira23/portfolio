import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <div id="content-contact" data-aos="fade-up" className="flex flex-col justify-center items-center mb-36">
      <div className="sm:w-[100%] md:w-[600px] flex-col flex justify-center items-center">
        <div className="flex flex-row text-red-500">
          <h5 className="mr-2 mb-5">{t('contact.number')}</h5>
          <span>{t('contact.label')}</span>
        </div>
        <span className="flex items-center justify-center text-center mobile:text-4xl sm-mobile:text-3xl sm:text-5xl font-semibold text-white-700 mb-6">
          {t('contact.title')}
        </span>
        <span className="flex justify-center items-center text-center text-white-700/50 font-light mb-14">
          {t('contact.description')}
        </span>
        <a
          href="mailto:lucas_231200@hotmail.com"
          target="_blank"
          className="border-[1px] rounded-[4px] px-[28px] py-[16px] text-white-100 text-sm font-light cursor-pointer hover:bg-white-100/10 transition-all duration-500"
        >
          {t('contact.cta')}
        </a>
      </div>
    </div>
  );
}

export default Contact;
