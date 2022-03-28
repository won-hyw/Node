const http = require('http');
const fs = require('fs');
const url = require('url');

// 모든 node 웹 서버 애플리케이션은 웹 서버 객체를 만들어야 함
// call back 함수 : 클라이언트가 웹페이지를 서버한테 요청할 때
const app = http.createServer(function (req, res) {
    let _url = req.url;
    let queryData = url.parse(_url, true).query; // Object Type을 JSON Type으로 변경해준다
    res.end(queryData.id); // id를 웹페이지 화면에 보여준다
  /*  if(url === '/')
        url = '/index.html';
    if(url === '/favicon.ico')
        return res.writeHead(404);
    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + url)) */
});

app.listen(3333);