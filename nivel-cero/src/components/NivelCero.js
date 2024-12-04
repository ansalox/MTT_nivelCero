import React from 'react';
import Sidebar from './Sidebar';
import MarkdownViewer from './MarkdownViewer';

const NivelCero = ({ view, setView }) => {
  return (
    <div className="flex h-screen">
      <Sidebar setView={setView} />
      <div className="flex-1 bg-gray-100">
        <MarkdownViewer url={view} />
      </div>
    </div>
  );
};

export default NivelCero;
