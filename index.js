require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./src/routes/todo.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', todoRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB bağlantısı başarılı'))
  .catch((err) => console.error('MongoDB bağlantı hatası:', err));

app.get('/', (req, res) => {
  res.send('Merhaba! To-Do API çalışıyor.');
});

app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor...`);
});
