const fs = require('fs');
const request = require('request');
let args = process.argv.slice(2)
let url = args[0]
let path = args[1]

request(url, (error, response, body) => {
  
  fs.writeFile(path, body, (err) => {
    if (err) {
      console.log(err);
    } else {
      fs.stat(path, (err, stats) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Downloaded and saved ${stats.size} bytes to ${path}`);
        }
      });
    }
  });
});

