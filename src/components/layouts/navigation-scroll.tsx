import { ReactNode, useEffect } from 'react';

export const NavigationScroll: React.FC<{ children: ReactNode }> = ({ children }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);
  return children || null;
};
