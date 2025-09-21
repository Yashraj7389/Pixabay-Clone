import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Images from './components/Images';
import { useContext } from 'react';
import PixabayContext from './context/PixabayContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(PixabayContext);
  return user ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Images />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<div className="text-center mt-5 text-primary">Please login to continue...</div>} />
      </Routes>
    </Router>
  );
};

export default App;
