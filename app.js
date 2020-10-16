const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

const PORT = process.env.PORT || 4444;

htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, function(){
    console.log("Server listening on port: " + PORT);
});
