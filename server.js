
const express = require('express');
const app = express();
const port =3001;


app.get('/user/list',(req,res) =>{
    res.end('User Listed Successfully')
})

app.patch('/user/edit',(req,res) =>{
    res.end('User Edited Successfully')
})

app.delete('/user/delete',(req,res) =>{
    res.end("User Deleted Successfully")
})

app.put('/user/update',(req,res) =>{
    res.end("User Updated Successfully")
})

app.post('/user/login',(req,res)=>{
    res.end('User Logged in Successfully')
})



app.listen(port,() =>{
    console.log(`Server running at  http://localhost:${port}/`);
})  