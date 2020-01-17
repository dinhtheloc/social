import * as functions from 'firebase-functions';
import express from 'express';
import path from 'path';
import router from './router';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', router);
const api = functions.https.onRequest(app);

module.exports = {
    api,
}
