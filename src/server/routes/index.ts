// import { StatusCodes } from "http-status-codes"
import { Router } from 'express'
import { cidadesController } from '../controllers';



const router = Router();


router.get('/', (req, res) => { // O navegador só consegue fazer chamadas quando o get é utilizado
    res.send("Olá Dev!")
})


router.post(
    '/cidades', 
    cidadesController.createBodyValidator,
    cidadesController.createQueryValidator, 
    cidadesController.create) // colocando uma função de validação após a requisição, se bem sucedida, realiza o create

export { router }; 