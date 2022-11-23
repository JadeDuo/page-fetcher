const fs = require('fs');
const request = require('request')

const fetcher = (url, path) => {
  request(url, (error, response, body) => {
    //let content = `error: ${error}\nresponse: ${response} response status code: ${response.statusCode}\nbody: ${body}`
    fs.writeFile(path, body, (err) =>{
      if (err) {
        console.log(err)
      } else {
        fs.stat(path, (err, stats) => {
          if (err) {
            console.log(err)
          } else {
          console.log(`Downloaded and saved ${stats.size} bytes to ${path}`)
          }
        })
      }
    })
  })
};

fetcher("http://www.example.com", "./page-data.html")