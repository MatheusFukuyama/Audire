
//Cria construtor
function EstrategiaValidator() {

}


//Define as funções da classe
EstrategiaValidator.prototype.checkBody = (req, res) => {
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

    if(req.body.nomeMetodo == ""){
        error  = {  location: 'body', 
                    param:    'nomeMetodo', 
                    msg:      'O nome do metodo deve ser informado', 
                    value:     req.body.nomeMetodo };

        errors.push(error);
    }

    if(req.body.local == ""){
        error  = {  location: 'body', 
                    param:    'local', 
                    msg:      'O local deve ser informado', 
                    value:     req.body.local };

        errors.push(error);
    }

    if(req.body.dialogoId == ""){
        error  = {  location: 'body', 
                    param:    'local', 
                    msg:      'O dialogo deve ser informado', 
                    value:     req.body.dialogoId };

        errors.push(error);
    }
    
    return errors;
}

//Module.exports é o objeto que será retornado pelo 'require', nesse caso é a função construtora
module.exports = EstrategiaValidator