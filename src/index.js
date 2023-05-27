const express=require('express')
const serverRouter = require("./routers/server");
const path=require('path')
const app=express()

const port=process.env.PORT || 4000
const publicDirectoryPath=path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))
app.use(express.json())
app.use(serverRouter)

app.listen(port,()=>{
    console.log("server is up and running on ",port)
})