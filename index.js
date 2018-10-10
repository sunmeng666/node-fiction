const http = require('http');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const port = '3456';
const hostName = '127.0.0.1';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

// app.post('/search',async(req,res) => {
//     console.log(req,res)
//     const file = path.join(__dirname, 'data/test.json'); //文件路径，__dirname为当前运行js文件的目录
//     fs.readFile(file, 'utf-8', function(err, data) {
//         if (err) {
//             res.send('文件读取失败');
//         } else {
//             res.send(data);
//         }
//     });
// })

app.use(function(req, res) {
    // console.log(req.body)
    const file = path.join(__dirname, 'data/test.json'); //文件路径，__dirname为当前运行js文件的目录
    // console.log(file);
    fs.readFile(file, 'utf-8', function(err, data) {
        const result = data.replace(/(\r\n)|(\n)/g,'');
        console.log(JSON.parse(result).data[0].src)
        if (err) {
            return res.send('文件读取失败');
        } else {
            console.log(req.body)
            
            return res.status(200).json({ src:JSON.parse(result).data[0].src});
        }
    });
});
app.listen(port, hostName, function() {
    console.log(`服务器运行在http://${hostName}:${port}`);
});
