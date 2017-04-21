const mongoose = require('mongoose');
const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const async = require('async');
const glob = require('glob');
const path = require('path');
const router = require('./router');
const constant = require('./config/constant');
const UserStatus = require('./model/userStatus');
const User = require('./model/user');
const status = {};

glob("./wechat-status/*.js", {}, (err, files) => {
    files.forEach((file) => {
        let pathName = path.basename(file, '.js');
        let Clazz = require(file);
        status[pathName] = new Clazz();
    });
});

mongoose.connect(config.get('mongoUri'),(err) => {
    if (err) {
        console.log('connect failed');
    }else {
        console.log('connect success');
    }
});

const app = express();
app.use(bodyParser.json());
app.post('/wechat', (req, res) => {
    const userId = req.body.senderInfo.NickName;
    const type = req.body.message.type;
    const str = req.body.message.info;
    async.waterfall([
        (done) => {
            UserStatus.findOne({userId}, done);
        },
        (data, done) => {
            if (!data) {
                status['info'].handler(userId, str, type, done);
            } else {
                status[data.status].handler(userId, str, type, done);
            }
        }
    ],(err, data) => {
        if (err) {
            return res.sendStatus(constant.httpCode.BAD_REQUEST);
        }
        return res.status(constant.httpCode.OK).send(data);
    });
});

app.get('/userStatus', (req, res) => {
    UserStatus.find({},(err, data) => {
        if (err) {
            return res.sendStatus(constant.httpCode.NO_CONTENT);
        }
         return res.status(constant.httpCode.OK).send(data);
    });
});
app.get('/user', (req, res) => {
    User.find({},(err, data) => {
        if (err) {
            return res.sendStatus(constant.httpCode.NO_CONTENT);
        }
        return res.status(constant.httpCode.OK).send(data);
    });
});
app.listen(config.get('httpPort'), ()=> {
    console.log('server started at http://localhost:' + config.get('httpPort'));   // eslint-disable-line no-console
});

