var http = require('http');
var url = 'https://api.openweathermap.org/data/2.5/weather?id={city-id}&appid={app-key}&units=metric';
// var url = 'https://api.openweathermap.org/data/2.5/weather?id=5927689&appid=03171a167ca4f136de2ad284eccc32ff&units=metric';

var server = http.createServer(function (request, response) {
    var request = require('request');
    request(url, function (err, res, body) {
        var data = JSON.parse(body);
        response.write("<html><body><div id='container'>");
        response.write("<h2>" + 'Location: ' + data['name'] + ', ' + data.sys['country'] + '<br>' + "</h2>");
        response.write("<h2>" + 'Temperature: ' + data.main['temp'] + ' Celsius' + '<br>' + "</h2>");
        response.write("<h2>" + 'Weather: ' + data.weather[0].description + '<br>' + "</h2>");
        response.write("<h2>" + 'Wind: ' + data.wind['speed'] + ' m/s' + '<br>' + "</h2>");
        response.write("<h2>" + 'SunSet Time: ' + new Date(data.sys['sunset']*1000) + "</h2>");
        response.write("</div></body></html>");
        response.end();
    })
}).listen(8888);