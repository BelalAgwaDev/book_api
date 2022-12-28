
var express = require('express')
var bodyParser = require('body-parser')
var cors=require("cors")
const storeRouter = require('./route/store.route')
const app=express()
const port=3000


 app.use(cors())


// // parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
 app.use(bodyParser.json())




// // use note route
 app.use("/api",storeRouter)



app.listen(port,()=>{
   
    console.log(`server start .............`);
})

