var http = require('http'),
  url = require('url');

var server = http.createServer(function(req, res) {
  var routes = {
    "/api/parsetime": parsetime,
    "/api/unixtime": unixtime
  };

  function parsetime(iso) {
    var date = new Date(iso);
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }
  }

  function unixtime(iso) {
    var date = new Date(iso);
    return {
      unixtime: date.getTime()
    }
  }


  var reqUrl = url.parse(req.url, true);
  var route = reqUrl.pathname;
  var iso = reqUrl.query.iso;
  var resource = routes[route](iso);

  if (resource) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(resource));
  } else {
    res.writehead(404);
    res.end();
  }

});
server.listen(process.argv[2]);