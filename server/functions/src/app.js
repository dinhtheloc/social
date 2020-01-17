// app.js
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import cors from 'cors';
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// app.use(cors({ origin: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', indexRouter);

exports.app = functions.https.onRequest(app);

