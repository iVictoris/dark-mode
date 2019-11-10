import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';


export const useDarkMode = (key = 'dark-mode-active') => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(key, false);

  useEffect(() => {
    document.querySelector('body').classList = isDarkMode ? 'dark-mode' : ''
  }, [isDarkMode])

  return [isDarkMode, setIsDarkMode]
} 