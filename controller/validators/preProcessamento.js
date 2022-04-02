
//Cria construtor
function PreProcessamentoValidator() {

}


//Define as funções da classe
PreProcessamentoValidator.prototype.checkBody = (req, res) => {
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

    if(req.body.texto == ""){
        error  = {  location: 'body', 
                    param:    'texto', 
                    msg:      'O texto deve ser informado', 
                    value:     req.body.texto };

        errors.push(error);
    }
    
    return errors;
}

//Module.exports é o objeto que será retornado pelo 'require', nesse caso é a função construtora
module.exports = PreProcessamentoValidator