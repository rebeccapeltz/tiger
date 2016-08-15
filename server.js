var express = require('express');

express().use(express.static('./build')).listen(8080, function() {
  console.log('Bunny app listening on port 8080!');
});