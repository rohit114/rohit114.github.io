const express = require('express');
const app = express();
const port = 8080;
const path = require('path');


app.use(express.static('public'));

app.get("/images/:file", function(req, res) {
    res.sendFile(path.join(__dirname, "images", req.params.file));
});

app.get("/CSS/:file", function(req, res) {
    res.sendFile(path.join(__dirname, "CSS", req.params.file));
});


app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname + "/_layouts/default.html"));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));