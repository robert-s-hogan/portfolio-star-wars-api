'use strict';
 
var requests = require('requests');

requests('https://google.com/foo/bar', { streaming })
.on('data', function (chunk) {
  console.log(chunk)
})
.on('end', function (err) {
  if (err) return console.log('connection closed due to errors', err);
 
  console.log('end');
});