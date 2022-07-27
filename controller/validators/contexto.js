
//Cria construtor
function ContextoValidator() {

}


//Define as funções da classe
ContextoValidator.prototype.checkBody = (req, res) => {
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

    if(req.body.titulo == ""){
        error  = {  location: 'body', 
                    param:    'titulo', 
                    msg:      'O titulo deve ser informado', 
                    value:     req.body.titulo };

        errors.push(error);
    }

    if(req.body.personagemId == ""){
        error  = {  location: 'body', 
                    param:    'personagemId', 
                    msg:      'O id do personagem deve ser informado', 
                    value:     req.body.personagemId };

        errors.push(error);
    }
    
    return errors;
}

//Module.exports é o objeto que será retornado pelo 'require', nesse caso é a função construtora
module.exports = ContextoValidator