import * as create from './create'
// Nessa linha, todas as funções que estão em create.ts, virão para cá através de uma única importação chamada create


// Ao colocar a importação em um objeto, podemos acessá-la facilmente em outros locais.
export const cidadesController = {
    ...create, // o spread serve para espalhar todas as funções dentro de create para dentro do cidadesController
}
