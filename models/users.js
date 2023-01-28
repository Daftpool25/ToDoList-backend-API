const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require("../database/database");
const { toDoList } = require('./toDoList');

const users=sequelize.define('users',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

//un users tiene muchos todolist
users.hasMany(toDoList,{
    //la clave en el la otra tabla
    foreignKey:'createdBy',
    // la data que toma de aqui
    sourceKey:'id'
})

//todolist pertenece a users
toDoList.belongsTo(users,{
    foreignKey:'createdBy',
    targetId:'id'
})

module.exports={users}