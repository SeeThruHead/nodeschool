// var http = require('http'),
//   ts = require('through');

// var upperCaserer = ts(function(data) {
//   this.queue(data.toString().toUpperCase());
// });

// var server = http.createServer(function(req, res) {
//   if (req.method === 'POST') {
//     req.pipe(upperCaserer).pipe(res);
//   }
// });
// server.listen(process.argv[2]);

var http = require('http'),
  ts = require('through');

var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
    req.pipe(ts(function(data) {
      this.queue(data.toString().toUpperCase());
    })).pipe(res);
  }
});
server.listen(process.argv[2]);
