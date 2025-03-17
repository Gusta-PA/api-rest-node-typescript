import { Request, Response } from "express"
// import { StatusCodes } from "http-status-codes"
import * as yup from 'yup'


interface ICidade {
    nome: string
}
// O YUP é uma lib que consegue realizar diversas validações com um código interno, evitando a necessidade de muitos IF no código.
const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3), // Verificando se é string, se é obrigatório, e o tamanho minimo.
})

// O Request e Response tem que ser os específicados pelo Express
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => { // Controler de CRIAÇÃO DE CIDADES, utilizada no Routes
    let validatedData: ICidade | undefined = undefined;

    try {
        validatedData = await bodyValidation.validate(req.body)
    } catch (error) {
        const yupError = error as yup.ValidationError

        return res.json({
            errors: {
                default: yupError.message
            }
        })
    }
    console.log(validatedData) // Ao realizar a tipagem no próprio req.body, não é necessário guardar os dados em uma variável

    res.send('Create!')
}