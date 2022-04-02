/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 19/03/2022
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data

const axios = require('axios')

module.exports = async(text) => {
    var textFiltred = text
    
    try {
        const { data } = await axios.get('localhost:8000/rest/simbolos', { proxy: {
            protocol: 'https',
            host: '127.0.0.1',
            port: 8000
          }})
        
        let regex
        data.forEach(simboloObjeto => {
            regex = new RegExp(`${simboloObjeto.simbolo}`, 'g');

            textFiltred = textFiltred.replace(regex, "")
        });

        return textFiltred

    } catch(err) {
        console.error(err)
        return err
    }
}
