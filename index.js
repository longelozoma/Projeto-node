const express = require('express');
const mongoose = require('mongoose');
const porta = 8080;
const app = express();


// criando a rota da pagina iniciar do get 
app.get('/', function(req, res){
    res.send(`<h1>Minha Api</h1>`)
})









// executando app na porta definida 
app.listen(porta, function(){
    console.log('Aplicativo rodando na url http://localhost:'+porta)
})