
//Cria construtor
function ReducaoLexicalValidator() {

}


//Define as funções da classe
ReducaoLexicalValidator.prototype.checkBody = (req, res) => {
    //req.sanitize('name').trim();
    
    var errors = []
    var error;

    if(!req.body){
        error  = {  location: 'body', 
                    param:    'body', 
                    msg:      'Body must not be null', 
                    value:     req.body };

        errors.push(error);
    }

    if(req.body.palavra == ""){
        error  = {  location: 'body', 
                    param:    'palavra', 
                    msg:      'A palavra deve ser informado', 
                    value:     req.body.palavra };

        errors.push(error);
    }

    if(req.body.idiomaId == ""){
        error  = {  location: 'body', 
                    param:    'idiomaId', 
                    msg:      'O idioma deve ser informado', 
                    value:     req.body.idiomaId };

        errors.push(error);
    }
    
    return errors;
}

//Module.exports é o objeto que será retornado pelo 'require', nesse caso é a função construtora
module.exports = ReducaoLexicalValidator