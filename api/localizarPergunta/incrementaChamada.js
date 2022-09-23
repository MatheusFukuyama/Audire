/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 22/06/2022
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data

const axios = require('axios')

module.exports = async(perguntaRetornada, token) => {    

    try {
        const baseUrl = 'localhost:8000/rest/pergunta'
        const options = {
            protocol: 'https',
            host: '127.0.0.1',
            port: 8000
        }

        const form = {
            id: perguntaRetornada.id,    
            enunciado: perguntaRetornada.enunciado,
            tipo: perguntaRetornada.tipo,
            chamada: perguntaRetornada.chamada <= 100 ? 0 : perguntaRetornada.chamada + 1,
            perguntaRaiz: perguntaRetornada.perguntaRaiz,
            pessoaId: perguntaRetornada.pessoaId
        }


        const { response }  = await axios({
            method: "put",
            url: baseUrl,
            data: form,
            proxy: options,
            headers: {'Authorization': token}
        })
        

            
    } catch(err) {
        console.error(err)
        return err
    }
}