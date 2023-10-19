const express = require("express");
const dbConnection = require("./db/db")
const cors = require("cors")

const app = express()

app.use(cors());
  
app.use(express.json())

app.get("/detemp", (req, res)=>{
    const sql = "SELECT * FROM employee";
    dbConnection.query(sql, (err, result)=>{
        if (err) return res.json({Error: "Error al correr la consulta"})
        return res.json({Status: "Success", Result: result})
    })
})

app.get("/depart",(req, res)=>{
    const sql = "SELECT * FROM depart";
    dbConnection.query(sql, (err, result)=>{
        if (err) return res.json({Error: "Error al correr la consulta"})
        return res.json({Status: "Success", Result: result})  
    })
})

app.get("/saludo", (req, res) =>{
    res.json("Hello")
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Corriendo en puerto: ${PORT}`))

module.exports = app;