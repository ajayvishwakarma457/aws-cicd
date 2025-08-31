
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json()); // For parsing application/json

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/home', (req, res) => {
  res.send('Welcome to the Home page!');
});

app.get('/about', (req, res) => {
  res.send('About us page.');
});

app.get('/products', (req, res) => {
  res.json({ products: ['Product 1', 'Product 2', 'Product 3'] });
});


app.get('/service', (req, res) => {
  res.send('Our services include web development, cloud solutions, and more.');
});

app.get('/gallery', (req, res) => {
  res.send('Contact us at gallery');
});

// app.get('/contact', (req, res) => {
//   res.send('Contact us at contact@example.com');
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});





