var http = require('http');
var app = require('./config/express')();

require('./config/database.js')('mongodb://localhost/todoando');

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express Server escutando porta' + app.get('port'));
});
