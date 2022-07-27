
//Cria construtor
function RespostaContextoValidator() {

}


//Define as funções da classe
RespostaContextoValidator.prototype.checkBody = (req, res) => {
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

    if(req.body.resposta == ""){
        error  = {  location: 'body', 
                    param:    'resposta', 
                    msg:      'A resposta deve ser informado', 
                    value:     req.body.resposta };

        errors.push(error);
    }

    if(req.body.ordem  == ""){
        error  = {  location: 'body', 
                    param:    'ordem', 
                    msg:      'A ordem deve ser informado', 
                    value:     req.body.ordem };

        errors.push(error);
    }

    if(req.body.perguntaContextoId == ""){
        error  = {  location: 'body', 
                    param:    'perguntaContextoId', 
                    msg:      'O id da tabela perguntaContexto deve ser informado', 
                    value:     req.body.perguntaContextoId };

        errors.push(error);
    }
    
    return errors;
}

//Module.exports é o objeto que será retornado pelo 'require', nesse caso é a função construtora
module.exports = RespostaContextoValidator