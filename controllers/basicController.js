// const views = require('../views/');

module.exports = { // availbe to other classes of app
    home : (req, res) => {
        const data = {
            title: 'This the Homepage!',
            message: 'Hello, Welcome!'
        };
        res.render("home",data);
    },
    second: (req, res) => {
        const data = {
            title: 'This the Second Page!'
        };
        res.render("second",data);
    },
    create: (req, res) => {
        res.render("create");
    }
};