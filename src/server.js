// importar dependência

const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando o express
const server = express()
server
// utilizar body do req
.use(express.urlencoded({ extend: true }))

// utilizando os arquivos estáticos
.use(express.static('public'))

// configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// rotas da aplicação
.get('/', pages.index)
.get('/location', pages.location)
.get('/about-location', pages.aboutLocation)
.get('/create-location', pages.createLocation)
.post('/save-about-location', pages.saveAboutLocation)

// ligar o servidor

server.listen(5500)
