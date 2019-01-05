const axios = require('axios');

exports.handler = function(event, context, callback){
    const API_URL = 'https://api.github.com/users';
    const API_CLIENT_ID = 'xxxx';
    const API_CLIENT_SECRET = 'yyyy';

    const URL = `${API_URL}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`;

    //Send User Response
    const send = body => {
        callback(null, {
            statusCode: 200,
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 
                'Origin, X-Requested-With, Content-Type, Accept'
            },
            body: JSON.stringify(body)
        });
    }

    //Perform API Call
    const getUsers = () => {
        axios.get(URL)
            .then(res => send(res.data))
            .catch(err => send(err));
    }

    //Make sure method is GET
    if(event.httpMethod == 'GET'){
        //Run
        getUsers();
    }

}