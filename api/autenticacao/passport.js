const { authSecret } = require('../../.env')
const passportJwt = require('passport-jwt')
const { Strategy, ExtractJwt } = passportJwt
const axios = require('axios')
const pessoa = require('../../models/relational/pessoa')

module.exports = passport => {
    const baseUrl = 'localhost:8000/rest/pessoas'
    const options = {
        protocol: 'https',
        host: '127.0.0.1',
        port: 8000
    }

    const params = {
        secretOrKey: authSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() 
    }


    let usuario
    passport.use(
        new Strategy(params, (jwt_payload, done) => {
                axios.get(baseUrl, { proxy: options })
                .then(pessoas => {
                        pessoas.data.forEach(pessoa => {
                        if(pessoa.id === jwt_payload.id)
                            usuario = pessoa
                        })
                        
                        return usuario
                    }
                )
                .then(usuario => done(null, usuario ? {...jwt_payload} : false))
                .catch(err => done(err, false))
            })
    )
         
}

