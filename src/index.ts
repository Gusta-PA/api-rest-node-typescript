import { server } from './server/Servidor' // O caminho tem de ser igual, tanto pastas, arquivos etc

server.listen(3333, () => {
    console.log('App iniciada.')
})

 
// Comando para inicializar o servidor
// ts-node-dev .\src\index.ts