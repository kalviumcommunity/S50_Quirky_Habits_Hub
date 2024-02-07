const express = require("express")
const app = express()
const port = 3000

app.get('/ping',(req,res)=>{
    res.send("<h1>Pong</h1>")
})

if(require.main == module){
    app.listen(port,()=>{
        console.log(`server is running on localhost ${port}`)
    })
}

module.exports = app;