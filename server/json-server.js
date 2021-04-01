const jsonServer = require('json-server');
const { router } = require('./routes');
require('dotenv').config();

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const PORT = process.env.JSON_SERVER_PORT;

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1'
  })
);
server.use(router);
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server is running on port ${PORT}.`);
});
