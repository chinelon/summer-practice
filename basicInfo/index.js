
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = q.pathname;
    var path;

    if (filename === '/index.html' || filename ==='/') {
        path = './index.html'
    } else if ( filename === '/about.html'){
        path = './about.html'
    } else if ( filename === '/contact-me.html') {
        path = './contact-me.html'
    } else path = './404.html'

    fs.readFile(path, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);
