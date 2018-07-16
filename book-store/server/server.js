const express = require('express');
const expressApp = express();

const bookList = require('./server-response/bookList');

expressApp.get('/bookstore/bookList', function(req, res) {
    res.send(bookList);
})

expressApp.listen(3000);