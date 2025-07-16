import React, { useState, useEffect } from 'react';
import { AppContext } from './AppContext';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 767);
      setIsTablet(width >= 768 && width <= 1199);
      setIsDesktop(width >= 1200);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const contextValue = {
    isHovered,
    setIsHovered,
    isDesktop,
    isTablet,
    isMobile,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </AppContext.Provider>
  );
}

export default App;
