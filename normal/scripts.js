// Verifica que marked se haya cargado correctamente
if (typeof marked === "undefined") {
  console.error("Error: la librería marked no se ha cargado correctamente.");
} else {
  // Handle navigation and content loading
  document.getElementById('go-to-dashboard-btn').addEventListener('click', () => {
    document.getElementById('home').classList.add('d-none');
    document.getElementById('nivel-cero').classList.remove('d-none');
    loadMarkdownContent('readmes/Guide_VsCode.md');  // Carga el contenido de un archivo markdown
  });

  // Change content based on sidebar clicks
  document.getElementById('desarrollo-web-link').addEventListener('click', () => {
    loadMarkdownContent('readmes/Guide_VsCode.md');
  });
  document.getElementById('git-github-link').addEventListener('click', () => {
    loadMarkdownContent('readmes/Guide_GIT_Install_ORD.md');
  });

  // Cargar contenido Markdown
  function loadMarkdownContent(filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(text => {
        // Usa `marked` para convertir Markdown a HTML
        document.getElementById('markdown-content').innerHTML = marked(text);
        addCopyButtons();  // Agrega botones de copiar después de cargar el contenido markdown
      });
  }

  // Agregar botones "Copiar" a cada bloque de código
  function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
      const button = document.createElement('button');
      button.innerHTML = 'Copiar';
      button.classList.add('copy-btn');
      
      // Insertar el botón antes del bloque de código
      block.parentNode.insertBefore(button, block);

      // Copiar el código al portapapeles cuando se haga clic en el botón
      button.addEventListener('click', () => {
        const codeText = block.textContent || block.innerText;
        navigator.clipboard.writeText(codeText)
          .then(() => alert('¡Código copiado al portapapeles!'))
          .catch(err => console.error('Error al copiar al portapapeles:', err));
      });
    });
  }
}
