const http = require("http");
const express = require("express");

const app = express();

app.get('/', (req,res) => {
    return res.send("Hello From Home Page");
});
app.get('/about', (req,res) => {
    return res.send(
        `Hello ${req.query.name} and my age is ${req.query.age}`
    );
});

const myServer = http.createServer(app);

myServer.listen(8000, () => console.log("Server Started!"));
