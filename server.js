/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 21/11/2021
 * @desc: Creating server using express.js
 * 
*/
var express          = require('express');
var bodyparser       = require('body-parser');
var validator        = require("express-validator");
const passport       = require('passport')
const swaggerUi      = require('swagger-ui-express')
const swaggerDocs    = require('./swagger.json')

var routePersonagem             = require('./routes/personagem');
var routeGenero                 = require('./routes/genero');
var routeIdioma                 = require('./routes/idioma');
var routeCaracterEspecial       = require('./routes/caracterEspecial');
var routeSimbolo                = require('./routes/simbolo');
var routeStopword               = require('./routes/stopword');
var routeConfiguracao           = require('./routes/configuracao');
var routeReducaoLexical         = require('./routes/reducaoLexical');
var routeAcentuacao             = require('./routes/acentuacao');
var routePreProcessamento       = require('./routes/preProcessamento');
var routePergunta               = require('./routes/pergunta');
var routeContexto               = require('./routes/contexto');
var routeRespostaContexto       = require('./routes/respostaContexto');
var routePerguntaMap            = require('./routes/perguntaMap');
var routePessoa                 = require('./routes/pessoa');
var routeLocalizaPergunta       = require('./routes/localizaPergunta');
var routeComunicacao            = require('./routes/comunicacao');
var routeDialogo                = require('./routes/dialogo');
var routeDialogoMap             = require('./routes/dialogoMap');
var routeEstrategia             = require('./routes/estrategia');
var routePerguntaContexto       = require('./routes/perguntaContexto');
var routeAutenticacaoUsuario    = require('./routes/autenticacaoUsuario');
const { Passport } = require('passport');


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
app.use(passport.initialize())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

routePersonagem.configure(app);
routeGenero.configure(app);
routeIdioma.configure(app);
routeCaracterEspecial.configure(app);
routeSimbolo.configure(app);
routeStopword.configure(app);
routeConfiguracao.configure(app);
routeReducaoLexical.configure(app);
routeAcentuacao.configure(app);
routePreProcessamento.configure(app);
routePergunta.configure(app);
routeContexto.configure(app);
routeRespostaContexto.configure(app);
routePerguntaMap.configure(app);
routePessoa.configure(app);
routeLocalizaPergunta.configure(app);
routeComunicacao.configure(app);
routeDialogo.configure(app);
routeDialogoMap.configure(app);
routeEstrategia.configure(app);
routePerguntaContexto.configure(app);
routeAutenticacaoUsuario.configure(app);

require('./api/autenticacao/passport')(passport)

app.get('/', async(req, res) => {
    res.send('foi')
})

// listening application on port 8000
var server = app.listen(8000, function(){
    console.log('Server Listening on port ' + server.address().port);
});