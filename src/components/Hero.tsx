import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LazyImage from './LazyImage';
import TypedText from './TypedText';

const Hero = () => {
  const { t } = useTranslation();
  
  const motivationalMessages = t('hero.motivationalMessages', { returnObjects: true }) as string[];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="hero" className="pt-16 sm:pt-20 pb-6 sm:pb-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('hero.title')}
                <span className="block text-blue-600">{t('hero.titleSecond')}</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('programs')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg flex items-center justify-center transition-colors w-full sm:w-auto"
              >
                {t('hero.startJourney')}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-8 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">95%</div>
                <div className="text-sm sm:text-base text-gray-600">{t('hero.jobPlacementRate')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">80%</div>
                <div className="text-sm sm:text-base text-gray-600">{t('hero.averageSalary')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">200+</div>
                <div className="text-sm sm:text-base text-gray-600">{t('hero.alumniNetwork')}</div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-square rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 relative">
              <LazyImage 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
                alt="Students coding together" 
                className="w-full h-full object-cover"
              />
              
              {/* Fixed White Typing Box - Bottom Right Within Image */}
              <div 
                className="absolute"
                style={{
                  bottom: '12px',
                  right: '12px',
                  minWidth: '280px',
                  maxWidth: 'calc(100% - 24px)',
                  height: 'auto',
                  padding: '12px 16px',
                  backgroundColor: 'white',
                  borderRadius: '6px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="flex items-center justify-center text-center">
                  <TypedText 
                    messages={motivationalMessages}
                    typeSpeed={50}
                    deleteSpeed={30}
                    pauseDuration={3000}
                    className="text-sm sm:text-base font-medium text-gray-900 leading-relaxed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;