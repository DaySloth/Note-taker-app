const path = require("path");
const fs = require("fs");

const apiRoutes = function(app){
    app.get("/api/notes", function(req, res){
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function(err, data){
            console.log("Getting 'db.json'");
            res.json(data);
        });
    });
};

module.exports = apiRoutes;