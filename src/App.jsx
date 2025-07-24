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
    // 카카오 SDK 초기화 - 로드 완료 대기 방식
    const initKakao = () => {
      console.log('카카오 SDK 초기화 시도...');
      console.log('window.Kakao:', window.Kakao);
      console.log('window.kakaoSDKLoaded:', window.kakaoSDKLoaded);
      
      if (window.Kakao) {
        if (!window.Kakao.isInitialized()) {
          const kakaoApiKey = import.meta.env.VITE_KAKAO_API_KEY;
          console.log('API 키:', kakaoApiKey);
          
          if (kakaoApiKey) {
            window.Kakao.init(kakaoApiKey);
            console.log('✅ 카카오 SDK 초기화 완료!');
            console.log('초기화 상태:', window.Kakao.isInitialized());
          } else {
            console.error('❌ 카카오 API 키가 없습니다.');
          }
        } else {
          console.log('✅ 카카오 SDK 이미 초기화됨');
        }
      } else {
        console.error('❌ window.Kakao 객체가 없습니다. 재시도 중...');
        // 1초 후 재시도
        setTimeout(initKakao, 1000);
      }
    };

    // 카카오 SDK 로드 완료 확인 후 초기화
    const checkKakaoAndInit = () => {
      if (window.kakaoSDKLoaded || window.Kakao) {
        initKakao();
      } else {
        setTimeout(checkKakaoAndInit, 500);
      }
    };

    checkKakaoAndInit();

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
