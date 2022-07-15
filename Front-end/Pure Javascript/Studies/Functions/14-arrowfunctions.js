//funcao comum;
function olaMundo() {
    return 'olá mundo ';
}

//funcao arrow function
const olaMundo = () => "Olá mundo"; //VEJA QUE NEM PRECISA DO RETURN SE TIVER APENAS 1 LINHA

// CASO TENHA APENAS UMA LINHA : NÃO PRECISA DE CHAVES, NEM RETURN;
const olaMundo = a => "Olá mundo";

//ARROW FUNCTION Não faz HOISTING

//RESTRIÇÕES DO ARROW FUNCTION
    // * quando usa o this, ele referencia sempre o objeto global;
    // * métodos de modificação do seu valor não irão funcionar;
    // * não existe o objeto arguments.
    // * O construtor ( new objeto()) não funciona;