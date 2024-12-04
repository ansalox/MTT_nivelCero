import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const MarkdownViewer = ({ url }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  // Función para copiar al portapapeles
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('¡Código copiado al portapapeles!');
      })
      .catch((err) => {
        console.error('Error al copiar al portapapeles: ', err);
      });
  };

  useEffect(() => {
    if (url) {
      fetch(`${process.env.PUBLIC_URL}/${url}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error al cargar el archivo: ${response.status}`);
          }
          return response.text();
        })
        .then((data) => setContent(data))
        .catch((err) => setError(err.message));
    }
  }, [url]);

  return (
    <div className="p-4 bg-black text-gray-100 prose prose-sm sm:prose lg:prose-lg xl:prose-xl"> {/* Más blanco con text-gray-50 */}
      {error ? (
        <div className="text-red-500">Error: {error}</div>
      ) : (
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <div className="relative">
                  {/* Botón de copiar */}
                  <button
                    onClick={() => copyToClipboard(children)}
                    className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 text-sm rounded hover:bg-gray-600"
                  >
                    Copiar
                  </button>
                  {/* Bloque de código resaltado */}
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={materialLight}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                </div>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      )}
    </div>
  );
};

export default MarkdownViewer;
