import React from 'react';
import { Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - Two Columns */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Left Section - Logo and Description */}
          <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 mr-2" />
              <span className="text-xl sm:text-2xl font-bold">Funnel</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
              Funnel is an AI and coding education platform that helps students build real-world skills through hands-on projects and expert-led training.
            </p>
          </div>

          {/* Right Section - Contact Information */}
          <div className="space-y-3 text-center lg:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contact Information</h3>
            <div className="space-y-2 sm:space-y-3 text-gray-300">
              <div>
                <span className="font-medium text-white text-sm sm:text-base">📍 Address:</span>
                <p className="mt-1 text-sm sm:text-base">COBI Tower II Building, No. 2-4, Street No. 8, Tan My Ward, HCMC, Vietnam</p>
              </div>
              <div>
                <span className="font-medium text-white text-sm sm:text-base">✉️ Email:</span>
                <p className="mt-1 text-sm sm:text-base">
                  <a href="mailto:master@funneln.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    master@funneln.com
                  </a>
                </p>
              </div>
              <div>
                <span className="font-medium text-white text-sm sm:text-base">💬 Kakaotalk:</span>
                <p className="mt-1 text-sm sm:text-base">
                  <a href="http://pf.kakao.com/_qdxbrn" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    funneln
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Legal Text */}
        <div className="border-t border-gray-800 pt-4 sm:pt-6 text-center space-y-2 sm:space-y-4">
          <p className="text-sm sm:text-base text-gray-400">
            © 2025 Funnel. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400 text-sm">
            <span>Privacy Policy | Terms of Service | Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;