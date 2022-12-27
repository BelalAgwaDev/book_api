
const { Pool } = require('pg')
const dotenv=require("dotenv").config()


const database_Config = {

    connectionTimeoutMillis: 300,
    idleTimeoutMillis: 200,
    max: 20,
    connectionString: process.env.DATABASE_URL,

  }




 
const pool = new Pool({database_Config})


pool.on('connect', (client) => {
console.log("is connect")
})



pool.on('remove', (client) => {
console.log("remove")
})



module.exports=pool