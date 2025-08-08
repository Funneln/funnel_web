import React from 'react';
import { MessageCircle } from 'lucide-react';

const KakaoTalkChat = () => {
  const handleChatClick = () => {
    window.open('http://pf.kakao.com/_qdxbrn/chat', '_blank');
  };

  return (
    <button
      onClick={handleChatClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-2 bg-yellow-400 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-bounce-slow"
      style={{ backgroundColor: '#FEE500' }}
      aria-label="Chat with us on KakaoTalk"
    >
      <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
    </button>
  );
};

export default KakaoTalkChat;