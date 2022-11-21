//Dependencies
const express = require("express");

// Express Configuration
// Tells node that we are creating an "Express" server
const app = express();

// Sets a dynamic port
const PORT = process.env.PORT || 3000;

// Sets up Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))


// Requiring API and HTML routes
require("./routes/api")(app);
require("./routes/htmlRoutes")(app);


// Listener
app.listen(PORT, () => console.log(`app listening on PORT: ${PORT}`));