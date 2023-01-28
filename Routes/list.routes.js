const { getAllList, createNewToDo, deleteToDo, editToDo, findToDo } = require("../controllers/list.controller");

const listRoute=require("express").Router();

listRoute.get('/List',getAllList)
listRoute.post('/List',createNewToDo)
listRoute.put('/List/:id',editToDo)
listRoute.delete('/List/:id',deleteToDo)
listRoute.get('/List/:id',findToDo)


module.exports={listRoute}