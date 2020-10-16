const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

const dbFilePath = path.join(__dirname, "../db/db.json");

const apiRoutes = function(app){
    app.get("/api/notes", function(req, res){
        fs.readFile(dbFilePath, "utf8", function(err, data){
            console.log("Getting 'db.json'");
            res.json(data);
        });
    });

    app.post("/api/notes", function(req, res){
        const body = req.body;
        body.uid = uuidv4();

        fs.appendFile(dbFilePath, body, function(err){
            if(err){
                throw err;
            }

            console.log("Added to 'db.json'")
        });

        res.json(body);
    });

    app.delete("/api/notes/:id", function(req, res){
        const dbData = fs.readFile(dbFilePath, "utf8", function(err,data){
            if(err){
                throw err;
            }

            return data;
        });

        console.log(dbData);
    })
};

module.exports = apiRoutes;