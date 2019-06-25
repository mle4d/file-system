const fs = require('fs');
fs.readFile('./my.txt', (err, data) => {
  console.log(data);
});

module.exports = {
  fs
}