/**
 * @author: Helen de Freitas Santos
 * @date: 07/07/2018
 * @desc: methods for fetching mysql data
*/

var Error = function(params) {
    this.code     = params.code;
    this.message  = params.message;
    this.response = params.response;
}

module.exports = Error;