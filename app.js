const express = require("express");
const port = 3000;
const app = express();
const dotenv = require("dotenv");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");

dotenv.config();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/main");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {

  const renderSkills = ["AJAX", "JQuery", "Mailchimp API", "Passport.js", "Google OAuth", "Day.js"];
  const renderTechStack = ["Mongoose", "MongoDB", "Express.js", "Javascript", "EJS", "Bootstrap", "CSS", "HTML"];

  const blogTechStack = ["Mongoose", "MongoDB", "Express.js", "Javascript", "EJS", "Bootstrap", "CSS", "HTML"];
  const simonTechStack = ["Javascript", "JQuery", "CSS", "HTML"];
  const diceTechStack = ["Javascript", "JQuery", "CSS", "HTML"];

  res.render("home", {
    title: "Kate Southwart",
    renderSkills,
    renderTechStack,
    blogTechStack,
    simonTechStack,
    diceTechStack
  });
});

app.listen(process.env.PORT || port, () => {
  console.log("Server is running on port 3000.");
});
