var fs = require('fs');


function fileManager(err, data) {
  console.log(data.split('\n').length - 1);
}

var options = {
  encoding: 'UTF8'
}
fs.readFile(process.argv[2], options, fileManager);