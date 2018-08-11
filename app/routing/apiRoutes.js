var path = require("path");
var comics = require("../data/comics.js");

module.exports = function(app)
{

app.get("/api/comics", function(req, res) 
{
    res.json(comics);
});


app.post('/api/comics', function(req, res) {
    comics.push(req.body);
});

}
