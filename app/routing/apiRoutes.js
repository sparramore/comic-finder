var comics = require("../data/comics.js");


app.get("/api/comics", function(req, res) 
{
    console.log(comics);

    res.sendFile(path.join(__dirname, "../data/comics.js"));
});