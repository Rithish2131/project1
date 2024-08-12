import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Authentication from './components/Authentication';
import Admin from './components/Admin';
import Faculty from './components/Faculty';
import Student from './components/Student';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </Router>
  );
};

export default App;
