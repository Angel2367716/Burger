const orm = require ("../config/orm.js");

const burger = {
    all: function (cb){
        orm.all('burger', function(res){
            cb(res);
        })
    },
    update: function(id, cb) {
        orm.update ('burger', id, cb);
    }
}

module.exports = burger;