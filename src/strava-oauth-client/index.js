require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(express.json());
app.use(cors());

const port = 8081;

app.post('/', function (req, res) {
    const { code } = req.body;
    fetch('https://www.strava.com/oauth/token', {
        method: 'POST',
        body: JSON.stringify({
            code,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            grant_type: 'authorization_code'
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(json => {
        console.log(json)
        res.json(json);
    });
});

app.use(function(req, res){
    res.status(404);
    res.send({ error: "Endpoint does not exist." });
});

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.send({ error: err.message });
});

app.listen(process.env.PORT || port, () => {
    console.log(`Express listening on port: ${port}`)
});