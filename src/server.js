const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Hello From express server');
    res.status(200)
    res.json({message: 'Hello From the other side'});
});

module.exports = app;