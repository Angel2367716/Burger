const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require ("method-override");
const exphbs = require ("express-handlebars");

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.static(_dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
