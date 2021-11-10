const express = require('express');

const server = express();

const PORT = 1234;

server.get('/', function (req, res) {

    res.send('hello there')
});

server.post('/user/progress', function (req, res) {

    res.sendStatus(200);
    res.send({
        UserId: 1
    })

})
server.listen(PORT, () => {

    console.log('listening to port 1234')
});

module.exports = {
    server
};