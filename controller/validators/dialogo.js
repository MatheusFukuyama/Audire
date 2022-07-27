
//Cria construtor
function DialogoValidator() {

}


//Define as funções da classe
DialogoValidator.prototype.checkBody = (req, res) => {
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

    if(req.body.dataRealizacao == ""){
        error  = {  location: 'body', 
                    param:    'dataRealizacao', 
                    msg:      'A data de realizacao deve ser informado', 
                    value:     req.body.dataRealizacao };

        errors.push(error);
    }

    if(req.body.pergunta == ""){
        error  = {  location: 'body', 
                    param:    'pergunta', 
                    msg:      'A pergunta deve ser informado', 
                    value:     req.body.pergunta };

        errors.push(error);
    }
    
    return errors;
}

//Module.exports é o objeto que será retornado pelo 'require', nesse caso é a função construtora
module.exports = DialogoValidator