/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 21/11/2021
 * @desc: Creating server using express.js
 * 
 * http://localhost:8000/rest/users
 * http://localhost:8000/rest/user/1
 * http://localhost:8000/rest/regions
 * http://localhost:8000/rest/region/1
*/
var express          = require('express');
// Helen- Comentei para resolver depois
//var sqlinjection     = require('sql-injection');
var bodyparser       = require('body-parser');
var validator        = require("express-validator");

var routePersonagem        = require('./routes/personagem');
var routeTipoPersonagem        = require('./routes/tipoPersonagem');
var routeGenero        = require('./routes/genero');
var routeCriador        = require('./routes/criador');
var routeIdioma        = require('./routes/idioma');
var routeCaracterEspecial        = require('./routes/caracterEspecial');
var routeSimbolo        = require('./routes/simbolo');
var routeStopword       = require('./routes/stopword');
var routeConfiguracao       = require('./routes/configuracao');
var routeReducaoLexical       = require('./routes/reducaoLexical');


// creating server instance
var app = express();


// parsing JSON
app.use(bodyparser.json());

// for posting nested object if we have set extended true
// Helen: gostaria de usar sqlinjection, mas quando inseri, não funcionou mais o insert, update e delete
// Comentei para resolver depois
//app.use(sqlinjection);

app.use(bodyparser.urlencoded({ extended : true}));
// Helen - parece que houve uma mudança no uso. Não sei onde estou usando validator
//app.use(validator());


//set application route with server instance

routePersonagem.configure(app);
routeTipoPersonagem.configure(app);
routeGenero.configure(app);
routeCriador.configure(app);
routeIdioma.configure(app);
routeCaracterEspecial.configure(app);
routeSimbolo.configure(app);
routeStopword.configure(app);
routeConfiguracao.configure(app);
routeReducaoLexical.configure(app);

app.get('/', (req, res) => {
    res.send('foi')
})

// listening application on port 8000
var server = app.listen(8000, function(){
    console.log('Server Listening on port ' + server.address().port);
});