//Criando erros 
// new Error(message, fileName, lineNumber) // Nem todos os navegadores aceitam filename e linenumber

const MeuErro = new Error("Mensagem Inválida"); // Aqui aparece a descrição do erro
//Dando nome ao erro;
MeuErro.name = 'Nome do erro;' // Aqui é o nome do erro;
throw MeuErro; //Aqui estou chamando o erro;