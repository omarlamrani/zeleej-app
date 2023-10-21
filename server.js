const express = require("express"); // import express lib
const bodyParser = require("body-parser"); // parse http request
const app = express(); // init express in var
const port = 4000; // port to connect to

app.use(bodyParser.urlencoded({ extended: false})); // add http parsing to server

app.get('/', (req, res) => {
    res.send("Home!")
});

app.get('/second', (req, res) => {
    res.send("Second!")
});

app.get('/create', (req, res) => {
    res.send("Account create!")
});



app.listen(port, () => { // app.listen = server init at port + callback (functions called when init complete)
	console.log(`Success! Your application is running on port ${port}.`);
});

