const express = require('express');
const router = express.Router();

// Define a simple route for the homepage
router.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

module.exports = router;
