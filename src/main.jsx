import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

//Page Component
import AllpapersPage from './pages/AllPapersPage.jsx';
import HomePage from './pages/HomePage.jsx';
import MakePersonalPage from './pages/MakePersonalPage.jsx';
import PersonalPage from './pages/PersonalPage.jsx';
import SendPaperPage from './pages/SendPaperPage.jsx';
import EditPage from './pages/EditPage.jsx';

import Theme from './styles/Theme.js';
import GlobalStyle from './styles/GlobalStyle.js';
import App from './App.jsx';

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
            <Route path="/post/:id/edit" element={<EditPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default Main;
