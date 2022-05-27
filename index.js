const express = require('express');
const app = express();
const template = require('./lib/template.js')
const fs = require('fs');

app.get('/', function (req, res) {
    fs.readdir('./data', function (err, filelist) {
        const title = 'Welcome';
        // 웹 페이지의 본문 내용
        const description = 'Hello, Node.js';
        // 게시글의 목록
        const list = template.List(filelist);
        const html = template.HTML(title, list, description, `<a href="/create">create</a>`);
        res.send(html);
    });
})

app.get('/page', function (req, res) {
    res.send('/page');
})

app.listen(3333);

