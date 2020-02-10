const fs = require('fs');

// for now, let use Sync, but it is surely not recommended
let users = fs.readFileSync('./public/database/register.txt');
users = String(users).split('\n');
users.pop(); // remove the last unwanted element
users = users.map(user => JSON.parse(user));

// The problem with readFile is that it is async so the program exports users before the result is returned
/* fs.readFile('./public/database/login.txt',(err,data) => {
    if(err) throw err;
    users = String(data).split('\n');
    users.pop(); // remove the last unwanted element
    users = users.map(user => JSON.parse(user));
}) */

module.exports = users;