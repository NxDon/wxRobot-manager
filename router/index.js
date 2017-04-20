const userStatus = require ('./routers/userStatus');
const user = require ('./routers/user');
const question = require('./routers/question');
const answer = require('./routers/answer');

export default function(app) {
    app.use('/user', user);
    app.use('/question', question);
    app.use('/answer', answer);
    app.use('/userStatus', userStatus);
}