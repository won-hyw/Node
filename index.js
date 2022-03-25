const http = require('http');
const fs = require('fs');

// 모든 node 웹 서버 애플리케이션은 웹 서버 객체를 만들어야 함
// call back 함수
const app = http.createServer(function (req, res) {
    let url = req.url;

    if(url === '/')
        url = '/index.html';
    if(url === '/favicon.ico')
        return res.writeHead(404);
    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + url));
});

app.listen(3333);