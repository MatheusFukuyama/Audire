/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 20/03/2022
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data

const axios = require('axios')

module.exports = async(text, token) => {
    var textFiltred = text

    const baseUrl = 'localhost:8000/rest/stopwords'
    const options = {
        protocol: 'https',
        host: '127.0.0.1',
        port: 8000
    }
    
    try {
        const { data } = await axios.get(baseUrl, { proxy: options, headers: { 'Authorization': token }})
        
        let regex
        data.forEach(stopword => {
            regex = new RegExp(`\\s${stopword.palavra}\\s`, "gi");

            textFiltred = textFiltred.replace(regex, " ")
        });

        return textFiltred

    } catch(err) {
        console.error(err)
        return err
    }
}
