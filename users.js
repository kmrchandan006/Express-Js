 const express = require('express');
const router = express.Router();

// Define routes for user operations
router.get('/', (req, res) => {
    res.send('User list');
});

router.get('/:id', (req, res) => {
    res.send(`User details for user with ID: ${req.params.id}`);
});

module.exports = router;
