const substituirCaracterFilter = require('./substituirCaracter')
const removerCaracterFilter = require('./removerCaracter')
const removerSimbolosFilter = require('./removerSimbolo')
const removerStopwordFilter = require('./removerStopword')
const reducaoLexicalFilter = require('./reducaoLexical.js')

module.exports = async(texto, token) => {
        const textoCaracterSubstituido = await substituirCaracterFilter(texto, token)
        const textoCaracter = await removerCaracterFilter(textoCaracterSubstituido, token)
        const textoSimbolo = await removerSimbolosFilter(textoCaracter, token)
        const textoStop = await removerStopwordFilter(textoSimbolo, token)
        const textoReducao = await reducaoLexicalFilter(textoStop, token)

        return textoReducao
}
