const express= require ("express");
const { sequelize } = require("./database/database");
const toDoList=require("./models/toDoList")
const users=require("./models/users");
const { listRoute } = require("./Routes/list.routes");
const { ENV } = require("./utils/config");





const app=express();

//!MIDDLEWARES
app.use(express.json())
app.use(listRoute)






//DEFINIMOS FUNCION ASINCRONA QUE VERIFICA EL ESTADO Y SI HAY CONECCION LLAMA AL SERVER
async function main(){
    try {
        //await sequelize.authenticate(); este es solo para corroborar funciona
        await sequelize.sync();
       // await sequelize.sync({force:true});

        //me sincroniza y me crea las tablas si no existen
        console.log('Connection has been established successfully.');
        app.listen(ENV.PORT, ()=>{
            console.log(`Port is listenning in Port ${ENV.PORT}`)
        })
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main();

