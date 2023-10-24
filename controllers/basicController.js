// const views = require('../views/');
const database = require('../src/database.js');

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
            title: 'This the Second Page!',
            users: database.all('SELECT * FROM users', [], (err, rows) => {
                if (err) {
                  throw err;
                }
                // rows.forEach(row => {
                console.log(rows);
                // });
                return rows;
              })
              
        };
        console.log(data.users.rows);
        res.render("second",data);
    },
    create: (req, res) => {
        res.render("create");
    }
};