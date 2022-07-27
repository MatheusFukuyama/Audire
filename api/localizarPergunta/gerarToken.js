/**
 * @author: Helen de Freitas Santos
 * @author: Matheus Shinji Fukuyama
 * @date: 20/06/2022
 * @desc: methods for fetching mysql data
*/
//methods for fetching mysql data

module.exports = (enunciadoLimpo) => {
    try {
        const tokens = enunciadoLimpo.split(" ");
        return tokens

    } catch(err) {
        console.error(err)
        return err
    }
}
