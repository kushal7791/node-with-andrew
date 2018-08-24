const request = require('request');

request({
    //url: 'https://maps.googleapis.com/maps/api/geocode/json?address=wright%town%jabalpur',//without api google allows only 3 request-response.
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key=eGFTc6ADrt14Iql7WHT5R7JaD1VO2rR4&location=wright%town%jabalpur',
    json: true
}, (error, response, body) => {
    //console.log(body);    
    
    //console.log(JSON.stringify(body, undefined, 2));

    //console.log(JSON.stringify(response, undefined, 2));
    //console.log(JSON.stringify(error, undefined, 2));
    
    //console.log(`Address : ${body.results[0].locations[0].street}`);

    console.log(`Lattitude : ` + body.results[0].locations[0].latLng.lat);
    console.log(`Longitude : ` + body.results[0].locations[0].latLng.lng);
});