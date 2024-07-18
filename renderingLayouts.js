 const express = require('express');
const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', './views'); // Specify the directory for your view files

// Use express-ejs-layouts middleware
app.use(expressLayouts);

// Set default layout
app.set('layout', 'layouts/main'); // Assuming your main layout file is named 'main.ejs'

// Routes and other configurations...