var ts = require('through');

var upperCaserer = ts(function write(data) {
    this.queue(data.toString().toUpperCase());
  },
  function end() {
    this.queue(null);
  });

process.stdin
  .pipe(upperCaserer)
  .pipe(process.stdout);