import express from "express";

const server = express()

server.get('/', (req, res) => {
   res.send("Olá Dev!")
})

export { server }

// Criação padrão do servidor até o momento
// Se colocar o return, dá erro, então nesse caso não posso colocar