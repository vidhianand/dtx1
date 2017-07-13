
//sensor_id = temperature or voltage
//Returns json data(temperature) of the requested sensor for a given turbine

function readTurbin{

        //Uses request module to make an 'http' calls required for API's
        var request = require("request");

        //generates a POST request with the authorization token 

        var options = { method: ‘GET',

                  url: "https://turbine-farm.run.aws-usw02-pr.ice.predix.io/api/turbines/2/sensors/temperature"
                  //url: "https://turbine-farm.run.aws-usw02-pr.ice.predix.io/api/turbines/2/sensors/voltage"
                        };

    request(options, function (error, response, body) {

          if (error) throw new Error(error);

             });


}

//parses the json file 

function parseJson(inJson){

    //Verifies valid function parameters
    try{
        if (json == "") throw "There is no json file";

        }
    catch(err){

    console.error("Error:", err.messgae);
             }

    //parses the inJson message for timestamp,turbin_id, value
    var timestamp = inJson['timestamp'];
    var turbin_d = inJson['turbin_id'];
    var value = inJson['value'];

}
 




