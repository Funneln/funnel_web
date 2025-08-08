import React from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ko' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <button
        onClick={toggleLanguage}
        className="flex items-center space-x-1 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-sm font-medium"
      >
        <span className={`${i18n.language === 'en' ? 'text-blue-600' : 'text-gray-600'}`}>EN</span>
        <span className="text-gray-400">|</span>
        <span className={`${i18n.language === 'ko' ? 'text-blue-600' : 'text-gray-600'}`}>KR</span>
      </button>
    </div>
  );
};

export default LanguageToggle;