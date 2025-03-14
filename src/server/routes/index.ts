import { Router } from 'express'
import { StatusCodes } from "http-status-codes"

const router = Router();


router.get('/', (req, res) => { // O navegador só consegue fazer chamadas quando o get é utilizado
    res.send("Olá Dev!")
})


router.post('/teste', (req, res) => {
    res.status(StatusCodes.UNAUTHORIZED).json(req.body) // Devolve os dados para o body
})

export { router };