/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 20/03/2022
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data

const axios = require('axios')

module.exports = async(text) => {
    var textFiltred = text
    console.log("chegou aqui")
    try {
        const { data } = await axios.get('localhost:8000/rest/acentuacoes', { proxy: {
            protocol: 'https',
            host: '127.0.0.1',
            port: 8000
          }})
        
        let regex
        data.forEach(acento => {
            regex = new RegExp(`\\s${acento.caracter}\\s`, "gi");

            textFiltred = textFiltred.replace(regex, ` ${acento.suplente} `)
        });

        return textFiltred

    } catch(err) {
        console.error(err)
        return err
    }
}
