const express = require('express');
const app = express();
const PORT = 5000;
const quotesRoutes = require("./routes/quotesRoutes")
const authorsRoutes = require("./routes/authorsRoutes") 

app.use(express.json())

app.use("/quotes",quotesRoutes) 
app.use("/authors",authorsRoutes) 

app.listen(PORT,()=>{
    console.log(`server is listening on http://localhost:${PORT}`) 
})