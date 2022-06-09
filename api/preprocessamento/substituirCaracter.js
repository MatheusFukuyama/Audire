/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 20/03/2022
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data

const axios = require('axios')

module.exports = async(text) => {
    var textFiltred = text.toLowerCase()

    const baseUrl = 'localhost:8000/rest/acentuacoes'
    const options = {
        protocol: 'https',
        host: '127.0.0.1',
        port: 8000
    }

    
    try {
        const { data } = await axios.get( baseUrl, { proxy: options})
        
        let regex
        data.forEach(acento => {
            regex = new RegExp(`${acento.caracter}`, "gi");
            
            textFiltred = textFiltred.replace(regex, `${acento.suplente}`)
        });

        return textFiltred

    } catch(err) {
        console.error(err)
        return err
    }
}
