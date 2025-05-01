// src/App.js
import React from 'react';
import Dashboard from './components/Dashboard';
import './index.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        Distracted Driver Detection
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
