var http = require('http');

var urls = process.argv.slice(2);
var count = 0;
var strings = ['','',''];

urls.forEach(function(url, index) {
  function getRes(res) {
    res.setEncoding('utf8');

    res.on('data', function(data) {
      strings[index] += data;
    });

    res.on('end', function() {
      count++;
      if (count == 3)
        strings.forEach(function(stringData) {
          console.log(stringData);
        });
    });

  };

  http.get(url, getRes);
});