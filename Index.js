
const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors')
const bodyParser = require('body-parser')
const { Routes } = require('./Routes/Routes')

Routes.forEach(route => {
    app[route.method](route.path, (req, res) =>{res.send(route.execute(req))})
})

// const route = {
//     path: "/pessoa"
//     verb: "get"
//     action: (req, res) => {
//         // buscar no banco com req.params.idPessoa
//         return "pessoa que veio do banco de dados com idPessoa"
//     }
// }

// const { routes } = require('../routes')

// // Array com as Rotas
// // iterar o array
// // pegar as propiedades das rotas durante a iteração

// app[route.verb](route.path, (req, res) => {
//     route.action(req, rest)
// })

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}...`))
