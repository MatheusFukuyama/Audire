
//Cria construtor
function IdiomaValidator() {

}


//Define as funções da classe
IdiomaValidator.prototype.checkBody = (req, res) => {
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
    
    return errors;
}

//Module.exports é o objeto que será retornado pelo 'require', nesse caso é a função construtora
module.exports = IdiomaValidator