'use strict';

// Dependencies

const koa = require('koa');
const Router = require('koa-router');
const Pug = require('koa-pug');
const serve = require('koa-static');

// Controllers

const homeController = require('./controllers/home.js');

// Set up application

const isDebug = process.env === 'development';

const app = new koa();
const router = new Router();

const pug = new Pug({
  viewPath: __dirname + '/views',
  debug: isDebug,
  noCache: isDebug,
});
pug.use(app);

app.use(serve(__dirname + '/public'));
app.use(router.routes());
app.use(router.allowedMethods());

// Error handling

app.on('error', err =>
  console.error('server error', err)
);

// Routing

router.get('/', homeController.index);

// Start app

app.listen(3000);
console.log('Application started at http://localhost:3000');
