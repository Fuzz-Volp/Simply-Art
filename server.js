require("dotenv").config();

/**
 * Requirements
 */
const express = require("express");
const app = express();

/**
 * Configuration
 */
const PORT = process.env.PORT || 3000;

/**
 *  Getting Controllers
 */
const artController = require("./controllers/art/artController");
const userController = require("./controllers/user/userController");
const contactController = require("./controllers/contact/contactController")

//connect to database
const db = require("./db");
db.once("open", () => {
  console.log("connected to mongo");
});

/**
 * Middleware
 */
const setupMiddleware = require("./middleware/setupMiddleware");

setupMiddleware(app);

/**
 * View engine
 */
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

/**
 * Using Controllers
 */

app.use("/arts", artController);
app.use("/user", userController);
app.use("/contact", contactController);

// We are just going to redirect to /arts if the user goes to our base route
app.get("/", (req, res) => {
  res.redirect("/arts/  ");
});


// Pages
app.get("/about", (req, res) => {
  res.render("pages/About")
})

// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});