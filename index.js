const http = require('http');
const fs = require('fs');
const url = require('url');

// 모든 node 웹 서버 애플리케이션은 웹 서버 객체를 만들어야 함
// call back 함수
const app = http.createServer(function (req, res) {
    let _url = req.url;
    let queryData = url.parse(_url, true).query;
    res.end(queryData.id);
  /*  if(url === '/')
        url = '/index.html';
    if(url === '/favicon.ico')
        return res.writeHead(404);
    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + url)) */
});

app.listen(3333);