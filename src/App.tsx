import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import WhyChoose from './components/WhyChoose';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import KakaoTalkChat from './components/KakaoTalkChat';
import CourseDetail from './components/CourseDetail';
import CourseDetailKorean from './components/CourseDetailKorean';
import AICourseDetail from './components/AICourseDetail';
import EnglishSpeakingCourseDetail from './components/EnglishSpeakingCourseDetail';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourse(courseId);
  };

  const handleBackToPrograms = () => {
    setSelectedCourse(null);
  };

  if (selectedCourse === 'ai-projects') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <AICourseDetail onBack={handleBackToPrograms} />
        <KakaoTalkChat />
      </div>
    );
  }

  if (selectedCourse === 'english-speaking') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <EnglishSpeakingCourseDetail onBack={handleBackToPrograms} />
        <KakaoTalkChat />
      </div>
    );
  }

  if (selectedCourse === 'zero-to-hero') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        {i18n.language === 'ko' ? (
          <CourseDetailKorean onBack={handleBackToPrograms} />
        ) : (
          <CourseDetail onBack={handleBackToPrograms} />
        )}
        <KakaoTalkChat />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyChoose />
      <Programs onCourseSelect={handleCourseSelect} />
      <Portfolio />
      <FAQ />
      <Footer />
      <KakaoTalkChat />
    </div>
  );
}

export default App;