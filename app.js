const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes.js");
const apiRoutes = require("./routes/apiRoutes.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 4444;

htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, function(){
    console.log("Server listening on port: " + PORT);
});
