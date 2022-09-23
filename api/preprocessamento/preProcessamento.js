const substituirCaracterFilter = require('./substituirCaracter')
const removerCaracterFilter = require('./removerCaracter')
const removerSimbolosFilter = require('./removerSimbolo')
const removerStopwordFilter = require('./removerStopword')
const reducaoLexicalFilter = require('./reducaoLexical.js')

module.exports = (texto, res, token) => {
        
        substituirCaracterFilter(texto, token)
        .then(textoSubCaracter => removerCaracterFilter(textoSubCaracter, token))
        .then(textoRemoveCaracter => removerSimbolosFilter(textoRemoveCaracter, token))
        .then(textoRemoveSimbolos => removerStopwordFilter(textoRemoveSimbolos, token))
        .then(response => reducaoLexicalFilter(response, token))
        .then(response => res.send(response))
}
