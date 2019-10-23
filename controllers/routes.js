const express = require('express');
const router = express.Router();

router.get('/', function (req, res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render('index');
    })
})

module.exports = router;