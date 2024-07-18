 app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        heading: 'Welcome to My Website',
        message: 'This is the home page.'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us',
        heading: 'About Our Company',
        message: 'Information about our company.'
    });
});
