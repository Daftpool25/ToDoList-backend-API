const Sequelize = require ("sequelize")
const { ENV } = require("../utils/config")

const sequelize = new Sequelize( ENV.DB_NAME,ENV.USER,ENV.PASSWORD,{
    host:'localhost',
    dialect:'postgres'
})

module.exports={sequelize}