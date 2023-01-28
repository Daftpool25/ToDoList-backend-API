const { toDoList } = require("../models/toDoList")

const getAllList= async (req,res) =>{
    try {

        //Uso el modelo ya existente
        const allProjects =await  toDoList.findAll(
            //puedo usar esto para por ejemplo buscar todos los creados por X user
            // {where:{id}}

        );
        console.log(allProjects)
        res.send(allProjects)

    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}


const createNewToDo=async (req,res) =>{

    try {
        
        const {text,priority}=req.body
        //Uso el modelo ya existente
        const newToDo = await toDoList.create({
            text,
            priority
        })
        //TODO make model response and loggers
        console.log(newToDo)
        res.send("Created")

    } catch (error) {

        return res.status(500).json({message:error.message})

    }

}

const editToDo= async (req,res) =>{
    try {
        let id=req.params.id;
        const {text,state,priority}=req.body;
        const toDo = await toDoList.findByPk(id);

            toDo.text=text;
            toDo.state=state;
            toDo.priority=priority;

        //muestra la referencia que tengo aqui
        console.log(toDo)
        //debo guardar esa ref en la base:
        await toDo.save()
        res.json(toDo)

    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

const deleteToDo=async (req,res) =>{

    try {
        
        let id=req.params.id;
        await toDoList.destroy({
            where:{id}
        })
        res.sendStatus(200)
        
    } catch (error) {

        return res.status(500).json({message:error.message})

    }

}

const findToDo= async (req,res) =>{
    try {
        let id=req.params.id;
        const toDo = await toDoList.findByPk(id);
        console.log(toDo)
        res.json(toDo)

    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

module.exports={
    getAllList,createNewToDo, deleteToDo,editToDo,findToDo
}