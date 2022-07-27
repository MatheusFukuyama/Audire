
//Cria construtor
function ComunicacaoValidator() {

}


//Define as funções da classe
ComunicacaoValidator.prototype.checkBody = (req, res) => {
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

    if(req.body.dataInicio == ""){
        error  = {  location: 'body', 
                    param:    'datatInicio', 
                    msg:      'A data de inicio deve ser informado', 
                    value:     req.body.caracter };

        errors.push(error);
    }

    if(req.body.dataTermino == ""){
        error  = {  location: 'body', 
                    param:    'dataTermino', 
                    msg:      'A data de termino deve ser informado', 
                    value:     req.body.dataTermino };

        errors.push(error);
    }
    

    if(req.body.pessoaId == ""){
        error  = {  location: 'body', 
                    param:    'pessoaId', 
                    msg:      'A pessoa deve ser informada', 
                    value:     req.body.pessoaId };

        errors.push(error);
    }

    if(req.body.contextoId == ""){
        error  = {  location: 'body', 
                    param:    'contextoId', 
                    msg:      'O contexto deve ser informado', 
                    value:     req.body.contextoId };

        errors.push(error);
    }
    
    return errors;
}

//Module.exports é o objeto que será retornado pelo 'require', nesse caso é a função construtora
module.exports = ComunicacaoValidator