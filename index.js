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

app.get('/page/:pageId', function (req, res) {
    fs.readdir('./data', function (err, filelist) {
        const list = template.List(filelist);
        const id = req.params.pageId;
        fs.readFile(`./data/${id}`, 'utf8', function (err, description) {
            const title = id;
            const html = template.HTML(title, list, description, `<a href="/create">create</a> 
                        <a href="update?id=${title}">update</a> 
                        <form action="delete_process" method="post">
                            <p><input type="hidden" name="id" value="${title}"></p>
                            <p><input type="submit" value="delete"></p>
                        </form>`);
            res.send(html);
        })
    });
})

app.listen(3333);

