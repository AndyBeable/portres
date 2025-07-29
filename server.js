const express = require('express');
const app = express();
const PORT = 5000;

const productRoutes = require('./src/routes/products');

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Hello! This is our first API endpoint' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 