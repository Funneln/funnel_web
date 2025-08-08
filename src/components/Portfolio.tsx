import React from 'react';
import { useTranslation } from 'react-i18next';
import LazyImage from './LazyImage';

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 'faceEmotionDetector',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      category: 'Computer Vision'
    },
    {
      id: 'personalChatbot',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
      category: 'Natural Language Processing'
    },
    {
      id: 'aiArtGallery',
      image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg',
      category: 'Generative AI'
    },
    {
      id: 'digitRecognizer',
      image: 'https://images.pexels.com/photos/6424586/pexels-photo-6424586.jpeg',
      category: 'Machine Learning'
    },
    {
      id: 'resumeAnalyzer',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
      category: 'Text Analysis'
    },
    {
      id: 'studyScheduler',
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg',
      category: 'Productivity AI'
    },
    {
      id: 'voiceCommandApp',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg',
      category: 'Speech Recognition'
    },
    {
      id: 'comicGenerator',
      image: 'https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg',
      category: 'Creative AI'
    },
    {
      id: 'sentimentClassifier',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg',
      category: 'Text Analysis'
    },
    {
      id: 'objectDetector',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
      category: 'Computer Vision'
    },
    {
      id: 'movieRecommender',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
      category: 'Recommendation Systems'
    },
    {
      id: 'newsSummarizer',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg',
      category: 'Natural Language Processing'
    },
    {
      id: 'captionGenerator',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      category: 'Computer Vision'
    },
    {
      id: 'musicRecommender',
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg',
      category: 'Recommendation Systems'
    },
    {
      id: 'fakeNewsClassifier',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg',
      category: 'Text Classification'
    },
    {
      id: 'travelPlanner',
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg',
      category: 'Planning AI'
    },
    {
      id: 'weatherForecaster',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      category: 'Predictive Analytics'
    },
    {
      id: 'memeGenerator',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg',
      category: 'Creative AI'
    },
    {
      id: 'languageTranslator',
      image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg',
      category: 'Natural Language Processing'
    },
    {
      id: 'financeTracker',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg',
      category: 'Financial AI'
    },
    {
      id: 'flashcardGenerator',
      image: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg',
      category: 'Educational AI'
    },
    {
      id: 'imageColorizer',
      image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg',
      category: 'Image Processing'
    },
    {
      id: 'logoMaker',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      category: 'Design AI'
    },
    {
      id: 'ideaGenerator',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      category: 'Business AI'
    },
    {
      id: 'codingAssistant',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      category: 'Developer Tools'
    },
    {
      id: 'storyGenerator',
      image: 'https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg',
      category: 'Creative AI'
    },
    {
      id: 'journalAnalyzer',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg',
      category: 'Personal Analytics'
    },
    {
      id: 'speechToText',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg',
      category: 'Speech Recognition'
    },
    {
      id: 'qrGenerator',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg',
      category: 'Utility AI'
    },
    {
      id: 'dietPlanner',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      category: 'Health AI'
    }
  ];

  // Split projects into two rows
  const firstRowProjects = projects.slice(0, 15);
  const secondRowProjects = projects.slice(15, 30);

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:scale-105 mx-3 sm:mx-4">
      <div className="aspect-video overflow-hidden">
        <LazyImage
          src={project.image}
          alt={t(`portfolio.projects.${project.id}.title`)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4 sm:p-6">
        <div className="text-xs text-blue-600 font-medium mb-2 uppercase tracking-wide">
          {project.category}
        </div>
        <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg leading-tight">
          {t(`portfolio.projects.${project.id}.title`)}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">
          {t(`portfolio.projects.${project.id}.description`)}
        </p>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 lg:mb-16">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('portfolio.subtitle')}
          </p>
        </div>
      </div>

      {/* First Row - Scrolling Left */}
      <div className="relative mb-6 sm:mb-8">
        <div className="flex animate-scroll-left hover:pause-animation">
          {/* Duplicate projects for seamless loop */}
          {[...firstRowProjects, ...firstRowProjects].map((project, index) => (
            <ProjectCard key={`${project.id}-${index}`} project={project} />
          ))}
        </div>
      </div>

      {/* Second Row - Scrolling Right */}
      <div className="relative">
        <div className="flex animate-scroll-right hover:pause-animation">
          {/* Duplicate projects for seamless loop */}
          {[...secondRowProjects, ...secondRowProjects].map((project, index) => (
            <ProjectCard key={`${project.id}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;