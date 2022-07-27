
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

    if(req.body.perguntaId == ""){
        error  = {  location: 'body', 
                    param:    'perguntaId', 
                    msg:      'O id da Pergunta deve ser informado', 
                    value:     req.body.perguntaId };

        errors.push(error);
    }

    if(req.body.contextoId == ""){
        error  = {  location: 'body', 
                    param:    'contextoId', 
                    msg:      'O id do contexto deve ser informado', 
                    value:     req.body.contextoId };

        errors.push(error);
    }
    
    return errors;
}

//Module.exports é o objeto que será retornado pelo 'require', nesse caso é a função construtora
module.exports = RespostaContextoValidator