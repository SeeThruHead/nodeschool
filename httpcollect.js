var http = require('http');

http.get(process.argv[2], function (response) {
  var datastring = '';
  response.setEncoding('utf8');
  response.on('data', function(data) {
    datastring += data;
  });
  response.on('end', function() {
    console.log(datastring.length);
    console.log(datastring);
  });
});