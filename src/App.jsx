import React, { useState, useEffect } from 'react';
import { AppContext } from './AppContext';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // 카카오 SDK 초기화 - 간단한 방식
  useEffect(() => {
    const initKakao = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        console.log('카카오 초기화 시작');
        window.Kakao.init(import.meta.env.VITE_KAKAO_API_KEY);
        console.log('카카오 초기화 완료:', window.Kakao.isInitialized());
      }
    };

    // 1초 후 실행
    setTimeout(initKakao, 1000);
  }, []);

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
