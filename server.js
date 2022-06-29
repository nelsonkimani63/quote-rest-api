const express = require('express');
const app = express();
const PORT = 5000;

//GET/quotes -get all  quotes
//POST/quotes -create a quote
//PATCH/quotes/:id - update quotes
//DELETE/quotes/:id -remove quote

app.use(express.json())

app.get("/",(req,res)=>{

})

app.post("/",(req,res)=>{
    
})

app.get("/:id",(req,res)=>{
    
})

app.put("/:id",(req,res)=>{
    
})

app.delete("/:id",(req,res)=>{
    
})

app.listen(PORT,()=>{
    console.log(`server is listening on http://localhost:${PORT}`)
})