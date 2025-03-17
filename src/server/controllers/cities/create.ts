import { Request, Response } from "express"





// O Request e Response tem que ser os específicados pelo Express
export const create = (req: Request, res: Response) => { // Controler de CRIAÇÃO DE CIDADES, utilizada no Routes

    res.send('Create!')
}