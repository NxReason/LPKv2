const express = require('express');

const { port } = require('./server/config');
const router = require('./server/routes');

const app = express();

app.use(express.static('assets'));
app.use(router);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port: ${port}`);
});
