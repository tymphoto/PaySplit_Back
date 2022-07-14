require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const checkSession = require('./middlewares/checkSession');
const authRouter = require('./routers/authRouter');
const menuRouter = require('./routers/menuRouter');
const orderRouter = require('./routers/orderRouter');
const checkRouter = require('./routers/checkRouter');
const prodCreateRouter = require('./routers/prodCreate');

const app = express();

app.use(cors({
  credentials: true,
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.env.PWD, 'public')));

const sessionConfig = {
  name: 'cook',
  secret: process.env.SECRET || 'thisisnotsecure',
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  },
  resave: false,
  saveUninitialized: false,
};

app.use(session(sessionConfig));
app.use(checkSession);

app.use('/', authRouter);
app.use('/category', menuRouter);
app.use('/order', orderRouter);
app.use('/checkCreate', checkRouter);
app.use('/prodCreate', prodCreateRouter);

app.listen(process.env.PORT, () => {
  console.log('server start ', process.env.PORT);
});
