import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Users, Target, CheckCircle, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CourseDetailProps {
  onBack: () => void;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ onBack }) => {
  const { t } = useTranslation();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredCourse: 'Zero to Hero Web Development Class',
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
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will contact you soon.');
    setShowApplicationForm(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      preferredCourse: 'Zero to Hero Web Development Class',
      additionalQuestions: ''
    });
  };

  return (
    <div className="min-h-screen bg-white" data-course-detail>
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Zero to Hero Web Development Class
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              No worries if you're new to coding. In just 12 weeks, you'll build your own website.
            </p>
            <button
              onClick={() => setShowApplicationForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors w-full sm:w-auto"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 space-y-10 sm:space-y-12 lg:space-y-16">
        {/* Section 2: Why take this course? */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Why Should You Take This Course?</h2>
          
          <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            <div className="flex items-start space-x-3 p-3 sm:p-4 bg-red-50 rounded-lg border border-red-200">
              <span className="text-red-500 text-xl">❌</span>
              <p className="text-sm sm:text-base text-gray-800 font-medium">Have you ever given up after watching YouTube tutorials alone?</p>
            </div>
            
            <div className="flex items-start space-x-3 p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200">
              <span className="text-green-500 text-xl">✅</span>
              <p className="text-sm sm:text-base text-gray-800 font-medium">Funnel offers a hands-on class designed for complete beginners.</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Many students choose this course because:</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "They don't know where to start when learning coding.",
                "They want to build a real website.",
                "They need portfolio results for job or college applications.",
                "They need web development basics for school or work.",
                "They want to learn from the ground up with a clear path."
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">{index + 1}.</span>
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3: What will you learn? */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">What Will You Learn?</h2>
          
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">📚</span>
                Topics Covered
              </h3>
              <ul className="space-y-2">
                {['HTML, CSS, JavaScript', 'Web structure & design', 'Basic interactivity', 'Personal portfolio website development'].map((topic, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">✨</span>
                By the end of the class, you will:
              </h3>
              <ul className="space-y-2">
                {[
                  'Confidently say, "I built this website myself."',
                  'Have a completed portfolio site with your name on it.',
                  'Own a real result you can use for college or job applications.',
                  'Feel like coding is no longer intimidating.'
                ].map((outcome, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Course Structure */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Course Structure & Summary</h2>
          
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <span className="text-sm sm:text-base font-semibold">Duration:</span>
                  <span className="ml-2 text-sm sm:text-base text-gray-700">12 weeks</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <span className="text-sm sm:text-base font-semibold">Frequency:</span>
                  <span className="ml-2 text-sm sm:text-base text-gray-700">2 sessions per week / 90 minutes per session</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <span className="text-sm sm:text-base font-semibold">Format:</span>
                  <span className="ml-2 text-sm sm:text-base text-gray-700">In-person, hands-on learning with small group mentoring</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start space-x-3">
                <Target className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-sm sm:text-base font-semibold">Projects:</span>
                  <ul className="mt-2 space-y-1 text-sm sm:text-base text-gray-700">
                    <li>• Build your own profile website</li>
                    <li>• Apply responsive design techniques</li>
                    <li>• Plan and build a team project web service</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Who is this for? */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Who Should Join?</h2>
          
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">👨‍🎓</span>
                For High School Students:
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li>• Exploring career paths</li>
                <li>• Need a portfolio for school clubs or college</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">👩‍💻</span>
                For Professionals:
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li>• Non-CS background but interested in coding</li>
                <li>• Need a webpage or project for work or side hustle</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Enrollment */}
        {/* Curriculum Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center">
            <span className="mr-3">📚</span>
            상세 커리큘럼
          </h2>
          
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900 border-b border-gray-200 min-w-[80px]">Week</th>
                    <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900 border-b border-gray-200 min-w-[200px]">Topic</th>
                    <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900 border-b border-gray-200 min-w-[250px]">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-blue-600">Week 1</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">What is the Web? & Setting Up Dev Environment</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">Web structure, browsers, VS Code, GitHub</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-blue-600">Week 2</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">HTML Basics ①</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">Creating headings, paragraphs, images, links</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-blue-600">Week 3</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">HTML Basics ②</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">Forms, lists, iframes, etc.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-blue-600">Week 4</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">CSS Basics ①</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">Styling with colors, fonts, margins, borders</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-blue-600">Week 5</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">CSS Basics ②</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">Layout (box model), simple styling</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-blue-600">Week 6</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">Intro to JavaScript</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">Button click, popup interaction</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-blue-600">Week 7</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">My Character Intro Page</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">Mini project using HTML + CSS</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-blue-600">Week 8</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">Create a Simple Game ①</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">Logic with buttons and conditions</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-blue-600">Week 9</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">Create a Simple Game ②</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">Finalizing actions and styling</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-blue-600">Week 10</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">Planning Your Portfolio Website</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">Organizing your created content</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-blue-600">Week 11</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">Portfolio Website Creation</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">Self-introduction / Project summary webpage</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-blue-600">Week 12</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">Presentation & Sharing</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">Showcase website + Deploy via GitHub Pages</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">How to Apply</h2>
          
          <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="flex items-center space-x-3">
                <Target className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <span className="text-sm sm:text-base font-semibold">Max Class Size:</span>
                  <span className="ml-2 text-sm sm:text-base text-gray-700">15 students (Small group focus)</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <span className="text-sm sm:text-base font-semibold">Start Date:</span>
                  <span className="ml-2 text-sm sm:text-base text-gray-700">September 11 (Wednesday)</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={() => setShowApplicationForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors w-full sm:w-auto"
              >
                Apply Now
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto mx-4">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Apply Now</h3>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                  />
                </div>

                <div>
                  <label htmlFor="preferredCourse" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    Preferred Course *
                  </label>
                  <select
                    id="preferredCourse"
                    name="preferredCourse"
                    required
                    value={formData.preferredCourse}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                  >
                    <option value="Zero to Hero Web Development Class">Zero to Hero Web Development Class</option>
                    <option value="Create Your Own AI Projects">Create Your Own AI Projects</option>
                    <option value="English Speaking Made Easy Class">English Speaking Made Easy Class</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="additionalQuestions" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    Additional Questions
                  </label>
                  <textarea
                    id="additionalQuestions"
                    name="additionalQuestions"
                    rows={3}
                    value={formData.additionalQuestions}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base resize-none"
                    placeholder="Any questions or additional information you'd like to share..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-3 sm:pt-4">
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="flex-1 px-4 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-base font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 sm:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-base font-medium"
                  >
                    Submit Application
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

export default CourseDetail;