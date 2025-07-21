import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/theme.js';

//컴포넌트 테스트 버튼 추가했습니다.
import Test from './components/subheader/text.jsx';

//Page Component
import AllpapersPage from './pages/AllPapersPage.jsx';
import HomePage from './pages/HomePage.jsx';
import MakePersonalPage from './pages/MakePersonalPage.jsx';
import PersonalPage from './pages/PersonalPage.jsx';
import SendPaperPage from './pages/SendPaperPage.jsx';
import GlobalStyle from './styles/GlobalStyle.js';
import App from './App.jsx';

//Api test
import './api/test-console.js';

function Main() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/list" element={<AllpapersPage />} />
            <Route path="post" element={<MakePersonalPage />} />
            <Route path="post/:id" element={<PersonalPage />} />
            <Route path="/post/:id/message" element={<SendPaperPage />} />
            <Route path="/post/:id/edit" element={<PersonalPage />} />
            {/* 컴포넌트 테스트 파일 추가했습니다 */}
            <Route path="/test-topbar" element={<Test />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default Main;
