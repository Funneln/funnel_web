import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Users, Target, CheckCircle, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface EnglishSpeakingCourseDetailProps {
  onBack: () => void;
}

const EnglishSpeakingCourseDetail: React.FC<EnglishSpeakingCourseDetailProps> = ({ onBack }) => {
  const { t } = useTranslation();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredCourse: t('englishCourse.title'),
    additionalQuestions: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(t('englishCourse.form.successMessage'));
    setShowApplicationForm(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      preferredCourse: t('englishCourse.title'),
      additionalQuestions: ''
    });
  };

  return (
    <div className="min-h-screen bg-white" data-course-detail>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              🇺🇸 {t('englishCourse.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('englishCourse.subtitle')}
            </p>
            <button
              onClick={() => setShowApplicationForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              {t('englishCourse.applyNow')}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Why Take This Course */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('englishCourse.whyTakeTitle')}</h2>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg border border-red-200">
              <span className="text-red-500 text-xl">❌</span>
              <p className="text-gray-800 font-medium">{t('englishCourse.whyTakeNegative')}</p>
            </div>
            
            <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
              <span className="text-green-500 text-xl">✅</span>
              <p className="text-gray-800 font-medium">{t('englishCourse.whyTakePositive')}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('englishCourse.whyStudentsChoose')}</h3>
            <ul className="space-y-3">
              {[
                t('englishCourse.reasons.speechBlock'),
                t('englishCourse.reasons.presentation'),
                t('englishCourse.reasons.career'),
                t('englishCourse.reasons.communication'),
                t('englishCourse.reasons.confidence')
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">{index + 1}.</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What You'll Learn */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('englishCourse.whatYouLearnTitle')}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">🗣️</span>
                {t('englishCourse.keyTopics')}
              </h3>
              <ul className="space-y-2">
                {[
                  t('englishCourse.topics.selfIntro'),
                  t('englishCourse.topics.dailyConv'),
                  t('englishCourse.topics.projectExplain'),
                  t('englishCourse.topics.presentations'),
                  t('englishCourse.topics.techPhrases'),
                  t('englishCourse.topics.pronunciation')
                ].map((topic, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">✨</span>
                {t('englishCourse.afterClass')}
              </h3>
              <ul className="space-y-2">
                {[
                  t('englishCourse.outcomes.confidence'),
                  t('englishCourse.outcomes.projectExplain'),
                  t('englishCourse.outcomes.interview'),
                  t('englishCourse.outcomes.communication')
                ].map((outcome, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Course Summary */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('englishCourse.courseStructureTitle')}</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-blue-600" />
                <div>
                  <span className="font-semibold">{t('englishCourse.duration')}:</span>
                  <span className="ml-2 text-gray-700">{t('englishCourse.weeks')}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-blue-600" />
                <div>
                  <span className="font-semibold">{t('englishCourse.frequency')}:</span>
                  <span className="ml-2 text-gray-700">{t('englishCourse.schedule')}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-blue-600" />
                <div>
                  <span className="font-semibold">{t('englishCourse.format')}:</span>
                  <span className="ml-2 text-gray-700">{t('englishCourse.formatDesc')}</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start space-x-3">
                <Target className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <span className="font-semibold">{t('englishCourse.mainActivities')}</span>
                  <ul className="mt-2 space-y-1 text-gray-700">
                    <li>• {t('englishCourse.activities.roleplay')}</li>
                    <li>• {t('englishCourse.activities.presentation')}</li>
                    <li>• {t('englishCourse.activities.practical')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('englishCourse.whoShouldJoinTitle')}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">👩‍🎓</span>
                {t('englishCourse.students')}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• {t('englishCourse.studentsDesc.difficulty')}</li>
                <li>• {t('englishCourse.studentsDesc.preparation')}</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">👩‍💻</span>
                {t('englishCourse.professionals')}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• {t('englishCourse.professionalsDesc.communication')}</li>
                <li>• {t('englishCourse.professionalsDesc.career')}</li>
                <li>• {t('englishCourse.professionalsDesc.preparation')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="mr-3">📚</span>
            {t('englishCourse.curriculum.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Level 1 Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">✅</span>
                <h3 className="text-lg font-bold text-gray-900">{t('englishCourse.curriculum.level1.title')}</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{t('englishCourse.curriculum.level1.description')}</p>
              <ul className="space-y-2">
                {t('englishCourse.curriculum.level1.items', { returnObjects: true }).map((item: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Level 2 Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">✅</span>
                <h3 className="text-lg font-bold text-gray-900">{t('englishCourse.curriculum.level2.title')}</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{t('englishCourse.curriculum.level2.description')}</p>
              <ul className="space-y-2">
                {t('englishCourse.curriculum.level2.items', { returnObjects: true }).map((item: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Level 3 Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">✅</span>
                <h3 className="text-lg font-bold text-gray-900">{t('englishCourse.curriculum.level3.title')}</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{t('englishCourse.curriculum.level3.description')}</p>
              <ul className="space-y-2">
                {t('englishCourse.curriculum.level3.items', { returnObjects: true }).map((item: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Level 4 Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">✅</span>
                <h3 className="text-lg font-bold text-gray-900">{t('englishCourse.curriculum.level4.title')}</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{t('englishCourse.curriculum.level4.description')}</p>
              <ul className="space-y-2">
                {t('englishCourse.curriculum.level4.items', { returnObjects: true }).map((item: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Supplementary Activities Card - Full Width */}
          <div className="mt-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🔧</span>
                <h3 className="text-lg font-bold text-gray-900">{t('englishCourse.curriculum.supplementary.title')}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {t('englishCourse.curriculum.supplementary.items', { returnObjects: true }).map((item: string, index: number) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Info */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('englishCourse.applicationTitle')}</h2>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="space-y-4 mb-6">
              <div className="text-gray-700 text-lg">
                📍 {t('englishCourse.startDate')}
              </div>
              <div className="text-gray-700 text-lg">
                ⏱ {t('englishCourse.classSchedule')}
              </div>
              <div className="text-gray-700 text-lg">
                🏢 {t('englishCourse.location')}
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={() => setShowApplicationForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                {t('englishCourse.apply')}
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{t('englishCourse.form.title')}</h3>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('englishCourse.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('englishCourse.form.phone')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('englishCourse.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="preferredCourse" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('englishCourse.form.preferredCourse')} *
                  </label>
                  <select
                    id="preferredCourse"
                    name="preferredCourse"
                    required
                    value={formData.preferredCourse}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={t('programs.zeroToHeroTitle')}>{t('programs.zeroToHeroTitle')}</option>
                    <option value={t('aiCourse.title')}>{t('aiCourse.title')}</option>
                    <option value={t('englishCourse.title')}>{t('englishCourse.title')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="additionalQuestions" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('englishCourse.form.additionalQuestions')}
                  </label>
                  <textarea
                    id="additionalQuestions"
                    name="additionalQuestions"
                    rows={3}
                    value={formData.additionalQuestions}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('englishCourse.form.placeholder')}
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    {t('englishCourse.form.cancel')}
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {t('englishCourse.form.submit')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnglishSpeakingCourseDetail;