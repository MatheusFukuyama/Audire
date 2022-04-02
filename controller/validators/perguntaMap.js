
//Cria construtor
function PerguntaMapValidator() {

}


//Define as funções da classe
PerguntaMapValidator.prototype.checkBody = (req, res) => {
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

    if(req.body.perguntaId == ""){
        error  = {  location: 'body', 
                    param:    'perguntaId', 
                    msg:      'O id da pergunta deve ser informado', 
                    value:     req.body.perguntaId };

        errors.push(error);
    }
    
    return errors;
}

//Module.exports é o objeto que será retornado pelo 'require', nesse caso é a função construtora
module.exports = PerguntaMapValidator