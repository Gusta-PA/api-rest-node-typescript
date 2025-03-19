import express from "express";
import './shared/services/TranslationsYup'


import { router } from './routes/index'

const server = express();

server.use(express.json()) // Trás os dados de dentro do BODY
server.use(router); // Fala pro servidor utilizar todas as rotas que cadastrar

export { server }

// Criação padrão do servidor até o momento
// Se colocar o return, dá erro, então nesse caso não posso colocar

// A diferença dos métodos HTTP, no fim de tudo é apenas por semântica.

// Com o get, você usa para consultar dados no servidor. Você pode fazer inserções, mas não é uma boa prática.