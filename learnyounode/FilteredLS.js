var fs = require('fs'),
  filterExt = process.argv[3],
  directory = process.argv[2];

function filterFileNames(err, fileNames) {
  // console.log(fileNames);
  var result = fileNames.filter(function(fileName) {
    // console.log(fileName);
    var ext = fileName.slice(fileName.length - filterExt.length - 1);
    // console.log(ext);
    return (ext === ('.' + filterExt));

  });
  result.forEach(function(fileName) {
    console.log(fileName);
  });
}

fs.readdir(directory, filterFileNames);