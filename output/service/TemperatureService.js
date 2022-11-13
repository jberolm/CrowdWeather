'use strict';


/**
 * This method gets the average temperature in a city during the last hour.
 *
 * city String Name of the city to which calculate the temperature
 * returns Temperature
 **/
exports.getTempByCity = function(city) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "city" : "Cáceres",
  "temperature" : 27,
  "time" : "2017-07-21T17:32:28Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * This method stores a new value for the temepature sensed by a user in an specific city.
 *
 * body Temperature Add a new temperature. (optional)
 * no response value expected for this operation
 **/
exports.postTemp = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

