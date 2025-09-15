import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, BookOpen, Heart } from 'lucide-react';
import { Prophet } from '../types';

interface StoryViewerProps {
  prophet: Prophet;
  onBack: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({ prophet, onBack }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showReflection, setShowReflection] = useState(false);

  const totalPages = prophet.story.content.length;

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setShowReflection(true);
    }
  };

  const prevPage = () => {
    if (showReflection) {
      setShowReflection(false);
    } else if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const colorClasses = {
    emerald: 'from-emerald-400 to-emerald-600',
    blue: 'from-blue-400 to-blue-600',
    amber: 'from-amber-400 to-amber-600',
    purple: 'from-purple-400 to-purple-600',
    red: 'from-red-400 to-red-600',
    green: 'from-green-400 to-green-600'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-white/50 px-6 py-4">
        <div className="max-w-md mx-auto flex items-center space-x-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center space-x-3 flex-1">
            <div className={`w-10 h-10 bg-gradient-to-br ${colorClasses[prophet.color as keyof typeof colorClasses]} rounded-full flex items-center justify-center text-lg text-white`}>
              {prophet.icon}
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-800">{prophet.name}</h1>
              <p className="text-sm text-gray-600 font-arabic">{prophet.arabicName}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <div className="max-w-md mx-auto px-6 py-6">
        <AnimatePresence mode="wait">
          {!showReflection ? (
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Story Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="text-gray-500" size={16} />
                    <span className="text-sm text-gray-500">
                      Page {currentPage + 1} of {totalPages}
                    </span>
                  </div>
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <Heart size={20} />
                  </button>
                </div>

                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{prophet.story.title}</h2>
                  <p className="text-gray-600 text-sm italic">{prophet.story.setting}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <p className="text-gray-800 leading-relaxed text-center">
                    {prophet.story.content[currentPage]}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                  <div
                    className={`bg-gradient-to-r ${colorClasses[prophet.color as keyof typeof colorClasses]} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
                  ></div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      currentPage === 0
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <ArrowLeft size={16} />
                    <span>Previous</span>
                  </button>

                  <button
                    onClick={nextPage}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${colorClasses[prophet.color as keyof typeof colorClasses]} text-white hover:shadow-lg transition-all`}
                  >
                    <span>{currentPage === totalPages - 1 ? 'Reflection' : 'Next'}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Main Lesson */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50">
                <div className="text-center mb-6">
                  <Heart className="mx-auto text-red-500 mb-4" size={48} />
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">What We Learned</h2>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <p className="text-gray-800 leading-relaxed">
                      {prophet.story.mainLesson}
                    </p>
                  </div>
                </div>
              </div>

              {/* Reflection Question */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center flex items-center justify-center space-x-2">
                  <span>🤔</span>
                  <span>Think About This</span>
                </h3>
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                  <p className="text-gray-800 text-center">
                    {prophet.story.reflectionQuestion}
                  </p>
                </div>
              </div>

              {/* Dua Section */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center flex items-center justify-center space-x-2">
                  <span>🤲</span>
                  <span>Let's Pray Together</span>
                </h3>
                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <div className="text-center space-y-3">
                    <p className="text-lg font-arabic text-gray-800 leading-relaxed">
                      {prophet.story.dua.arabic}
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      {prophet.story.dua.transliteration}
                    </p>
                    <p className="text-gray-800 text-sm">
                      {prophet.story.dua.english}
                    </p>
                  </div>
                </div>
              </div>

              {/* Back Button */}
              <div className="text-center">
                <button
                  onClick={prevPage}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r ${colorClasses[prophet.color as keyof typeof colorClasses]} text-white hover:shadow-lg transition-all mx-auto`}
                >
                  <ArrowLeft size={16} />
                  <span>Back to Story</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StoryViewer;
