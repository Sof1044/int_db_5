const express = require('express')
const app = express()
const cors = require('cors')
const conn = require('./db/conn')

const hostname = 'localhost'
const PORT = 3000

const hospedecontroller = require('./controller/hospede.controller')
const quartocontroller = require('./controller/quarto.controller')

//------------------------- midllewarw -----------------------------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
//------------------------ rotas -----------------------------------




//-------------------------- server --------------------------------
conn.sync()
    .then(()=>{
        app.listen(PORT, hostname,()=> {
            console.log(`Servidor rodando em http://${hostname}:${PORT}`)
        })
    })
    .catch((err)=>{
        console.error('Erro ao sincronizar com o bando de dados!',err)
    })