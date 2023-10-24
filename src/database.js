const sql = require("sqlite3").verbose();

const db = new sql.Database('./database.db', (err) => {
    if (err) {
      console.error('Error connecting to database:', err);
    } else {
      console.log('Connected to database');
    }
});

db.serialize(() => {
    db.run('DROP TABLE users')
    db.run('CREATE TABLE IF NOT EXISTS users (username VARCHAR)');
  });

const username = 'omar_lamrani';
const username2 = 'michael_jackson';

db.run(`INSERT INTO users (username) VALUES (?)`, [username], function(err) {
if (err) {
    return console.error(err.message);
}
console.log(`A row has been inserted with rowid ${this.lastID}`);
});

db.run(`INSERT INTO users (username) VALUES (?)`, [username2], function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`);
    });

module.exports = db;