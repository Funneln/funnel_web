import React from 'react';
import { Code, Brain, MessageCircle, Clock, Users, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProgramsProps {
  onCourseSelect?: (courseId: string) => void;
}

const Programs: React.FC<ProgramsProps> = ({ onCourseSelect }) => {
  const { t } = useTranslation();

  const programs = [
    {
      icon: Code,
      title: t('programs.zeroToHeroTitle'),
      duration: t('programs.zeroToHeroDuration') || `9 ${t('programs.weeks')}`,
      level: t('programs.zeroToHeroLevel') || t('programs.beginnerToAdvanced'),
      description: t('programs.zeroToHeroDescription'),
      skills: t('programs.zeroToHeroTechnologies', { returnObjects: true }) || ["HTML", "CSS", "JavaScript", "Git"],
      price: "$350",
      color: "indigo"
    },
    {
      icon: Brain,
      title: t('programs.dataScienceTitle'),
      duration: t('programs.dataScienceDuration') || `12 ${t('programs.weeks')}`,
      level: t('programs.intermediate'),
      description: t('programs.dataScienceDescription'),
      skills: t('programs.dataScienceTechnologies', { returnObjects: true }) || ["ChatGPT", "DALL·E", "Canva", "Teachable Machine"],
      price: "$9,000",
      color: "purple"
    },
    {
      icon: MessageCircle,
      title: t('programs.mobileAppTitle'),
      duration: t('programs.mobileAppDuration') || "Anytime",
      level: t('programs.beginnerToAdvanced'), 
      description: t('programs.mobileAppDescription'),
      skills: t('programs.mobileAppTechnologies', { returnObjects: true }) || ["Communication", "IT Terms", "Vocabulary & Pronunciation", "Practical Sentences"],
      price: "$7,500",
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      indigo: "border-blue-200",
      purple: "border-blue-200", 
      blue: "border-blue-200"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="programs" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('programs.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('programs.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl overflow-hidden group">
                <div className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{program.title}</h3>
                  
                  {program.subtitle && (
                    <p className="text-base sm:text-lg text-blue-600 font-medium mb-3 sm:mb-4 leading-relaxed">{program.subtitle}</p>
                  )}
                  
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span className="text-sm">{program.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{program.description}</p>
                  
                  {program.skills.length > 0 && (
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">{t('programs.whatYouLearn')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 sm:pt-6 border-t border-gray-100 gap-3 sm:gap-0">
                    <div className="flex flex-col">
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">
                        {index === 0 ? t('programs.pricing.course1.main') : index === 1 ? t('programs.pricing.course2.main') : t('programs.pricing.course3.main')}
                      </div>
                      {index === 0 && (
                        <div className="text-sm text-gray-400">
                          <span className="line-through">{t('programs.pricing.course1.original')}</span> {t('programs.pricing.course1.discount')}
                        </div>
                      )}
                      {index === 1 && (
                        <div className="text-sm text-gray-400">
                          <span className="line-through">{t('programs.pricing.course2.original')}</span> {t('programs.pricing.course2.discount')}
                        </div>
                      )}
                      {index === 2 && (
                        <div className="text-sm text-gray-400">
                          <span className="line-through">{t('programs.pricing.course3.original')}</span> {t('programs.pricing.course3.discount')}
                        </div>
                      )}
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base w-full sm:w-auto">
                      <span onClick={() => onCourseSelect && onCourseSelect(index === 0 ? 'zero-to-hero' : index === 1 ? 'ai-projects' : 'english-speaking')}>
                        {t('programs.learnMore')}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-16 bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="space-y-2 sm:space-y-3">
              <Award className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mx-auto" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">{t('programs.industryRecognized')}</h3>
              <p className="text-sm sm:text-base text-gray-600">{t('programs.industryRecognizedDesc')}</p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <Users className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mx-auto" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">{t('programs.smallClassSizes')}</h3>
              <p className="text-sm sm:text-base text-gray-600">{t('programs.smallClassSizesDesc')}</p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <Brain className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mx-auto" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">{t('programs.projectBasedLearning')}</h3>
              <p className="text-sm sm:text-base text-gray-600">{t('programs.projectBasedLearningDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;