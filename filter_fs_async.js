var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list) {

  for (var i = 0; i < list.length; i += 1) {
    var ext = path.extname(list[i])
    if ( ext === '.md' ) {
      console.log(list[i]);
    }
  }
})