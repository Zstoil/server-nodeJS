const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const mongoose = require ('mongoose');


const app = express();

app.use(cors());
app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.use(routes);

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/data');

app.listen(3030, () => console.log('Server is running on port 3030...'));



