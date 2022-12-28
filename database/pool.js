
const { Pool } = require('pg')
const dotenv = require("dotenv").config()


const database_Config = {
  host: 'localhost',
  user: 'postgres',
  database: "postgres",
  password: "2468100",
  port: 5432,
  connectionTimeoutMillis: 300,
  idleTimeoutMillis: 200,
  max: 20,


}





const pool = new Pool(
  database_Config
)


pool.on('connect', (client) => {
  console.log("is connect")
})



pool.on('remove', (client) => {
  console.log("remove")
})







module.exports = pool