var fs = require('fs');
var http = require('http');
var file = './JENNIE - SOLO MV.mp4';

http.createServer((req, res) => {

    fs.readFile(file, (error, data) => {
        if (error) {
            console.log('Ops something wrong: ', error);
        }
        res.writeHeader(200, { 'Content-Type': 'video/mp4' });
        res.end(data);
    })

}).listen(3000, () => console.log('buffer - http://localhost:3000'));
