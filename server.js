const express = require('express');
const path = require('path');
const util = require('util');

const app = express();

const staticPath = path.join(__dirname, 'build');
app.use(express.static(staticPath));

const port = process.env.PORT || 8080;

app.listen(port, function() {
	util.log('... Application started on Port: ' + port + ' ...');
});
