const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require("../database/database");

//CREAMOS LA TABLA DE DATOS

const toDoList=sequelize.define('toDoList',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull: false
    },
    text:{
        type:DataTypes.STRING,
        allowNull: false
    },
    state:{
        type:DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:false
    },
    priority:{
        type:DataTypes.INTEGER,
        allowNull: false

    }
});

module.exports={toDoList}