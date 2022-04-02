
//Cria construtor
function GeneroValidator() {

}


//Define as funções da classe
GeneroValidator.prototype.checkBody = (req, res) => {
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

    if(req.body.enunciado == ""){
        error  = {  location: 'body', 
                    param:    'enunciado', 
                    msg:      'O enunciado deve ser informado', 
                    value:     req.body.enunciado };

        errors.push(error);
    }

    if(req.body.tipo == ""){
        error  = {  location: 'body', 
                    param:    'tipo', 
                    msg:      'O tipo deve ser informado', 
                    value:     req.body.tipo };

        errors.push(error);
    }

    if(req.body.enunciadoLimpo == ""){
        error  = {  location: 'body', 
                    param:    'enunciadoLimpo', 
                    msg:      'O enunciado limpo deve ser informado', 
                    value:     req.body.enunciadoLimpo };

        errors.push(error);
    }

    if(req.body.criadorId == ""){
        error  = {  location: 'body', 
                    param:    'criadorId', 
                    msg:      'O criador deve ser informado', 
                    value:     req.body.criadorId };

        errors.push(error);
    }

    
    return errors;
}

//Module.exports é o objeto que será retornado pelo 'require', nesse caso é a função construtora
module.exports = GeneroValidator