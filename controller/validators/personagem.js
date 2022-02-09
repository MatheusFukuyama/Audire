
//Cria construtor
function PersonagemValidator() {

}


//Define as funções da classe
PersonagemValidator.prototype.checkBody = (req, res) => {
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

    if(!req.body.dataCriacao){
        error  = {  location: 'body', 
                    param:    'dataCriacao', 
                    msg:      'A data da criação deve ser informado', 
                    value:     req.body.dataCriacao };

        errors.push(error);
    }

    if(!req.body.visibilidade){
        error  = {  location: 'body', 
                    param:    'visibilidade', 
                    msg:      'A visibilidade deve ser informado', 
                    value:     req.body.visibilidade };

        errors.push(error);
    }
    
    if(!req.body.tipoPersonagemId){
        error  = {  location: 'body', 
                    param:    'tipoPersonagem', 
                    msg:      'tipo do personagem deve ser informado', 
                    value:     req.body.tipoPersonagemId };

        errors.push(error);
    }
    
    if(!req.body.generoId){
        error  = {  location: 'body', 
                    param:    'genero', 
                    msg:      'genero deve ser informado', 
                    value:     req.body.genero };

        errors.push(error);
    }

    if(!req.body.criadorId){
        error  = {  location: 'body', 
                    param:    'criador', 
                    msg:      'criador deve ser informado', 
                    value:     req.body.criador };

        errors.push(error);
    }
    

    return errors;
}

//Module.exports é o objeto que será retornado pelo 'require', nesse caso é a função construtora
module.exports = PersonagemValidator