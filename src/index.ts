import { server } from './server/Servidor' // O caminho tem de ser igual, tanto pastas, arquivos etc

server.listen(process.env.PORT || 3333 , () => {
    console.log(`Aplicação rodando na porta ${process.env.PORT  || 3333}`)
})

 
// Comando para inicializar o servidor
// ts-node-dev .\src\index.ts

// Simplificado para npm start