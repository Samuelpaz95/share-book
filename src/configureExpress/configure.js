import express from 'express';
import routes from '../routes/index.js';
import bodyParser from 'body-parser';

export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.set('port', process.env.PORT || 7000);

app.use(routes);