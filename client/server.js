var express = require('express');
var app = express();
var path = require('path');
var appPath = path.join(__dirname, 'app');

app.get('*', function(req, res) {
  res.sendFile(path.join(appPath, 'index.html'));
});

module.exports = app;