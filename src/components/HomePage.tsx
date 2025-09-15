import React from 'react';
import { motion } from 'framer-motion';
import { Prophet } from '../types';
import { prophets } from '../data/prophets';

interface HomePageProps {
  onSelectProphet: (prophet: Prophet) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectProphet }) => {
  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning!';
    if (hour < 17) return 'Good Afternoon!';
    return 'Good Evening!';
  };

  const getGreetingIcon = () => {
    const hour = new Date().getHours();
    if (hour < 12) return '☀️';
    if (hour < 17) return '🌤️';
    return '🌙';
  };

  // Get today's story (Adam's story for demo)
  const todaysStory = prophets[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 pb-20">
      {/* Header */}
      <div className="px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md mx-auto"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent mb-3">
            Prophet Stories
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Learn about Allah's messengers through beautiful stories
          </p>
          
          {/* Greeting Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-full px-6 py-3 shadow-lg inline-flex items-center space-x-2">
              <span className="text-white text-lg">{getGreetingIcon()}</span>
              <span className="text-white font-semibold text-lg">{getTimeBasedGreeting()}</span>
              <span className="text-white text-lg">🌻</span>
            </div>
          </motion.div>

          {/* Welcome Message Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50 mb-8"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center justify-center space-x-2">
              <span>Assalamu Alaikum, little learner!</span>
              <span>😊</span>
            </h2>
            <p className="text-gray-600">Ready for today's amazing story?</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Section */}
      <div className="max-w-md mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-6"
        >
          {/* Story Navigation */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/50 mb-6">
            <div className="flex items-center justify-between">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm font-medium">Previous</span>
              </button>
              
              <div className="text-center">
                <p className="text-sm text-gray-500">Story</p>
                <p className="text-lg font-semibold text-gray-800">1 of 25</p>
              </div>
              
              <button 
                onClick={() => onSelectProphet(todaysStory)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <span className="text-sm font-medium">Next</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Today's Story Card */}
          <div 
            onClick={() => onSelectProphet(todaysStory)}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 cursor-pointer hover:shadow-md transition-all duration-200 overflow-hidden"
          >
            {/* Story Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 px-4 py-3">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold flex items-center space-x-2">
                  <span>📖</span>
                  <span>Today's Story</span>
                </h3>
                <div className="flex items-center space-x-2">
                  <button className="text-white/80 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="text-white/80 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="p-6">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-2xl text-white flex-shrink-0">
                  {todaysStory.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">{todaysStory.story.title}</h4>
                  <p className="text-gray-600 font-arabic">{todaysStory.arabicName}</p>
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Today, 9:00 AM</span>
              </div>

              {/* Story Preview */}
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-gray-800 leading-relaxed text-sm">
                    {todaysStory.story.content[0]}
                  </p>
                </div>
                <div className="text-center">
                  <button className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors">
                    → Continue Reading...
                  </button>
                </div>
              </div>

              {/* Story Sections */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="font-medium text-gray-700">Lesson Of Dravat</span>
                </div>
                <div className="text-sm text-gray-600 pl-4">
                  Allah taught Adam the names of everything - The beautiful world Allah created for his most beloved creation
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="font-medium text-gray-700">Think About This</span>
                </div>
                <div className="text-sm text-gray-600 pl-4">
                  What does it mean to have a beautiful heart, and how can we remember Allah throughout our day?
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="font-medium text-gray-700">Special Prayer (Dua)</span>
                </div>
                <div className="text-sm text-gray-600 pl-4">
                  <p className="font-arabic text-base mb-1">{todaysStory.story.dua.arabic}</p>
                  <p className="text-xs italic">{todaysStory.story.dua.transliteration}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Islamic Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mt-6 border border-white/50"
        >
          <div className="text-center">
            <p className="text-gray-700 text-sm mb-2 italic">
              "Reading stories teaches us good character through the good examples of the Prophets, and we learn patience and trust in God's supreme wisdom."
            </p>
            <p className="text-xs text-gray-500">Learn and Enjoy with the Stories of the Prophets in the Qur'an and their wisdom</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
