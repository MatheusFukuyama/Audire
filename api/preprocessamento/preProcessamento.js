const substituirCaracterFilter = require('./substituirCaracter')
const removerCaracterFilter = require('./removerCaracter')
const removerSimbolosFilter = require('./removerSimbolo')
const removerStopwordFilter = require('./removerStopword')
const reducaoLexicalFilter = require('./reducaoLexical.js')

module.exports = (texto, res) => {
        substituirCaracterFilter(texto)
        .then(textoSubCaracter => removerCaracterFilter(textoSubCaracter))
        .then(textoRemoveCaracter => removerSimbolosFilter(textoRemoveCaracter))
        .then(textoRemoveSimbolos => removerStopwordFilter(textoRemoveSimbolos))
        .then(response => reducaoLexicalFilter(response))
        .then(response => res.send(response))
}
