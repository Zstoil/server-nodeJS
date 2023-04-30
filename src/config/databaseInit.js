const mongoose = require('mongoose');

const config = require('./index');

async function initDatabase() {
    mongoose.set('strictQuery', false);

    await mongoose.connect(process.env.DB_URI);//config.DB_URI

    // console.log(`DB connected on ${config.DB_URI}`);
}

module.exports = initDatabase;