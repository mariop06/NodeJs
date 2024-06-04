const path= require('path');

// Apresentando o nome do arquivo actual
console.log(path.basename(__filename))

// Apresentando o nome do Diretorio actual
console.log(path.dirname(__filename))

// Apresentando a extensao do arquivo actual
console.log(path.extname(__filename));

// Apresentando a forma em objecto do arquivo
console.log(path.parse(__filename));

// Juntando caminhos no directorio actual
console.log(path.join(__dirname,'test','index.html'));
