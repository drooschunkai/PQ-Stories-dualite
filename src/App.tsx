import React, { useState } from 'react';
import HomePage from './components/HomePage';
import StoryViewer from './components/StoryViewer';
import AllStories from './components/AllStories';
import Favorites from './components/Favorites';
import Completed from './components/Completed';
import { Prophet } from './types';

type Tab = 'today' | 'all' | 'favorites' | 'completed';

function App() {
  const [selectedProphet, setSelectedProphet] = useState<Prophet | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('today');

  const handleSelectProphet = (prophet: Prophet) => {
    setSelectedProphet(prophet);
  };

  const handleBackToHome = () => {
    setSelectedProphet(null);
  };

  const renderContent = () => {
    if (selectedProphet) {
      return <StoryViewer prophet={selectedProphet} onBack={handleBackToHome} />;
    }

    switch (activeTab) {
      case 'today':
        return <HomePage onSelectProphet={handleSelectProphet} />;
      case 'all':
        return <AllStories onSelectProphet={handleSelectProphet} />;
      case 'favorites':
        return <Favorites onSelectProphet={handleSelectProphet} />;
      case 'completed':
        return <Completed onSelectProphet={handleSelectProphet} />;
      default:
        return <HomePage onSelectProphet={handleSelectProphet} />;
    }
  };

  return (
    <div className="font-inter bg-gradient-to-b from-blue-50 to-purple-50 min-h-screen">
      {renderContent()}
      
      {/* Bottom Navigation - Only show when not viewing a story */}
      {!selectedProphet && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-white/50 px-4 py-3">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between space-x-1">
              <button
                onClick={() => setActiveTab('today')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeTab === 'today'
                    ? 'bg-gray-100 text-gray-800'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <span>📅</span>
                <span>Today</span>
              </button>
              
              <button
                onClick={() => setActiveTab('all')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeTab === 'all'
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-200'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <span>🏠</span>
                <span>All Stories</span>
              </button>
              
              <button
                onClick={() => setActiveTab('favorites')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeTab === 'favorites'
                    ? 'bg-gray-100 text-gray-800'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <span>💖</span>
                <span>Favorites</span>
              </button>
              
              <button
                onClick={() => setActiveTab('completed')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeTab === 'completed'
                    ? 'bg-gray-100 text-gray-800'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <span>✅</span>
                <span>Completed</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
