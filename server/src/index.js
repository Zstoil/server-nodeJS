require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const initDatabase = require('./config/databaseInit');
const config = require('./config');
const mongoose = require('mongoose');

const { authentication } = require ('../src/middlewares/authMiddleware');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(authentication());
app.use(routes);

mongoose.set('strictQuery', false);

mongoose.connect(process.env.DB_URI,console.log(`mongoose is running on port ${process.env.DB_URI}...`));

// const port = process.env.DB_PORT || 5000

// app.listen(port,console.log(`Server is running on port ${port}...`))
// app.listen(process.env.DB_PORT);

initDatabase()
    .then(() => app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`)))
    .catch((err) => console.error(err.message));



