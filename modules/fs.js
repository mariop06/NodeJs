const fs = require('fs');
const path=require('path');

//criar uma Pasta
// fs.mkdir(path.join(__dirname,'/test'),(error)=>{
//     if(error){
//         return console.log('ERRO: '+ error);
//     }

//     console.log('Criado com Sucesso!');
// })

//Criar um arquivo
// fs.writeFile(path.join(__dirname,'/test','Readme.txt'),'ola',(error)=>{
//     if(error){
//         return console.log('ERRO: '+error);
//     }

//     console.log('Criado com Sucesso!')
// });


//Adicionando conteudo dentro do arquivo
// fs.appendFile(path.join(__dirname,'/test','Readme.txt'),' ola',(error)=>{
//     if(error){
//         return console.log('ERRO: '+error);
//     }

//     console.log('Criado com Sucesso!')
// });

// fs.readFile(path.join(__dirname,'/test','Readme.txt'),'utf8',(error)=>{
//     if(error){
//         return console.log('ERRO: '+error);
//     }

//     console.log('Criado com Sucesso!')
// });