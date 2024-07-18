 const express = require('express');
const router = express.Router();

// Define routes for product operations
router.get('/', (req, res) => {
    res.send('Product list');
});

router.get('/:id', (req, res) => {
    res.send(`Product details for product with ID: ${req.params.id}`);
});

module.exports = router;
