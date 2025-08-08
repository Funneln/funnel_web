import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Users, Target, CheckCircle, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CourseDetailKoreanProps {
  onBack: () => void;
}

const CourseDetailKorean: React.FC<CourseDetailKoreanProps> = ({ onBack }) => {
  const { t } = useTranslation();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredCourse: '제로부터 시작하는 개발 클래스',
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
    alert('수강 신청이 완료되었습니다! 곧 연락드리겠습니다.');
    setShowApplicationForm(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      preferredCourse: '제로부터 시작하는 개발 클래스',
      additionalQuestions: ''
    });
  };

  return (
    <div className="min-h-screen bg-white" data-course-detail>
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              제로부터 시작하는 개발 클래스
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              코딩이 처음이어도 괜찮아요. 12주 후, 나만의 웹사이트가 완성됩니다.
            </p>
            <button
              onClick={() => setShowApplicationForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              지금 수강 신청하기
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Section 2: 왜 이 수업을 들어야 하나요? */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">왜 이 수업을 들어야 하나요?</h2>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg border border-red-200">
              <span className="text-red-500 text-xl">❌</span>
              <p className="text-gray-800 font-medium">유튜브 영상만 보며 독학하다가 포기한 적 있으신가요?</p>
            </div>
            
            <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
              <span className="text-green-500 text-xl">✅</span>
              <p className="text-gray-800 font-medium">Funnel은 완전 초보자도 이해할 수 있도록 설계된 실습 중심 개발 클래스입니다.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">많은 분들이 이런 이유로 이 수업을 선택합니다:</h3>
            <ul className="space-y-3">
              {[
                "코딩을 처음 배우는 데 어디서부터 시작해야 할지 몰라서",
                "진짜 웹사이트를 만들어보고 싶어서",
                "이력서나 포트폴리오에 넣을 수 있는 결과물이 필요해서",
                "학과나 업무에서 웹개발 기초가 필요해서",
                "기초부터 탄탄히 배우고 싶은 마음에"
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">{index + 1}.</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3: 무엇을 배우게 되나요? */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">무엇을 배우게 되나요?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">📚</span>
                배울 내용
              </h3>
              <ul className="space-y-2">
                {['HTML, CSS, JavaScript', '웹페이지 구조 & 디자인', '간단한 인터랙션 구현', '나만의 포트폴리오 사이트 제작'].map((topic, index) => (
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
                이 수업이 끝나면
              </h3>
              <ul className="space-y-2">
                {[
                  '"이 웹사이트 제가 만들었어요."라고 자신 있게 말할 수 있습니다.',
                  '내 이름이 적힌 포트폴리오 웹사이트가 완성됩니다.',
                  '실무/입시 어디든 활용 가능한 결과물이 생깁니다.',
                  '코딩이 어렵게만 느껴지지 않게 됩니다.'
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

        {/* Section 4: 수업 구성 및 커리큘럼 요약 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">수업 구성 & 커리큘럼 요약</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-blue-600" />
                <div>
                  <span className="font-semibold">기간:</span>
                  <span className="ml-2 text-gray-700">12주</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-blue-600" />
                <div>
                  <span className="font-semibold">횟수:</span>
                  <span className="ml-2 text-gray-700">주 2회 / 회당 90분</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-blue-600" />
                <div>
                  <span className="font-semibold">방식:</span>
                  <span className="ml-2 text-gray-700">오프라인 실습 중심 + 소규모 멘토링</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start space-x-3">
                <Target className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <span className="font-semibold">주요 프로젝트:</span>
                  <ul className="mt-2 space-y-1 text-gray-700">
                    <li>• 나만의 프로필 웹사이트 만들기</li>
                    <li>• 반응형 디자인 적용해보기</li>
                    <li>• 팀 프로젝트로 웹서비스 기획 및 구현</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: 누가 들으면 좋을까요? */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">누가 들으면 좋을까요?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">👨‍🎓</span>
                중고등학생:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 진로 탐색 중인 학생</li>
                <li>• 입시나 동아리 활동에서 포트폴리오가 필요한 학생</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">👩‍💻</span>
                직장인:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 개발 비전공자이지만 코딩에 관심 있는 분</li>
                <li>• 사이드 프로젝트나 웹페이지가 필요한 실무자</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: 수강 신청 */}
        {/* Curriculum Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="mr-3">📚</span>
            상세 커리큘럼
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">주차</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">주제</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">세부 내용</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-blue-600">1주차</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">웹이 뭐예요? & 개발환경 만들기</td>
                    <td className="px-6 py-4 text-sm text-gray-700">웹 구조, 브라우저, VS Code, GitHub</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-blue-600">2주차</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">HTML 기초 ①</td>
                    <td className="px-6 py-4 text-sm text-gray-700">제목, 단락, 이미지, 링크 만들기</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-blue-600">3주차</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">HTML 기초 ②</td>
                    <td className="px-6 py-4 text-sm text-gray-700">폼, 리스트, iframe 등</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-blue-600">4주차</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">CSS 기초 ①</td>
                    <td className="px-6 py-4 text-sm text-gray-700">색상, 폰트, 여백, 테두리 등 꾸미기</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-blue-600">5주차</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">CSS 기초 ②</td>
                    <td className="px-6 py-4 text-sm text-gray-700">레이아웃(박스 모델), 간단한 스타일링</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-blue-600">6주차</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">JavaScript 맛보기</td>
                    <td className="px-6 py-4 text-sm text-gray-700">버튼 클릭, 팝업 띄우기 등 인터랙션</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-blue-600">7주차</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">나만의 캐릭터 소개 페이지 만들기</td>
                    <td className="px-6 py-4 text-sm text-gray-700">HTML + CSS 활용 미니 프로젝트</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-blue-600">8주차</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">간단한 게임 만들기 ①</td>
                    <td className="px-6 py-4 text-sm text-gray-700">버튼 + 조건문을 이용한 로직 설계</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-blue-600">9주차</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">간단한 게임 만들기 ②</td>
                    <td className="px-6 py-4 text-sm text-gray-700">동작 완성 및 꾸미기</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-blue-600">10주차</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">포트폴리오 웹 기획</td>
                    <td className="px-6 py-4 text-sm text-gray-700">내가 만든 콘텐츠를 정리하는 방법</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-blue-600">11주차</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">포트폴리오 제작</td>
                    <td className="px-6 py-4 text-sm text-gray-700">자기소개 / 프로젝트 정리 웹페이지</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-blue-600">12주차</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">발표 & 공유</td>
                    <td className="px-6 py-4 text-sm text-gray-700">완성된 웹사이트 공유 + GitHub Pages 배포</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 6: 수강 신청 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">수강 신청</h2>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="space-y-4 mb-6">
              <div className="text-gray-700 text-lg">
                📍개강일: 2025년 9월 15일 (월요일)
              </div>
              <div className="text-gray-700 text-lg">
                ⏱ 수업 일정: 매주 2회 / 회당 90분 / 총 12주 과정
              </div>
              <div className="text-gray-700 text-lg">
                🏢강의장소: COBI TOWER2 11층
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={() => setShowApplicationForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                수강 신청하기
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
                <h3 className="text-2xl font-bold text-gray-900">수강 신청</h3>
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
                    이름 *
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
                    연락처 *
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
                    이메일 *
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
                    희망 수업 *
                  </label>
                  <select
                    id="preferredCourse"
                    name="preferredCourse"
                    required
                    value={formData.preferredCourse}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="제로부터 시작하는 개발 클래스">제로부터 시작하는 개발 클래스</option>
                    <option value="AI로 나만의 프로젝트 만들기">AI로 나만의 프로젝트 만들기</option>
                    <option value="영어로 말하는 게 쉬워지는 클래스">영어로 말하는 게 쉬워지는 클래스</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="additionalQuestions" className="block text-sm font-medium text-gray-700 mb-1">
                    기타 문의
                  </label>
                  <textarea
                    id="additionalQuestions"
                    name="additionalQuestions"
                    rows={3}
                    value={formData.additionalQuestions}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="궁금한 점이나 추가로 전달하고 싶은 내용이 있으시면 적어주세요..."
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    신청하기
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

export default CourseDetailKorean;