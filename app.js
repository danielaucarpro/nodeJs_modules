const express = require('express');

let port = 3000;

const app = express();

app.get('/', (req, resp) => {
    resp.send('Hello World!')
});

app.get('/birthday', (req, resp) => {
    resp.send('hi! World')
});

app.listen(port);