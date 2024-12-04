import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4 text-center">
      <p className="text-sm">
        Desarrollado por{' '}
        <a
          href="https://www.youtube.com/@ansalox"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ansalox
        </a>{' '}
        y{' '}
        <a
          href="https://www.youtube.com/@lavalescript"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          @lavalescript
        </a>{' '}
        para MENTORTIC
      </p>
    </div>
  );
};

export default Footer;
