var request = require('request');

//Custom Header pass
var headersOpt = {  
    "content-type": "application/json",
};
request(
        {
        method:'post',
        url:'http://localhost:8000/rest/user', 
        form: {name:'otilia'}, 
        headers: headersOpt,
        json: true,
    }, function (error, response, body) {  
        //Print the Response
        console.log(response);  
}); 