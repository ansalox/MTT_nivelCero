import React from 'react';

const Home = ({ setView }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold">Bienvenido al Dashboard Nivel Cero</h1>
      <button
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => setView('nivel-cero')}
      >
        Ir al Dashboard
      </button>
    </div>
  );
};

export default Home;
