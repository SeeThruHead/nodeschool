var ts = require('through'),
  split = require('split'),
  even = false;

var upperCaserer = ts(function write(data) {
  if (even) {
    this.queue(data.toString().toUpperCase() + '\n');
  } else {
    this.queue(data.toString().toLowerCase() + '\n');
  }
  even = !even;
});

process.stdin
  .pipe(split())
  .pipe(upperCaserer)
  .pipe(process.stdout);