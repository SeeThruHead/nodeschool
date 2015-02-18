var tr = require('trumpet'),
 fs = require('fs'),
 ts = require('through');

var upperCaser = function(data) {
  this.queue(data.toString().toUpperCase());
};

var html = tr();
var loud = html.selectAll('.loud').createStream();

loud.pipe(ts(upperCaser)).pipe(loud); // Like parallel stream almost
process.stdin.pipe(html).pipe(process.stdout)