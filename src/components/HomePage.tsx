import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { prophets } from '../data/prophets';
import { useAppContext } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, LayoutGrid, Heart, CheckSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import StoryDisplay from './StoryDisplay';
import LanguageSelector from './LanguageSelector';

type Tab = 'today' | 'all' | 'favorites' | 'completed';

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('today');
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const { favorites, completed } = useAppContext();
  const { t } = useLanguage();

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return t('good_morning');
    if (hour < 17) return t('good_afternoon');
    return t('good_evening');
  };

  const todaysStory = prophets.find(p => p.id === 'ishaq') || prophets[3];
  const favoriteStories = prophets.filter(p => favorites.includes(p.id));
  const completedStories = prophets.filter(p => completed.includes(p.id));

  const handleNextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % prophets.length);
  };

  const handlePrevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + prophets.length) % prophets.length);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'today':
        return <StoryDisplay prophet={todaysStory} isToday={true} />;
      case 'all':
        return (
          <>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/50 mb-6 max-w-lg mx-auto">
              <div className="flex items-center justify-between">
                <button onClick={handlePrevStory} className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors p-2 rounded-lg hover:bg-gray-100">
                  <ChevronLeft size={20} />
                  <span className="text-sm font-medium">{t('previous')}</span>
                </button>
                <div className="text-center">
                  <p className="text-sm text-gray-500">{t('story_of')}</p>
                  <p className="text-lg font-semibold text-gray-800">{currentStoryIndex + 1} of {prophets.length}</p>
                </div>
                <button onClick={handleNextStory} className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors p-2 rounded-lg hover:bg-gray-100">
                  <span className="text-sm font-medium">{t('next')}</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <motion.div
              key={currentStoryIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <StoryDisplay prophet={prophets[currentStoryIndex]} isToday={false} />
            </motion.div>
          </>
        );
      case 'favorites':
      case 'completed':
        const storiesToList = activeTab === 'favorites' ? favoriteStories : completedStories;
        const emptyState = activeTab === 'favorites' 
          ? { icon: '💖', title: t('no_favorites'), message: t('tap_heart') }
          : { icon: '📖', title: t('start_journey'), message: t('completed_appear') };

        if (storiesToList.length === 0) {
          return (
            <div className="text-center py-12 max-w-lg mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50">
                <div className="text-6xl mb-4">{emptyState.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{emptyState.title}</h3>
                <p className="text-gray-600">{emptyState.message}</p>
              </div>
            </div>
          );
        }
        return (
          <div className="space-y-4 max-w-lg mx-auto">
            {storiesToList.map((prophet, index) => (
               <motion.div
                key={prophet.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <StoryDisplay prophet={prophet} isToday={false} isCompact={true} />
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  const tabs = [
    { id: 'today', icon: Calendar, label: t('today') },
    { id: 'all', icon: LayoutGrid, label: t('all_stories') },
    { id: 'favorites', icon: Heart, label: t('favorites'), count: favorites.length },
    { id: 'completed', icon: CheckSquare, label: t('completed'), count: completed.length },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 font-inter pb-20">
      <header className="px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md mx-auto"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1" />
            <div className="flex-1 text-center">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent mb-3">
                {t('prophet_stories')}
              </h1>
            </div>
            <div className="flex-1 flex justify-end">
              <LanguageSelector />
            </div>
          </div>
          
          <p className="text-gray-700 text-lg mb-6">
            {t('learn_messengers')}
          </p>
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-full px-6 py-3 shadow-lg inline-flex items-center space-x-2">
            <span className="text-white font-semibold text-lg">{getTimeBasedGreeting()}</span>
            <span className="text-white text-lg">🌻</span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/50 mt-6">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center justify-center space-x-2">
              <span>{t('assalamu_alaikum')}</span>
              <span>😊</span>
            </h2>
          </div>
        </motion.div>
      </header>

      <main className="px-4">
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-sm border border-white/50 mb-8">
          <div className="flex items-center justify-between space-x-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-teal-500 text-white shadow-lg shadow-teal-200'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <tab.icon size={16} />
                <span>{tab.label}</span>
                {tab.count !== undefined && tab.count > 0 && (
                  <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                    activeTab === tab.id ? 'bg-white text-teal-600' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="animate-fade-in">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
