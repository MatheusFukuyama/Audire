
//Cria construtor
function CriadorValidator() {

}


//Define as funções da classe
CriadorValidator.prototype.checkBody = (req, res) => {
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

    if(req.body.nome == ""){
        error  = {  location: 'body', 
                    param:    'nome', 
                    msg:      'O nome deve ser informado', 
                    value:     req.body.nome };

        errors.push(error);
    }

    if(req.body.codigo == ""){
        error  = {  location: 'body', 
                    param:    'codigo', 
                    msg:      'O codigo deve ser informado', 
                    value:     req.body.codigo };

        errors.push(error);
    }

    
    return errors;
}

//Module.exports é o objeto que será retornado pelo 'require', nesse caso é a função construtora
module.exports = CriadorValidator