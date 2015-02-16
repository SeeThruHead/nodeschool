var net = require('net');
var args = process.argv.slice(2);
var port = args[0];

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

var server = net.createServer(function (socket) {
  var date = new Date();
  var dateString = date.getFullYear() + '-';
  dateString += ('0' + (date.getMonth()+1)).slice(-2) + '-';
  dateString += ('0' + date.getDate()).slice(-2) + ' '
  dateString += ('0' + date.getHours()).slice(-2) + ':';
  dateString += ('0' + date.getMinutes()).slice(-2) + '\n';
  socket.end(dateString);
})
server.listen(port);