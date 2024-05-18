const express = require("express");
const app = express;

// rotas

app.get("/", function(req, res){
    res.send("seja bem vindo ao meu app")
});

app.get("/Sobre", function(req, res){
    res.send("Minha pagina sobre")
});

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu Blog")
});





app.listen(4000, function(){
    console.log("Servidor Rodando na url http://localhost:4000");
});