const express = require("express"); // import express lib
const bodyParser = require("body-parser"); // parse http request
const app = express(); // init express in var
const port = 4000; // port to connect to

app.engine('ejs', require('ejs').__express)
app.set('views', __dirname + '/../views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/../public/images'));
// app.use(express.static(__dirname + '/../public/stylesheets'));
app.use(express.static(__dirname + '/../public'));


app.use(bodyParser.urlencoded({ extended: false})); // add http parsing to server
app.use('/', require('./routes'));

app.listen(port, () => { // app.listen = server init at port + callback (functions called when init complete)
	console.log(`Success! Your application is running on port ${port}.`);
	console.log(__dirname + `/../public`);
});
