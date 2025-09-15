import React from 'react';
import { motion } from 'framer-motion';
import { Prophet } from '../types';

interface CompletedProps {
  onSelectProphet: (prophet: Prophet) => void;
}

const Completed: React.FC<CompletedProps> = () => {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50">
            <div className="text-6xl mb-4">📖</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Start your journey!</h3>
            <p className="text-gray-600 mb-6">
              Complete your first story to see your progress here.
            </p>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    ✓
                  </div>
                  <p className="text-sm text-gray-700">Read the complete story</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    ✓
                  </div>
                  <p className="text-sm text-gray-700">Answer the reflection question</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    ✓
                  </div>
                  <p className="text-sm text-gray-700">Learn the dua (prayer)</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Completed;
