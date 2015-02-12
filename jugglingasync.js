var http = require('http');

var urls = process.argv.slice(2);
var count = 0;
var strings = ['','',''];

function getResponses(urls) {
  urls.forEach(function(url, index) {
    // Define the call behaviour
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
}

getResponses(urls);

// This would be easier to reason about with promises.
// make the array of 3 equal to the result of the promises,
// and call a then on the array of promeises?