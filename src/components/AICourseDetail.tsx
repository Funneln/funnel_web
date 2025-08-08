import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Users, Target, CheckCircle, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AICourseDetailProps {
  onBack: () => void;
}

const AICourseDetail: React.FC<AICourseDetailProps> = ({ onBack }) => {
  const { t } = useTranslation();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredCourse: t('aiCourse.title'),
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
    alert(t('aiCourse.form.successMessage'));
    setShowApplicationForm(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      preferredCourse: t('aiCourse.title'),
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
              🧠 {t('aiCourse.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('aiCourse.subtitle')}
            </p>
            <button
              onClick={() => setShowApplicationForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              {t('aiCourse.applyNow')}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Why Take This Course */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('aiCourse.whyTakeTitle')}</h2>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg border border-red-200">
              <span className="text-red-500 text-xl">❌</span>
              <p className="text-gray-800 font-medium">{t('aiCourse.whyTakeNegative')}</p>
            </div>
            
            <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
              <span className="text-green-500 text-xl">✅</span>
              <p className="text-gray-800 font-medium">{t('aiCourse.whyTakePositive')}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('aiCourse.whyStudentsChoose')}</h3>
            <ul className="space-y-3">
              {[
                t('aiCourse.reasons.chatgpt'),
                t('aiCourse.reasons.results'),
                t('aiCourse.reasons.portfolio'),
                t('aiCourse.reasons.beginner'),
                t('aiCourse.reasons.tools')
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('aiCourse.whatYouLearnTitle')}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">📚</span>
                {t('aiCourse.keyTopics')}
              </h3>
              <ul className="space-y-2">
                {[
                  t('aiCourse.topics.chatgpt'),
                  t('aiCourse.topics.api'),
                  t('aiCourse.topics.imageGen'),
                  t('aiCourse.topics.voiceVideo'),
                  t('aiCourse.topics.buildTool')
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
                {t('aiCourse.afterClass')}
              </h3>
              <ul className="space-y-2">
                {[
                  t('aiCourse.outcomes.proudSay'),
                  t('aiCourse.outcomes.complete'),
                  t('aiCourse.outcomes.portfolio'),
                  t('aiCourse.outcomes.automate')
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('aiCourse.courseStructureTitle')}</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-blue-600" />
                <div>
                  <span className="font-semibold">{t('aiCourse.duration')}:</span>
                  <span className="ml-2 text-gray-700">{t('aiCourse.weeks')}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-blue-600" />
                <div>
                  <span className="font-semibold">{t('aiCourse.frequency')}:</span>
                  <span className="ml-2 text-gray-700">{t('aiCourse.schedule')}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-blue-600" />
                <div>
                  <span className="font-semibold">{t('aiCourse.format')}:</span>
                  <span className="ml-2 text-gray-700">{t('aiCourse.formatDesc')}</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start space-x-3">
                <Target className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <span className="font-semibold">{t('aiCourse.mainProjects')}</span>
                  <ul className="mt-2 space-y-1 text-gray-700">
                    <li>• {t('aiCourse.projects.chatbot')}</li>
                    <li>• {t('aiCourse.projects.imageApp')}</li>
                    <li>• {t('aiCourse.projects.teamDemo')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('aiCourse.whoShouldJoinTitle')}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">👨‍🎓</span>
                {t('aiCourse.highSchoolStudents')}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• {t('aiCourse.highSchoolDesc.curious')}</li>
                <li>• {t('aiCourse.highSchoolDesc.portfolio')}</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">👩‍💻</span>
                {t('aiCourse.professionals')}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• {t('aiCourse.professionalsDesc.marketers')}</li>
                <li>• {t('aiCourse.professionalsDesc.automation')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="mr-3">📚</span>
            {t('aiCourse.curriculum.title')}
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">{t('aiCourse.curriculum.week')}</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">{t('aiCourse.curriculum.topic')}</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">{t('aiCourse.curriculum.details')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((weekNum) => (
                    <tr key={weekNum} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-blue-600">
                        {t(`aiCourse.curriculum.weeks.${weekNum}.week`)}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {t(`aiCourse.curriculum.weeks.${weekNum}.topic`)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {t(`aiCourse.curriculum.weeks.${weekNum}.details`)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Application Info */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('aiCourse.applicationTitle')}</h2>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="space-y-4 mb-6">
              <div className="text-gray-700 text-lg">
                📍 {t('aiCourse.startDate')}
              </div>
              <div className="text-gray-700 text-lg">
                ⏱ {t('aiCourse.classSchedule')}
              </div>
              <div className="text-gray-700 text-lg">
                🏢 {t('aiCourse.location')}
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={() => setShowApplicationForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                {t('aiCourse.apply')}
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
                <h3 className="text-2xl font-bold text-gray-900">{t('aiCourse.form.title')}</h3>
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
                    {t('aiCourse.form.name')} *
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
                    {t('aiCourse.form.phone')} *
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
                    {t('aiCourse.form.email')} *
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
                    {t('aiCourse.form.preferredCourse')} *
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
                    {t('aiCourse.form.additionalQuestions')}
                  </label>
                  <textarea
                    id="additionalQuestions"
                    name="additionalQuestions"
                    rows={3}
                    value={formData.additionalQuestions}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('aiCourse.form.placeholder')}
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    {t('aiCourse.form.cancel')}
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {t('aiCourse.form.submit')}
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

export default AICourseDetail;