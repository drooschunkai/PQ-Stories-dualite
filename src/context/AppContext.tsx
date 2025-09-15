import React, { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface AppContextType {
  favorites: string[];
  completed: string[];
  toggleFavorite: (prophetId: string) => void;
  markCompleted: (prophetId: string) => void;
  isFavorite: (prophetId: string) => boolean;
  isCompleted: (prophetId: string) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage<string[]>('prophet-favorites', []);
  const [completed, setCompleted] = useLocalStorage<string[]>('prophet-completed', []);

  const toggleFavorite = (prophetId: string) => {
    setFavorites(prev => 
      prev.includes(prophetId) 
        ? prev.filter(id => id !== prophetId)
        : [...prev, prophetId]
    );
  };

  const markCompleted = (prophetId: string) => {
    if (!completed.includes(prophetId)) {
      setCompleted(prev => [...prev, prophetId]);
    }
  };

  const isFavorite = (prophetId: string) => favorites.includes(prophetId);
  const isCompleted = (prophetId: string) => completed.includes(prophetId);

  const value = {
    favorites,
    completed,
    toggleFavorite,
    markCompleted,
    isFavorite,
    isCompleted,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
