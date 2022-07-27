const substituirCaracterFilter = require('./substituirCaracter')
const removerCaracterFilter = require('./removerCaracter')
const removerSimbolosFilter = require('./removerSimbolo')
const removerStopwordFilter = require('./removerStopword')
const reducaoLexicalFilter = require('./reducaoLexical.js')

module.exports = async(texto) => {
        const textoCaracterSubstituido = await substituirCaracterFilter(texto)
        const textoCaracter = await removerCaracterFilter(textoCaracterSubstituido)
        const textoSimbolo = await removerSimbolosFilter(textoCaracter)
        const textoStop = await removerStopwordFilter(textoSimbolo)
        const textoReducao = await reducaoLexicalFilter(textoStop)

        return textoReducao
}
