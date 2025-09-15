import React from 'react';
import { motion } from 'framer-motion';
import { Prophet } from '../types';
import { prophets } from '../data/prophets';

interface AllStoriesProps {
  onSelectProphet: (prophet: Prophet) => void;
}

const AllStories: React.FC<AllStoriesProps> = ({ onSelectProphet }) => {
  const colorClasses = {
    emerald: 'from-emerald-400 to-emerald-600',
    blue: 'from-blue-400 to-blue-600',
    amber: 'from-amber-400 to-amber-600',
    purple: 'from-purple-400 to-purple-600',
    red: 'from-red-400 to-red-600',
    green: 'from-green-400 to-green-600'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 pb-20">
      {/* Header */}
      <div className="px-6 py-8">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent mb-3">
            Prophet Stories
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Learn about Allah's messengers through beautiful stories
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6">
        <div className="space-y-4">
          {prophets.map((prophet, index) => (
            <motion.div
              key={prophet.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => onSelectProphet(prophet)}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/50 cursor-pointer hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[prophet.color as keyof typeof colorClasses]} rounded-full flex items-center justify-center text-xl text-white font-semibold`}>
                  {prophet.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{prophet.name}</h3>
                  <p className="text-gray-600 font-arabic text-sm">{prophet.arabicName}</p>
                  <p className="text-gray-500 text-xs">Prophet #{prophet.order}</p>
                </div>
                <div className="text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-gray-600 text-sm">{prophet.story.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllStories;
