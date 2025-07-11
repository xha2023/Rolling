import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllpapersPage from './src/pages/AllpapersPage.jsx';
import HomePage from './src/pages/AllpapersPage.jsx';
import MakePersonalPage from './src/pages/MakePersonalPage.jsx';
import PersonalPage from './src/pages/PersonalPage.jsx';
import SendPaperPage from './src/pages/SendPaperPage.jsx';
import EditPage from './src/pages/EditPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<AllpapersPage />} />
        <Route path="post" element={<MakePersonalPage />} />
        <Route path="post{id}" element={<PersonalPage />} />
        <Route path="/post/{id}/message" element={<SendPaperPage />} />
        <Route path="/post{id}/edit" element={<EditPage />} />
      </Routes>
    </Router>
  );
}

export default App;
