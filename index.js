const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const { port } = require('./server/config');
const router = require('./server/routes');
const { db } = require('./server/models');

const app = express();

app.use(express.static('assets'));

// session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
  db.sync()
  .then(() => { console.log('Database is up'); })
  // eslint-disable-next-line no-console
  console.log(`Server listening on port: ${port}`);
});
