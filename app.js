const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// for serving static files 
app.use('/static', express.static(path.join(__dirname, 'static')));

// set the template engine as pug
app.set('view engine', 'pug');
// set the views directory
app.set('views', path.join(__dirname, 'views'));

// our pug demo endpoint
app.get('/index', (req, res) => {
  res.status(200).render('index', { title: 'Hey there', message: 'Hello there and welcome to my page' });
});

app.get('/', (req, res) => {
  res.send("this application is running on express");
});

app.post('/', (req, res) => {
  res.send("this application is running on express (POST)");
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
