import React from 'react';
import Footer from './Footer';  // Importa el Footer

const Home = ({ setView }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#45237B] text-white">
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold">Bienvenido al nivel cero de MENTORTIC</h1>
        <button
          className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => setView('nivel-cero')}
        >
          Ir al Dashboard
        </button>
      </div>

      {/* Footer al final de la página */}
      <Footer />
    </div>
  );
};

export default Home;
