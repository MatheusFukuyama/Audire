/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 21/03/2022
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data

const axios = require('axios');
const reducaoLexical = require('../../routes/reducaoLexical');

const https = require('https');
const { response } = require('express');
const { format } = require('path');


async function substituirPalavra(radical) {

    let {data} = await axios.get(`localhost:8000/rest/reducaoLexical/${radical}`, { proxy: {
        protocol: 'https',
        host: '127.0.0.1',
        port: 8000
    }})

    return data[0].palavra
    
}

module.exports = async(text) => {
    var textFiltred = text.toLowerCase()
    let options, radical

    try {
        let { data } = await axios.get('localhost:8000/rest/reducoesLexicais', { proxy: {
            protocol: 'https',
            host: '127.0.0.1',
            port: 8000
        }})

        textFiltred = textFiltred.split(" ");
        

    for (let i=0; i < data.length; i++) {
        for(let j=0; j < textFiltred.length; j++)  {

            if(textFiltred[j] == data[i].palavra) {
                radical = await substituirPalavra(data[i].radical)
                
                console.log(radical)

                textFiltred[j] = radical
                      
            }

        }
    }

    textFiltred = textFiltred.join(" ")

    return textFiltred

    } catch(err) {
        console.error(err)
        return err
    }
}
