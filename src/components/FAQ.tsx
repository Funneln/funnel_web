import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: t('faq.beginners.question'),
      answer: t('faq.beginners.answer')
    },
    {
      question: t('faq.classes.question'),
      answer: t('faq.classes.answer')
    },
    {
      question: t('faq.tools.question'),
      answer: t('faq.tools.answer')
    },
    {
      question: t('faq.age.question'),
      answer: t('faq.age.answer')
    },
    {
      question: t('faq.language.question'),
      answer: t('faq.language.answer')
    },
    {
      question: t('faq.support.question'),
      answer: t('faq.support.answer')
    },
    {
      question: t('faq.payment.question'),
      answer: t('faq.payment.answer')
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6 border-t border-gray-100">
                  <div className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line pt-3 sm:pt-4">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;