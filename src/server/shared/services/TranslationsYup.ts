import { setLocale } from 'yup'

setLocale({
    mixed: {
        required: "Este campo é obrigatório.",
        notType: "Formato Digitado é inválido.",
        defined: "Este campo precisa ter um valor definido.",
    },
    string: {
        lowercase: "Deve estar em maiúsculo.",
        uppercase: "Deve estar em minusculo.",
        url: "Deve ter um formatod e URL válida.",
        min: "Deve ter no mínimo 3 caractéres.",
        email: "E-mail digitado não é valido."
    },
    array: {
        min: "O vetor deve contar no mínimo 3 caractéres.",
    },
})