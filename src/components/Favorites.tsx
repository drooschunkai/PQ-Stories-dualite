import React from 'react';
import { motion } from 'framer-motion';
import { Prophet } from '../types';

interface FavoritesProps {
  onSelectProphet: (prophet: Prophet) => void;
}

const Favorites: React.FC<FavoritesProps> = () => {
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
            <div className="text-6xl mb-4">💖</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No favorites yet!</h3>
            <p className="text-gray-600 mb-6">
              Start reading stories and tap the heart icon to save your favorites here.
            </p>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100">
              <p className="text-sm text-gray-700">
                💡 <strong>Tip:</strong> Your favorite stories will appear here so you can easily find them later!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Favorites;
