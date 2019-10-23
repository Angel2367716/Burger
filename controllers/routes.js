const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', function (req, res) {
    burger.all(function (burger_data) {
        console.log(burger_data);
        res.render('index', { burger_data });
    })
})

router.put('/burger/update', function (req, res) {
    burger.update(req.body.burger_id, function (result) {
        console.log(result);
        res.redirect('/');
    });

});

module.exports = router;