const express = require("express");
const dbConnection = require("./db/db")

const app = express()

app.get("/detemp", (req, res)=>{
    const sql = "SELECT * FROM employee";
    dbConnection.query(sql, (err, result)=>{
        if (err) return res.json({Error: "Error al correr la consulta"})
        return res.json({Status: "Success", Result: result})
    })
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Corriendo en puerto: ${PORT}`))