 const express = require('express');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', './views'); 