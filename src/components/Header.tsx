import React, { useState } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  // Check if we're on a course detail page
  const isCourseDetailPage = window.location.pathname.includes('/programs/zero-to-hero') ||
                            window.location.pathname.includes('/programs/ai') ||
                            window.location.pathname.includes('/programs/speaking');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 safe-area-inset-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <button onClick={handleLogoClick} className="flex items-center hover:opacity-80 transition-opacity">
            <Code className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mr-2" />
            <span className="text-lg sm:text-xl font-bold text-gray-900">Funnel</span>
          </button>
          
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {!isCourseDetailPage ? (
              <>
                <button onClick={() => scrollToSection('hero')} className="text-gray-600 font-medium hover:text-blue-600 text-sm xl:text-base">{t('header.home')}</button>
                <button onClick={() => scrollToSection('why-choose')} className="text-gray-600 font-medium hover:text-blue-600 text-sm xl:text-base">{t('header.whatIsFunnel')}</button>
                <button onClick={() => scrollToSection('programs')} className="text-gray-600 font-medium hover:text-blue-600 text-sm xl:text-base">{t('header.programs')}</button>
                <button onClick={() => scrollToSection('portfolio')} className="text-gray-600 font-medium hover:text-blue-600 text-sm xl:text-base">{t('header.projects')}</button>
                <button onClick={() => scrollToSection('faq')} className="text-gray-600 font-medium hover:text-blue-600 text-sm xl:text-base">{t('header.faq')}</button>
                <LanguageToggle />
              </>
            ) : (
              <>
                <LanguageToggle />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm xl:text-base">
                  {t('header.applyNow')}
                </button>
              </>
            )}
          </nav>

          <button 
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {!isCourseDetailPage ? (
                <>
                  <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-3 py-3 text-gray-600 hover:text-blue-600 text-base font-medium">{t('header.home')}</button>
                  <button onClick={() => scrollToSection('why-choose')} className="block w-full text-left px-3 py-3 text-gray-600 hover:text-blue-600 text-base font-medium">{t('header.whatIsFunnel')}</button>
                  <button onClick={() => scrollToSection('programs')} className="block w-full text-left px-3 py-3 text-gray-600 hover:text-blue-600 text-base font-medium">{t('header.programs')}</button>
                  <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-3 py-3 text-gray-600 hover:text-blue-600 text-base font-medium">{t('header.projects')}</button>
                  <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-3 py-3 text-gray-600 hover:text-blue-600 text-base font-medium">{t('header.faq')}</button>
                  <div className="px-3 py-3">
                    <LanguageToggle />
                  </div>
                </>
              ) : (
                <>
                  <div className="px-3 py-3">
                    <LanguageToggle />
                  </div>
                  <div className="px-3 py-3">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-base">
                      {t('header.applyNow')}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;