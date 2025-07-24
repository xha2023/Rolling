import React, { useState, useEffect } from 'react';
import { AppContext } from './AppContext';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

    // 카카오 SDK 초기화
  useEffect(() => {
    const initKakao = () => {
      console.log('=== 카카오 초기화 시작 ===');
      console.log('window.Kakao 존재:', !!window.Kakao);
      
      if (window.Kakao) {
        const kakaoApiKey = import.meta.env.VITE_KAKAO_API_KEY;
        console.log('카카오 API 키:', kakaoApiKey);
        
        if (kakaoApiKey) {
          if (!window.Kakao.isInitialized()) {
            window.Kakao.init(kakaoApiKey);
            console.log('✅ 카카오 SDK 초기화 완료');
          } else {
            console.log('✅ 카카오 SDK 이미 초기화됨');
          }
          console.log('카카오 초기화 상태:', window.Kakao.isInitialized());
        } else {
          console.error('❌ 카카오 API 키가 없습니다');
        }
      } else {
        console.error('❌ window.Kakao 객체가 없습니다');
        // 재시도
        setTimeout(initKakao, 500);
      }
    };

    // DOM이 로드된 후 카카오 초기화
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initKakao);
    } else {
      // 이미 로드된 경우 바로 실행
      setTimeout(initKakao, 100);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', initKakao);
    };
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
