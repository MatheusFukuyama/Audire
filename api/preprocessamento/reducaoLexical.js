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


const baseUrlRadical = `localhost:8000/rest/reducaoLexical/`
const baseUrlReducao = `localhost:8000/rest/reducoesLexicais`
    const options = {
        protocol: 'https',
        host: '127.0.0.1',
        port: 8000
}

async function substituirPalavra(radical, token) {

    let {data} = await axios.get(baseUrlRadical + `${radical}`, { proxy: options, headers: { 'Authorization': token }})

    return data[0].palavra
    
}

module.exports = async(text, token) => {
    var textFiltred = text
    let radical

    try {
        let { data } = await axios.get(baseUrlReducao, { proxy: options, headers: { 'Authorization': token }})

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
