import { Request, RequestHandler, Response } from "express"
import { StatusCodes } from "http-status-codes"
import * as yup from 'yup'


interface ICidade {
    nome: string,
    estado: string
}

// O YUP é uma lib que consegue realizar diversas validações com um código interno, evitando a necessidade de muitos IF no código.
const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3), // Verificando se é string, se é obrigatório, e o tamanho minimo.
    estado: yup.string().required().min(3)
})

interface IFilter {
    filter?: string
}

const queryValidation: yup.Schema<IFilter> = yup.object().shape({
    filter: yup.string().required().min(3)
})


// Middleware no Express
// Realiza processamento de dados após a request, mas antes do envio da resposta do servidor

export const createBodyValidator: RequestHandler = async (req, res, next) => {
    try {
        await bodyValidation.validate(req.body, { abortEarly: false }) // abortEarly mostra a qtd de erros que tem de uma vez
        return next() // Se bem sucedida, avança para a próxima função no Routes
    } catch (error) {
        
        const yupError = error as yup.ValidationError
        const errors: Record<string, string> = {} // Criação de um objeto VAZIO para armazenar os erros

        yupError.inner.forEach(error => {
            if (!error.path) return // Se for Undefined, retorna
            errors[error.path] = error.message // Joga a mensagem de erro para dentro do validationErrors
        })

        res.status(StatusCodes.BAD_REQUEST).json({
            errors // Retorna a mensagem dos erros
        })
        return
    }
}

export const createQueryValidator: RequestHandler = async (req, res, next) => {
    try {
        await queryValidation.validate(req.query, { abortEarly: false }) 
        return next() 
    } catch (error) {
    
        const yupError = error as yup.ValidationError
        const errors: Record<string, string> = {} 

        yupError.inner.forEach(error => {
            if (!error.path) return 
            errors[error.path] = error.message 
        })

        res.status(StatusCodes.BAD_REQUEST).json({
            errors 
        })
        return
    }
}

// O Request e Response tem que ser os específicados pelo Express
export const create = (req: Request, res: Response) => { // Controler de CRIAÇÃO DE CIDADES, utilizada no Routes
    console.log(req.body) // Ao realizar a tipagem no próprio req.body, não é necessário guardar os dados em uma variável

    res.send('Create!')
}

