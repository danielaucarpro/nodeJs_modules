const express = require('express');

const header = require('./components/header');
const fs = require('./components/fsModule');
const path = require('./components/pathModule');
const event = require('./components/eventsModule');
const assert = require('./components/assertModule');
const os = require('./components/osModule');

let port = 3000;

const app = express();

app.get('/', (req, resp) => {
    resp.send(header.header())
});

app.get('/fsModule', (req, resp) => {
    resp.send(fs.fsModule())
});

app.get('/pathModule', (req, resp) => {
    resp.send(path.pathModule());
});

app.get('/eventsModule', (req, resp) => {
    resp.send(event.pathModule())
});

app.get('/assertModule', (req, resp) => {
    resp.send(assert.assertModule())
});

app.get('/osModule', (req, resp) => {
    resp.send(os.osModule())
});

app.listen(port);