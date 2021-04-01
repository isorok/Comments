const jsonServer = require('json-server');

const comments = require('./comments');


const router = jsonServer.router({
  'comments': comments,
});

exports.router = router;
