
//Cria construtor
function DialogoMapValidator() {

}


//Define as funções da classe
DialogoMapValidator.prototype.checkBody = (req, res) => {
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

    if(req.body.dialogoId == ""){
        error  = {  location: 'body', 
                    param:    'dialogoId', 
                    msg:      'O dialogo deve ser informado', 
                    value:     req.body.dialogoId };

        errors.push(error);
    }
    
    return errors;
}

//Module.exports é o objeto que será retornado pelo 'require', nesse caso é a função construtora
module.exports = DialogoMapValidator