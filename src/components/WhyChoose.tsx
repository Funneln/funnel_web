import React from 'react';
import { Wrench, Brain, Globe, Users, Briefcase, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyChoose = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Wrench,
      title: t('whyChoose.handsOnLearning'),
      description: t('whyChoose.handsOnLearningDesc'),
      color: 'blue'
    },
    {
      icon: Brain,
      title: t('whyChoose.aiProjectPortfolio'),
      description: t('whyChoose.aiProjectPortfolioDesc'),
      color: 'indigo'
    },
    {
      icon: Globe,
      title: t('whyChoose.englishOnlyInstruction'),
      description: t('whyChoose.englishOnlyInstructionDesc'),
      color: 'purple'
    },
    {
      icon: Users,
      title: t('whyChoose.industryExperts'),
      description: t('whyChoose.industryExpertsDesc'),
      color: 'blue'
    },
    {
      icon: Briefcase,
      title: t('whyChoose.careerSupport'),
      description: t('whyChoose.careerSupportDesc'),
      color: 'indigo'
    },
    {
      icon: Target,
      title: t('whyChoose.globalSkillset'),
      description: t('whyChoose.globalSkillsetDesc'),
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600',
      indigo: 'bg-indigo-50 text-indigo-600',
      purple: 'bg-purple-50 text-purple-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="why-choose" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('whyChoose.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('whyChoose.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-gray-100 transition-colors group">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 ${getColorClasses(feature.color)}`}>
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;