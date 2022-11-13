'use strict';

var utils = require('../utils/writer.js');
var Temperature = require('../service/TemperatureService');

module.exports.getTempByCity = function getTempByCity (req, res, next, city) {
  Temperature.getTempByCity(city)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postTemp = function postTemp (req, res, next, body) {
  Temperature.postTemp(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
