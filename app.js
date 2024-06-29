const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const myRawData = fs.readFileSync('data.txt', 'utf8');
const myData = myRawData.split('\n');

app.get('/', (req, res) => {
    res.send('Response bitch');
});

app.get('/:id', (req, res) => {
    let id = req.params.id -1;
    //fix negative responses
    if (id < 1) {
        id = id * -1;
    }
    //fix id > 10000
    if (id > 999) {
        id = id % 1000
    }
    res.send(myData[id]);
});

app.listen(port, () => {
    console.log('hello world'); 
    console.log('server is up');
});