import React from 'react';
import Sidebar from './Sidebar';
import MarkdownViewer from './MarkdownViewer';
import Footer from './Footer';

const NivelCero = ({ view, setView }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black"> {/* Fondo negro aplicado a toda la página */}
      {/* Navbar ha sido eliminado de aquí */}

      <div className="flex flex-grow"> {/* Flex container para Sidebar y contenido */}
        <Sidebar setView={setView} />
        
        <div className="flex-1 bg-black p-4"> {/* Fondo negro para el contenido */}
          <MarkdownViewer url={view} />
        </div>
      </div>

      <Footer /> {/* Footer al final de la página */}
    </div>
  );
};

export default NivelCero;
