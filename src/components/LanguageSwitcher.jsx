import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const BrazilFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" width="20" height="14">
    <path fill="#229e45" d="M0 0h640v480H0z"/>
    <path fill="#f8e509" d="M321.4 36.2 609.5 240 321.4 443.8 33.3 240z"/>
    <circle fill="#2b49a3" cx="321.4" cy="240" r="113.4"/>
    <path fill="#fff" d="M195.7 272.5s50.5-56.2 252.7-25.4c0 0-43.8-69.3-126.8-72.2s-125.9 97.6-125.9 97.6z"/>
  </svg>
);

const USFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" width="20" height="14">
    <path fill="#bd3d44" d="M0 0h640v37h-640zm0 73.9h640v37h-640zm0 73.8h640v37h-640zm0 73.8h640v37h-640zm0 74h640v36.8h-640zm0 73.7h640v37h-640zm0 73.9h640v37h-640z"/>
    <path fill="#fff" d="M0 37h640v36.9h-640zm0 73.8h640v36.9h-640zm0 73.8h640v37h-640zm0 73.9h640v37h-640zm0 73.8h640v37h-640zm0 73.9h640v37h-640z"/>
    <path fill="#192f5d" d="M0 0h364.8v258.5H0z"/>
  </svg>
);

const languages = [
  { code: 'en', path: '/', Flag: USFlag, name: { en: 'English', pt: 'Inglês' } },
  { code: 'pt', path: '/pt', Flag: BrazilFlag, name: { en: 'Portuguese', pt: 'Português' } },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang.code);
    window.history.pushState({}, '', lang.path);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border-0 md:border-[1px] rounded-[4px] px-0 md:px-[14px] py-[10px] text-white-100 text-xs font-light cursor-pointer md:hover:bg-white-100/10 transition-all duration-500"
      >
        <current.Flag />
        <svg
          className={`w-2.5 h-2.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full mt-2 right-0 bg-[#40404d] border-[1px] rounded-[4px] shadow-lg overflow-hidden z-50 min-w-[160px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang)}
              className="flex items-center gap-3 w-full px-4 py-3 text-white-100 text-xs font-light cursor-pointer hover:bg-white-100/10 transition-all duration-300"
            >
              <lang.Flag />
              <span>{lang.name[i18n.language] || lang.name.en}</span>
              {i18n.language === lang.code && (
                <svg className="w-3.5 h-3.5 text-red-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
