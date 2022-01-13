const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn");
const hbs = require("hbs");
const User = require('./models/usermessage');

//setting path

const staticPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");



//middleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.static(staticPath));
app.use(express.urlencoded({ extended: false }));
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
app.set("view engine", "hbs");


//routing

app.get("/", (req, res) => {
    res.render("index");
})

app.post("/contact", async (req, res) => {
    try {
        // res.send(req.body);
        const userData = new User(req.body);
        // console.log(userData);
        await userData.save();
        res.status(201).render("index");
    } catch (error) {
        res.status(500).send(error);
    }
})




//Server create

app.listen(port, () => {
    console.log(`listing to ${port}`);
})