const express = require('express');
const app = express();
const path = require('path');

// Configurar el middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir el archivo bd.json
app.get('/bd.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'bd.json'));
});

// Ruta principal
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  

// Puerto de escucha
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});