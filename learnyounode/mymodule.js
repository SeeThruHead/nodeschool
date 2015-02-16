module.exports = function filterFileNames(err, fileNames) {
  // console.log(fileNames);
  if (err) return err;
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