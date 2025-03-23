const express = require('express');
const path = require('path');
const app = express();

// Définir un port pour ton serveur local
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques (HTML, CSS, JS) depuis le dossier public
app.use(express.static(path.join(__dirname, 'assets')));

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur http://localhost:${PORT}`);
});