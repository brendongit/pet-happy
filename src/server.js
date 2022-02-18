// importar dependência

const express = require('express');
const path = require('path')

// iniciando o express

const server = express()

// criar uma rota

server.get('/', (request, response) => {
   // return response.sendFile(__dirname)
   console.log(__dirname + '/views')
})

// ligar o servidor

server.listen(5500)

// 43min video