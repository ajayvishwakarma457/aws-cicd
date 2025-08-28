
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// In-memory product array
const products = [
	{ id: 1, name: 'Laptop', price: 1200 },
	{ id: 2, name: 'Phone', price: 800 },
	{ id: 3, name: 'Tablet', price: 600 }
];


app.get('/home', (req, res) => {
	res.send('Welcome to the Home page!');
});

app.get('/about', (req, res) => {
	res.send('About us: This is a simple Express app.');
});


// GET /product - return all products
app.get('/product', (req, res) => {
	res.json(products);
});

// POST /product - add a new product
app.post('/product', (req, res) => {
	const { name, price } = req.body;
	if (!name || typeof price !== 'number') {
		return res.status(400).json({ error: 'Name and price are required, price must be a number.' });
	}
	const newProduct = {
		id: products.length + 1,
		name,
		price
	};
	products.push(newProduct);
	res.status(201).json(newProduct);
});

app.get('/contact', (req, res) => {
	res.send('Contact us at contact@example.com');
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});

console.log('Ram...');




