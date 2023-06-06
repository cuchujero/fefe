const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/index.html'));  // Permite enviar un archivo HTML
});

app.get('/personajes', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/personajes.html'));  // Permite enviar un archivo HTML
});


app.listen(3002, () => {
    console.log("Servidor corriendo");
});





