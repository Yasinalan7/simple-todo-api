const express = require('express');
const todoRoutes = require('./src/routes/todo.routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', todoRoutes);
app.get('/', (req, res) => {
  res.send('Merhaba! To-Do API çalışıyor.');
});


app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor...`);
});