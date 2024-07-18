  // GET route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// POST route
app.post('/submit', (req, res) => {
    res.send('Data received via POST');
});

// PUT route
app.put('/update', (req, res) => {
    res.send('Data updated via PUT');
});

// DELETE route
app.delete('/delete', (req, res) => {
    res.send('Data deleted via DELETE');
});
