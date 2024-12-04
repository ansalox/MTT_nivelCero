import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NivelCero from './components/NivelCero';

const App = () => {
  const [view, setView] = useState('home');
  const [markdownUrl, setMarkdownUrl] = useState('');

  const renderView = () => {
    switch (view) {
      case 'home':
        return <Home setView={setView} />;
      case 'nivel-cero':
        return <NivelCero view={markdownUrl} setView={(url) => setMarkdownUrl(url)} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1">{renderView()}</div>
    </div>
  );
};

export default App;
