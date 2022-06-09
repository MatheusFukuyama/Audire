
//Cria construtor
function LocalizaPerguntaValidator() {

}


//Define as funções da classe
LocalizaPerguntaValidator.prototype.checkBody = (req, res) => {
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

    if(req.body.pergunta == ""){
        error  = {  location: 'body', 
                    param:    'pergunta', 
                    msg:      'O pergunta deve ser informado', 
                    value:     req.body.pergunta };

        errors.push(error);
    }
    
    return errors;
}

//Module.exports é o objeto que será retornado pelo 'require', nesse caso é a função construtora
module.exports = LocalizaPerguntaValidator