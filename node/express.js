const express = require('express');
const app = express();
const port = 8888;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
    next();
})

const animalfacts = require('./animalfacts');


app.get('/dogFacts', (request, result) => {
    result.send({ facts: animalfacts.dogFact, extra: animalfacts.dogFactExtra})
})

app.get('/catFacts', (request, result) => {
    result.send({ facts: animalfacts.catFact, extra: animalfacts.catFactExtra})
})

app.listen(port, () => console.log(`Server running at localhost: ${port}!`))