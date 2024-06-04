const express= require('express');
const UserModel = require('./database/models/users.model')



const port =8080;
const app=express();
app.use(express.json())


app.get('/user', async (req,res)=>{
    try {
        const users= await UserModel.find({});

        res.status(200).json(users);
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

app.get('/user/:id', async(req,res)=>{
    try {
        const id= req.params.id;
        const user = await UserModel.findById(id);

        res.status(200).json(user);

    } catch (error) {
        return res.status(500).send(error.message)
    }
})


app.patch('/user/:id', async (req,res)=>{
    try {
        const id = req.params.id;
        const user= await UserModel.findByIdAndUpdate(id,req.body,{new:true})

        res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

app.delete('/user/:id', async (req,res)=>{
    try {
        const id = req.params.id;
        const user= await UserModel.findByIdAndDelete(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message) 
    }
})


app.post('/user', async (req,res)=>{
   try{
    const user = await UserModel.create(req.body);

   res.status(201).json(user)
   }catch(error){
    res.status(500).send(error)
   }
})



app.listen(port,()=>console.log('Listening!'));