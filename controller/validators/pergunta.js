
//Cria construtor
function PerguntaValidator() {

}


//Define as funções da classe
PerguntaValidator.prototype.checkBody = (req, res) => {
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

    if(req.body.pessoaId == ""){
        error  = {  location: 'body', 
                    param:    'pessoaId', 
                    msg:      'O id da pessoa deve ser informado', 
                    value:     req.body.pessoaId };

        errors.push(error);
    }

    
    return errors;
}

//Module.exports é o objeto que será retornado pelo 'require', nesse caso é a função construtora
module.exports = PerguntaValidator