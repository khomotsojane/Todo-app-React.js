import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RegistrationPage from './Pages/RegistrationPage';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage /> } />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
