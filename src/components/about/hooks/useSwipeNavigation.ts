
import { useState } from 'react';
import { CodeSnippet } from '../types/codeSnippet';

interface UseSwipeNavigationProps {
  snippets: CodeSnippet[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  minSwipeDistance?: number;
}

export const useSwipeNavigation = ({ 
  snippets, 
  activeTab, 
  setActiveTab, 
  minSwipeDistance = 50 
}: UseSwipeNavigationProps) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Get index of current active tab
  const getCurrentTabIndex = () => {
    return snippets.findIndex(snippet => snippet.language === activeTab);
  };
  
  // Navigate to next or previous tab
  const navigateTab = (direction: 'next' | 'prev') => {
    const currentIndex = getCurrentTabIndex();
    const totalTabs = snippets.length;
    
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % totalTabs;
      setActiveTab(snippets[nextIndex].language);
    } else {
      const prevIndex = (currentIndex - 1 + totalTabs) % totalTabs;
      setActiveTab(snippets[prevIndex].language);
    }
  };
  
  // Touch event handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      navigateTab('next');
    } else if (isRightSwipe) {
      navigateTab('prev');
    }
  };
  
  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
};
