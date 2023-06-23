import React from 'react';
import Routes from './components /routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './components /auth/authContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
