const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require ("method-override");
const exphbs = require ("express-handlebars");

// const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

const routes = require ('./controllers/routes.js');
app.use('/', routes);

// app.listen(PORT, function() {
//   console.log("Listening on port:%s", PORT);
// });

const port = 3000; 
app.listen(port);