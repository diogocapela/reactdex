const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/pokemons', (req, res) => {


    request('https://pokeapi.co/api/v2/pokedex/1/', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        res.json(JSON.parse(body));
    });

});

module.exports = router;