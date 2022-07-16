const { Sequelize, DataTypes } = require('sequelize'); //
const dotenv = require('dotenv');

dotenv.config({ path: './confing.env' });

const database = new Sequelize ({
    dialect: 'postgres',
    database: process.env.DB,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    logging: false
});

module.exports = {database, DataTypes}