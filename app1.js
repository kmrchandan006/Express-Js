 const express = require('express');
const app = express();

// Import routes
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');

// Use routes
app.use('/', indexRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
