const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

// Middleware for static files
app.use('/static', express.static(path.join(__dirname, 'static')));

// Set template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get("/", (req, res) => {
  res.render("home.pug", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about.pug", { title: "About" });
});

app.get("/contact", (req, res) => {
  res.render("contact.pug", { title: "Contact" });
});
app.get("/services", (req, res) => {
  res.render("services.pug", { title: "Services" });
});
app.get("/classinfo", (req, res) => {
  res.render("classinfo.pug", { title: "classinfo" });
});


app.get("/explore", (req, res) => {
  res.render("explore.pug", { title: "Explore More" });
});



// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

