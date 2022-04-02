
//Cria construtor
function AcentuacaoValidator() {

}


//Define as funções da classe
AcentuacaoValidator.prototype.checkBody = (req, res) => {
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

    if(req.body.caracter == ""){
        error  = {  location: 'body', 
                    param:    'caracter', 
                    msg:      'O carcater deve ser informado', 
                    value:     req.body.caracter };

        errors.push(error);
    }

    if(req.body.suplente == ""){
        error  = {  location: 'body', 
                    param:    'suplente', 
                    msg:      'O suplente deve ser informado', 
                    value:     req.body.suplente };

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
module.exports = AcentuacaoValidator