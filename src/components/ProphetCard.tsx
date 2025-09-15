import React from 'react';
import { motion } from 'framer-motion';
import { Prophet } from '../types';

interface ProphetCardProps {
  prophet: Prophet;
  onClick: () => void;
  index: number;
}

const ProphetCard: React.FC<ProphetCardProps> = ({ prophet, onClick, index }) => {
  const colorClasses = {
    emerald: 'from-emerald-400 to-emerald-600 shadow-emerald-200',
    blue: 'from-blue-400 to-blue-600 shadow-blue-200',
    amber: 'from-amber-400 to-amber-600 shadow-amber-200',
    purple: 'from-purple-400 to-purple-600 shadow-purple-200',
    red: 'from-red-400 to-red-600 shadow-red-200',
    green: 'from-green-400 to-green-600 shadow-green-200'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`cursor-pointer rounded-2xl bg-gradient-to-br ${colorClasses[prophet.color as keyof typeof colorClasses]} p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex items-center space-x-4">
        <div className="text-4xl">{prophet.icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{prophet.name}</h3>
          <p className="text-sm opacity-90 font-arabic">{prophet.arabicName}</p>
          <p className="text-xs opacity-75 mt-1">Prophet #{prophet.order}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm opacity-90 line-clamp-2">{prophet.story.title}</p>
      </div>
    </motion.div>
  );
};

export default ProphetCard;
