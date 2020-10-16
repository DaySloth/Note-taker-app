const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 4444;

htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, function(){
    console.log("Server listening on port: " + PORT);
});
