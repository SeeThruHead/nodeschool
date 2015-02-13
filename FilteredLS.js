var      fs       = require('fs'),
  filterExt       = process.argv[3],
  directory       = process.argv[2];
  filterFileNames = require('./mymodule')


fs.readdir(directory, filterFileNames);