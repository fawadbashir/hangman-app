const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const buildPath = path.join(__dirname, '..', 'build')
// app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(buildPath));
app.use(express.static(path.join(buildPath)));
app.get('/ping', function (req, res) {
    return res.send('pong');
});
app.get('/*', function (req, res) {
    res.sendFile(path.join(buildPath, 'index.html'));
});
app.listen(port)