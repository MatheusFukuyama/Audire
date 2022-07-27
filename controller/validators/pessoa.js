
//Cria construtor
function PessoaValidator() {

}


//Define as funções da classe
PessoaValidator.prototype.checkBody = (req, res) => {
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

    if(req.body.primerioNome == ""){
        error  = {  location: 'body', 
                    param:    'primeiroNome', 
                    msg:      'O primeiro nome deve ser informado', 
                    value:     req.body.primeiroNome };

        errors.push(error);
    }

    if(!req.body.ultimoNome){
        error  = {  location: 'body', 
                    param:    'ultimoNome', 
                    msg:      'O último nome deve ser informado', 
                    value:     req.body.ultimoNome };

        errors.push(error);
    }

    if(!req.body.email){
        error  = {  location: 'body', 
                    param:    'email', 
                    msg:      'O email deve ser informado', 
                    value:     req.body.email };

        errors.push(error);
    }
    
    if(!req.body.senha){
        error  = {  location: 'body', 
                    param:    'senha', 
                    msg:      'A senha deve ser informado', 
                    value:     req.body.senha };

        errors.push(error);
    }

    if(!req.body.generoId){
        error  = {  location: 'body', 
                    param:    'generoId', 
                    msg:      'O id di genero deve ser informado', 
                    value:     req.body.generoId };

        errors.push(error);
    }


    return errors;
}

//Module.exports é o objeto que será retornado pelo 'require', nesse caso é a função construtora
module.exports = PessoaValidator