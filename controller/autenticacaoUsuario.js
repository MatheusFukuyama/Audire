/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 10/06/2022
 * @desc: custom route for fetching data
*/

const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')
const axios = require('axios')

var validator    = new (require('./validators/comunicacao.js'))()
var Comunicacao   = require('../entity/comunicacao.js');

function ComunicacaoController() {
    var Persistence  = require('../persistence/comunicacao.js');
    var persistence  = new Persistence();
    
    this.signin = async (req, res) => {

        try {
            const baseUrl = 'localhost:8000/rest/pessoas'
            const options = {
                protocol: 'https',
                host: '127.0.0.1',
                port: 8000
            }
    
            let usuario
    
            if(!req.body.email || !req.body.senha ) {
                return res.status(400).send('Informe email e senha!')
            }
            
            const { data } = await axios.get(baseUrl, { proxy: options })
            
            data.forEach(pessoa => {
                if(pessoa.email === req.body.email) {
                    usuario = pessoa
                }
            });
    
            if(!usuario) return res.status(400).send('Usuário não encontrado!')
            
            const isMatch = bcrypt.compareSync(req.body.senha, usuario.senha)
            if(!isMatch) return res.status(401).send('Email/Senha inválidos!')
            
            
            const now = Math.floor(Date.now() / 1000)
    
            const payload = {
                id: usuario.id,
                primeiroNome: usuario.primeiroNome,
                ultimoNome: usuario.ultimoNome,
                email: usuario.email,
                generoId: usuario.generoId,
                iat: now,
                exp: now + (60 * 60 * 24 * 3)
            }
    
            res.json({
                ...payload,
                token: jwt.encode(payload, authSecret)
            })
        } catch(e) {
            return console.log(e)
        }

    }


    const validatorToken = async (req, res) => {
        const infoUsuario = req.body || null

        try {
            if(infoUsuario) {
                const token = jwt.decode(infoUsuario.token, authSecret)
                if(new  Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch(e) {
            console.log(e)
        }

        res.send(false)
    }


}

module.exports = ComunicacaoController;